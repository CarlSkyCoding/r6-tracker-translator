(() => {
    const STYLE_ID = "__r6tracker_inline_noads_style__";

    const NOADS_CSS = `
html:not(.r6tracker-noads-off) .v3-grid--sidebar-left {
  grid-template-columns: auto !important;
}
.ad-container {
    display: none !important;
}

#transparentInner {
    display: none !important;
}
`.trim();

    const isOverview = () =>
        /\/r6siege\/profile\/ubi\/[^/]+\/overview\/?$/i.test(location.pathname);
    const isTrend = () =>
        /\/r6siege\/profile\/ubi\/[^/]+\/trends\/?$/i.test(location.pathname);

    const ensureStyleOnce = () => {
        if (document.getElementById(STYLE_ID)) return;
        const style = document.createElement("style");
        style.id = STYLE_ID;
        style.textContent = NOADS_CSS;
        (document.head || document.documentElement).appendChild(style);
    };

    const apply = (_from) => {
        ensureStyleOnce();
        const off = isOverview() || isTrend();
        document.documentElement.classList.toggle("r6tracker-noads-off", off);
    };

    const applyUntilGridReady = () => {
        const deadline = Date.now() + 3000;
        let done = false;

        const tick = () => {
            if (done) return;
            apply("dom-tick");
            if (document.querySelector(".v3-grid--sidebar-left")) {
                done = true;
                mo.disconnect();
                return;
            }
            if (Date.now() > deadline) {
                done = true;
                mo.disconnect();
            }
        };

        const mo = new MutationObserver(() => tick());
        mo.observe(document.documentElement, { childList: true, subtree: true });

        tick();
        setTimeout(tick, 50);
        setTimeout(tick, 200);
        setTimeout(tick, 500);
        setTimeout(tick, 1000);
        setTimeout(tick, 2000);
    };

    const onRouteMaybeChanged = () => {
        apply("route");
        if (!isOverview() && !isTrend()) applyUntilGridReady();
    };

    document.addEventListener(
        "click",
        () => {
            setTimeout(onRouteMaybeChanged, 0);
            setTimeout(onRouteMaybeChanged, 300);
            setTimeout(onRouteMaybeChanged, 1000);
        },
        true
    );

    window.addEventListener("pageshow", () => onRouteMaybeChanged());

    ["pushState", "replaceState"].forEach((m) => {
        const orig = history[m];
        history[m] = function (...args) {
            const ret = orig.apply(this, args);
            onRouteMaybeChanged();
            return ret;
        };
    });
    window.addEventListener("popstate", onRouteMaybeChanged);
    window.addEventListener("hashchange", onRouteMaybeChanged);

    onRouteMaybeChanged();
})();

(() => {
    const CONFIG = {
        allowSingleCharInPageText: false,
        allowSingleCharInEditable: true,
        maxMatchesPerRun: 500,
        useRAFThrottle: true,
    };

    const exactDict = window.exactDict || {};
    const entries = Object.entries(exactDict)
        .filter(([k]) => k)
        .map(([k, v]) => ({ key: String(k), value: String(v), priority: 2 }));
    if (!entries.length) return;

    class ACNode {
        constructor() {
            this.next = new Map();
            this.fail = 0;
            this.out = [];
        }
    }
    class AhoCorasick {
        constructor(patterns) {
            this.p = patterns;
            this.n = [new ACNode()];
            this.t();
            this.f();
        }
        t() {
            this.p.forEach((p, i) => {
                let s = 0;
                for (const c of p.key) {
                    const n = this.n[s];
                    if (!n.next.has(c)) {
                        n.next.set(c, this.n.length);
                        this.n.push(new ACNode());
                    }
                    s = n.next.get(c);
                }
                this.n[s].out.push(i);
            });
        }
        f() {
            const q = [];
            for (const [, nx] of this.n[0].next) (this.n[nx].fail = 0), q.push(nx);
            while (q.length) {
                const r = q.shift();
                for (const [ch, u] of this.n[r].next) {
                    q.push(u);
                    let v = this.n[r].fail;
                    while (v && !this.n[v].next.has(ch)) v = this.n[v].fail;
                    this.n[u].fail = this.n[v].next.get(ch) ?? 0;
                    this.n[u].out.push(...this.n[this.n[u].fail].out);
                }
            }
        }
        findAll(t) {
            const m = [];
            let s = 0,
                i = 0;
            for (const ch of t) {
                while (s && !this.n[s].next.has(ch)) s = this.n[s].fail;
                if (this.n[s].next.has(ch)) s = this.n[s].next.get(ch);
                for (const pi of this.n[s].out) {
                    const len = this.p[pi].len,
                        end = i + 1;
                    m.push({ start: end - len, end, pi });
                }
                i++;
            }
            return m;
        }
    }

    const patterns = entries.map((d) => ({ ...d, len: [...d.key].length }));
    const ac = new AhoCorasick(patterns);

    const selectNonOverlap = (ms) => {
        ms.sort(
            (a, b) =>
                a.start - b.start ||
                patterns[b.pi].len - patterns[a.pi].len ||
                patterns[b.pi].priority - patterns[a.pi].priority
        );
        const c = [];
        let cur = 0;
        for (const m of ms) if (m.start >= cur) c.push(m), (cur = m.end);
        return c;
    };

    const applyTemplateRules = (text) => {
        for (const [k, v] of Object.entries(exactDict)) {
            if (!k || !k.includes("#")) continue;

            const reSrc = k
                .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
                .replace(/#/g, "(\\d{1,2})")
                .replace(/\s+/g, "\\s+");

            const re = new RegExp(`(^|[^0-9A-Za-z])${reSrc}([^0-9A-Za-z]|$)`, "g");

            text = text.replace(re, (_m, pre, day, post) => {
                const out = String(v).replace(/#/g, day);
                return `${pre}${out}${post}`;
            });
        }
        return text;
    };

    const replaceOnce = (text, allowSingleChar) => {
        text = applyTemplateRules(text);
        text = text.replace(/[\u00A0\u202F]/g, " ");

        text = text.replace(/\b(\d+)\s*W\b/g, "$1 胜");
        text = text.replace(/\b(\d+)\s*L\b/g, "$1 负");

        let ms = ac.findAll(text);
        if (!allowSingleChar) ms = ms.filter((m) => patterns[m.pi].len >= 2);

        if (ms.length > CONFIG.maxMatchesPerRun) {
            ms = ms.filter((m) => patterns[m.pi].len >= 2);
            if (ms.length > CONFIG.maxMatchesPerRun) return text;
        }

        if (!ms.length) return text;

        const chosen = selectNonOverlap(ms);
        if (!chosen.length) return text;

        let out = "",
            last = 0;
        for (const m of chosen) out += text.slice(last, m.start) + patterns[m.pi].value, (last = m.end);
        return out + text.slice(last);
    };

    const skip = (el) =>
        el && el.nodeType === 1 && /^(SCRIPT|STYLE|TEXTAREA|TEMPLATE|NOSCRIPT)$/.test(el.tagName);

    // ---------- 免替换区域 ----------
    const isInNoReplaceZone = (el) => {
        for (let cur = el; cur && cur.nodeType === 1; cur = cur.parentElement) {
            if (cur.hasAttribute?.("data-no-replace")) return true;
            if (cur.classList?.contains("no-replace")) return true;
        }
        return false;
    };

    const markNoReplace = (el) => {
        if (!el || el.nodeType !== 1) return;
        el.setAttribute("data-no-replace", "1");
    };

    const markProfileIdNoReplace = (root = document) => {
        // A) 个人主页 header 用户名：span[data-copytext="HoldZywo0"]
        root.querySelectorAll("span[data-copytext]").forEach(markNoReplace);

        // B) 表格/列表里的“名称字段”：你给的 DOM 中稳定锚点是 .v3-stat-value 里面的 span.truncate（玩家名）
        // 这里我们标记到最近的 .v3-stat-value（或 name-value）容器，确保整块都不替换。
        root.querySelectorAll(".v3-stat-value span.truncate").forEach((nameSpan) => {
            // 优先标记 v3-stat-value（最小范围且稳定）
            const host =
                nameSpan.closest?.(".v3-stat-value") ||
                nameSpan.closest?.(".name-value") ||
                nameSpan.parentElement;
            markNoReplace(host);
        });

        root
            .querySelectorAll('div.truncate.text-16.font-medium')
            .forEach(el => el.setAttribute("data-no-replace", "1"));
    };

    const walkText = (root, cb) => {
        const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
            acceptNode: (n) => {
                const p = n.parentElement;
                if (!p) return NodeFilter.FILTER_REJECT;
                if (skip(p)) return NodeFilter.FILTER_REJECT;
                if (isInNoReplaceZone(p)) return NodeFilter.FILTER_REJECT;
                return NodeFilter.FILTER_ACCEPT;
            },
        });
        for (let n; (n = w.nextNode());) cb(n);
    };

    const processing = new WeakSet();
    const procText = (n) => {
        if (!n || n.nodeType !== 3 || processing.has(n)) return;
        const p = n.parentElement;
        if (!p || isInNoReplaceZone(p)) return;

        const o = n.nodeValue;
        if (!o) return;

        processing.add(n);
        const r = replaceOnce(o, CONFIG.allowSingleCharInPageText);
        if (r !== o) n.nodeValue = r;
        processing.delete(n);
    };

    const processSubtree = (root) => walkText(root, procText);

    window.delClass = window.delClass || [];
    const wipeByClass = (root) => {
        if (!window.delClass.length) return;
        const sel = window.delClass.map((c) => `.${c}`).join(",");
        if (!sel) return;
        root.querySelectorAll(sel).forEach((el) => el.remove());
    };

    const removeAdIframes = (root = document) => {
        root.querySelectorAll('iframe[title="advertisement"], iframe[width="160px"][height="600px"]').forEach(f => f.remove());
    };

    const hideWAbbr = (root = document) => {
        root.querySelectorAll("span.inline-flex abbr").forEach(abbr => {
            const t = (abbr.textContent || "").trim().toUpperCase();
            if (t === "W") abbr.remove(); // 或 abbr.style.display = "none"
        });
    };

    const fixWinsLosses = (root = document) => {
        root.querySelectorAll("span.value.truncate").forEach((el) => {
            const t = (el.textContent || "").replace(/\s+/g, " ").trim();
            if (!t) return;

            let m = t.match(/^(\d+)\s*W$/i);
            if (m) {
                el.textContent = `${m[1]} 胜`;
                return;
            }

            m = t.match(/^(\d+)\s*L$/i);
            if (m) {
                el.textContent = `${m[1]} 负`;
                return;
            }
        });
    };

    const compos = new WeakSet(),
        pending = new Set();
    let raf = false;

    const flushEditable = () => {
        for (const el of pending) {
            if (!el || !document.contains(el)) continue;
            if (isInNoReplaceZone(el)) continue;

            const tag = el.tagName;
            const opt = {
                allowSingleChar: CONFIG.allowSingleCharInEditable,
                maxMatches: CONFIG.maxMatchesPerRun,
            };

            const replaceVal = () => {
                const o = el.value;
                if (!o) return;
                const s = el.selectionStart,
                    e = el.selectionEnd;
                const r = replaceOnce(o, opt.allowSingleChar);
                if (r === o) return;
                el.value = r;
                const d = r.length - o.length;
                if (typeof s === "number" && typeof e === "number") {
                    try {
                        el.setSelectionRange(s + d, e + d);
                    } catch { }
                }
            };

            if (tag === "INPUT") {
                const type = (el.getAttribute("type") || "text").toLowerCase();
                if (["text", "search", "url", "tel", "email", "password", "number"].includes(type))
                    replaceVal();
            } else if (tag === "TEXTAREA") replaceVal();
            else if (el.isContentEditable) {
                const saveSel = () => {
                    const sel = getSelection?.();
                    if (!sel || !sel.rangeCount) return null;
                    const r = sel.getRangeAt(0);
                    if (!el.contains(r.startContainer) || !el.contains(r.endContainer)) return null;
                    const pre = document.createRange();
                    pre.selectNodeContents(el);
                    pre.setEnd(r.startContainer, r.startOffset);
                    const pre2 = document.createRange();
                    pre2.selectNodeContents(el);
                    pre2.setEnd(r.endContainer, r.endOffset);
                    return { s: pre.toString().length, e: pre2.toString().length };
                };

                const restoreSel = (se) => {
                    if (!se) return;
                    const sel = getSelection?.();
                    if (!sel) return;

                    let cur = 0,
                        sn = null,
                        so = 0,
                        en = null,
                        eo = 0;

                    const w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
                    for (let n; (n = w.nextNode());) {
                        const l = n.nodeValue.length;
                        if (sn == null && cur + l >= se.s) (sn = n), (so = se.s - cur);
                        if (cur + l >= se.e) {
                            en = n;
                            eo = se.e - cur;
                            break;
                        }
                        cur += l;
                    }
                    if (!sn || !en) return;

                    const r = document.createRange();
                    r.setStart(sn, Math.max(0, Math.min(sn.nodeValue.length, so)));
                    r.setEnd(en, Math.max(0, Math.min(en.nodeValue.length, eo)));
                    sel.removeAllRanges();
                    sel.addRange(r);
                };

                const saved = saveSel();
                walkText(el, (n) => {
                    const o = n.nodeValue;
                    if (!o) return;
                    const r = replaceOnce(o, opt.allowSingleChar);
                    if (r !== o) n.nodeValue = r;
                });
                restoreSel(saved);
            }
        }
        pending.clear();
    };

    const scheduleEditable = (el) => {
        pending.add(el);
        if (!CONFIG.useRAFThrottle) return flushEditable();
        if (!raf) {
            raf = true;
            requestAnimationFrame(() => {
                raf = false;
                flushEditable();
            });
        }
    };

    document.addEventListener(
        "compositionstart",
        (e) => {
            if (
                e.target instanceof Element &&
                (e.target.isContentEditable || /^(INPUT|TEXTAREA)$/.test(e.target.tagName))
            )
                compos.add(e.target);
        },
        true
    );
    document.addEventListener(
        "compositionend",
        (e) => {
            const t = e.target;
            if (
                t instanceof Element &&
                (t.isContentEditable || /^(INPUT|TEXTAREA)$/.test(t.tagName))
            ) {
                compos.delete(t);
                scheduleEditable(t);
            }
        },
        true
    );
    document.addEventListener(
        "input",
        (e) => {
            const t = e.target;
            if (
                t instanceof Element &&
                (t.isContentEditable || /^(INPUT|TEXTAREA)$/.test(t.tagName)) &&
                !compos.has(t)
            )
                scheduleEditable(t);
        },
        true
    );

    // 初次处理：先标记免替换区域，再做替换
    markProfileIdNoReplace(document);
    wipeByClass(document);
    removeAdIframes(document);
    hideWAbbr(document);
    fixWinsLosses(document);
    processSubtree(document.body);

    // MutationObserver
    const moQueue = new Set();
    let moRAF = false;

    const flushMO = () => {
        markProfileIdNoReplace(document);

        wipeByClass(document);
        removeAdIframes(document);
        hideWAbbr(document);
        fixWinsLosses(document);

        for (const n of moQueue) {
            if (!n || !document.contains(n)) continue;
            if (n.nodeType === 3) procText(n);
            else if (n.nodeType === 1) processSubtree(n);
        }
        moQueue.clear();
    };

    const scheduleMO = () => {
        if (!CONFIG.useRAFThrottle) return flushMO();
        if (!moRAF) {
            moRAF = true;
            requestAnimationFrame(() => {
                moRAF = false;
                flushMO();
            });
        }
    };

    new MutationObserver((ms) => {
        for (const m of ms) {
            if (m.type === "characterData") moQueue.add(m.target);
            else if (m.type === "childList") {
                m.addedNodes.forEach((n) => {
                    if (n.nodeType === 3) moQueue.add(n);
                    else if (n.nodeType === 1 && !skip(n)) moQueue.add(n);
                });
            }
        }
        scheduleMO();
    }).observe(document.body, { childList: true, subtree: true, characterData: true });
})();
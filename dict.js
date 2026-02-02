// 只替换完整单词（注：你当前 content-script 实际是子串替换，不是单词边界）
window.exactDict = {
    /******************************************************************
     * 特殊词
     ******************************************************************/

    /******************************************************************
     * Time units / Months
     ******************************************************************/
    "yr ago": "年前",
    "mo ago": "月之前",
    "w ago": "周之前",
    "d ago": "天之前",
    "h ago": "小时前",
    "m ago": "分钟前",
    "s ago": "秒钟之前",

    /******************************************************************
     * Header / More games / 游戏选择
     ******************************************************************/
    "More Games": "更多游戏",

    // 游戏列表
    "Fortnite": "堡垒之夜",
    "Valorant": "无畏契约",
    "R6 Siege": "彩虹六号：围攻",
    "Marvel Rivals": "漫威：争锋",
    "Apex Legends": "Apex 英雄",
    "Rocket League": "火箭联盟",
    "League of Legends": "英雄联盟",
    "Battlefield": "战地",
    "Counter-Strike 2": "CS 2",
    "Splitgate": "分裂之门",
    "Halo Infinite": "光环：无限",
    "Smite 2": "神之浩劫 2",
    "Destiny 2": "命运 2",
    "Teamfight Tactics": "云顶之弈",
    "Off The Grid": "离线狂飙",
    "2XKO": "2XKO",
    "Overwatch": "守望先锋",
    "PUBG": "绝地求生",
    "Call of Duty": "使命召唤",
    "Bloodhunt": "血族",
    "Brawlhalla": "乱斗嘉年华",
    "ForHonor": "荣耀战魂",
    "The Division": "全境封锁",
    "R6 Mobile": "彩虹六号：移动版",
    "Battlefield 6": "战地 6",

    /******************************************************************
     * Account / Premium
     ******************************************************************/
    "Get Premium": "购买会员",
    "Sign In": "登录",

    /******************************************************************
     * Global Nav / 顶部导航与通用入口
     ******************************************************************/
    "NEW": "新",
    "Search": "搜索",
    "Home": "首页",

    // Leaderboards
    "Leaderboards": "排行榜",
    "Ranked": "排位赛",
    "Custom": "自定义",

    // Mode
    "Bomb": "炸弹",
    "Hostage": "人质",

    // LFG / Rank me
    "LFG": "寻找队伍",
    "Rank Me Game": "为我排名",

    // Premium / Shop
    "Premium": "会员",
    "Membership": "成员",
    "Frame Shop": "饰品商店",

    // Tools
    "OBS Overlay": "OBS",
    "Support": "支持",
    "Get the Apps": "获取应用",
    "My Profile": "我的资料",

    // Top-right toggle
    "Live Update On": "已开启实时更新",
    "Live Update Off": "已关闭实时更新",

    /******************************************************************
     * Profile Tabs / 页面主栏目
     ******************************************************************/
    "Claim Profile": "认领个人资料",
    "Overview": "概览",
    "Match": "比赛",
    "Matches": "比赛",
    "Season": "赛季",
    "Seasons": "赛季",
    "Operators": "干员",
    "Maps": "地图",
    "Encounters": "缘分",
    "Trends": "趋势",
    "Latest": "最终",
    "Avg": "平均",
    "Hide inactive seasons": "隐藏非活跃赛季",

    /******************************************************************
     * Overview / Playlists / Filters
     ******************************************************************/
    "All Playlists": "所有游戏模式",
    "Unranked": "非排位赛",
    "Quick Match": "快速对战",
    "Dual Front": "双重战线",
    "Siege Cup": "围攻杯",
    "Event": "活动模式",
    "Arcade": "街机模式",
    "All Seasons": "所有赛季",

    "Top": "前",
    "Bottom": "后",
    "Aliases": "曾用名",

    "Current Season": "当前赛季",
    "CURRENT": "当前",
    "Playlist": "游戏模式",
    "Win Rate": "胜率",

    "Season Peaks": "赛季巅峰",
    "BEST": "最佳",
    "SEASON": "赛季",
    "Show All": "显示全部",
    "Load More": "加载更多",

    // Sides
    "Attacker": "进攻方",
    "Atk": "进攻方",
    "Defender": "防守方",
    "Def": "防守方",

    /******************************************************************
     * Lifetime / Summary Stats
     ******************************************************************/
    "Lifetime Overall": "生涯总览",
    "Win %": "胜率",
    "K/D": "K/D",
    "Headshot %": "爆头率",
    "Wins": "胜场数",
    "Losses": "败场数",
    "Kills": "击杀数",
    "Deaths": "死亡数",
    "Kills/Match": "场均击杀",
    "Kills/match": "场均击杀",
    "Abandons": "弃赛数",

    "Lifetime Ranked": "排位赛总览",
    "Lifetime Unranked + Quick Match": "非排位赛 + 快速对战总览",

    "KDA": "KDA",
    "HS %": "爆头率",
    "Aces": "五杀回合数",
    "Clutches Win %": "残局胜率",
    "Clutches Won": "残局胜利数",
    "ESR": "ESR",
    "View All Stats": "查看全部数据",
    "View Details": "查看详情",

    /******************************************************************
     * Detailed Stats / Combat
     ******************************************************************/
    "Overall": "共",
    "History": "历史",
    "K/D Ratio": "K/D 比率",

    "Search Keyword": "搜索关键词",
    "Game": "对局",
    "Match Win %": "对局胜率",
    "Score": "比分",
    "Time Played": "游戏时长",
    "Rounds": "回合",
    "Disconnected": "断线",
    "Rounds Played": "已玩回合",
    "Combat": "战斗",

    "Assists": "助攻",
    "Assists/Round": "每回合助攻",
    "Deaths/Round": "每回合死亡",
    "First Bloods": "一血",
    "First Deaths": "首死",
    "Headshots": "爆头",
    "Headshots/Round": "每回合爆头",
    "Kills/Game": "每局击杀",
    "Kills/Round": "每回合击杀",
    "TKs": "队友击杀",
    "Rollback": "回滚",

    // Clutches
    "Rounds - Clutches": "回合 - 残局",
    "Clutches": "残局翻盘",
    "Clutches 1v1": "1打1翻盘",
    "Clutches 1v2": "1打2翻盘",
    "Clutches 1v3": "1打3翻盘",
    "Clutches 1v4": "1打4翻盘",
    "Clutches 1v5": "1打5翻盘",
    "Clutches Lost": "翻盘失败",
    "Clutches Lost 1v1": "1打1翻盘失败",
    "Clutches Lost 1v2": "1打2翻盘失败",
    "Clutches Lost 1v3": "1打3翻盘失败",
    "Clutches Lost 1v4": "1打4翻盘失败",
    "Clutches Lost 1v5": "1打5翻盘失败",
    "1v1 Clutch": "1打1翻盘",
    "1v2 Clutch": "1打2翻盘",
    "1v3 Clutch": "1打3翻盘",
    "1v4 Clutch": "1打4翻盘",
    "1v5 Clutch": "1打5翻盘",
    "1v1 Lost": "1打1翻盘失败",
    "1v2 Lost": "1打2翻盘失败",
    "1v3 Lost": "1打3翻盘失败",
    "1v4 Lost": "1打4翻盘失败",
    "1v5 Lost": "1打5翻盘失败",

    // Multi-kills
    "Killed 1 enemies in one round": "单回合击杀 1 名敌人",
    "Killed 2 enemies in one round": "单回合击杀 2 名敌人",
    "Killed 3 enemies in one round": "单回合击杀 3 名敌人",
    "Killed 4 enemies in one round": "单回合击杀 4 名敌人",
    "Killed 5 enemies in one round": "单回合击杀 5 名敌人",
    "Won a 1v1 clutch": "1打1翻盘",
    "Won a 1v2 clutch": "1打2翻盘",
    "Won a 1v3 clutch": "1打3翻盘",
    "Won a 1v4 clutch": "1打4翻盘",
    "Won a 1v5 clutch": "1打5翻盘",
    "Lost a 1v1 clutch": "1打1翻盘失败",
    "Lost a 1v2 clutch": "1打2翻盘失败",
    "Lost a 1v3 clutch": "1打3翻盘失败",
    "Lost a 1v4 clutch": "1打4翻盘失败",
    "Lost a 1v5 clutch": "1打5翻盘失败",
    "Multikills": "多杀",
    "Kills 1K": "单局1杀",
    "Kills 2K": "单局2杀",
    "Kills 3K": "单局3杀",
    "Kills 4K": "单局4杀",

    // Rank related
    "Max Rank": "最高段位",
    "Rank": "当前段位",
    "Top Rank Position": "最高排名",
    "Uncategorized": "未分类",
    "Max Rank Points": "最高段位积分",
    "Rank Points": "当前段位积分",

    /******************************************************************
     * Matches list / Filters UI
     ******************************************************************/
    "MATCHES": "比赛",
    "All Maps": "所有地图",
    "All Operators": "所有干员",

    "FILTERS": "筛选条件",
    "Map": "地图",
    "Operator": "干员",
    "Reset All": "重置全部",
    "ATTACKER": "进攻方",
    "DEFENDER": "防守方",
    "Save Changes": "保存更改",
    "All Matches": "所有比赛",
    "All Modes": "所有模式",
    "All Sides": "所有阵营",

    "K": "击杀",
    "D": "死亡",
    "HS%": "爆头率",
    "K/D/A": "击杀/死亡/助攻",
    "RP": "段位分",
    "MMR": "原段位分",
    "ROUND #": "第 # 回合",
    "Round #": "第 # 回合",
    "Rnd #": "第 # 回合",
    "#m #s": "时长 #:",
    "OT": "加时",

    /******************************************************************
     * Match details
     ******************************************************************/
    "Victim": "受害者",
    "0K": "零杀",
    "1K": "单杀",
    "2K": "双杀",
    "3K": "三杀",
    "4K": "四杀",
    "5K": "五杀",

    "Team A": "蓝方",
    "Team B": "红方",
    "Server": "服务器",
    "AP East": "亚太东部",
    "AP North East": "亚太东北",
    "AP South East": "亚太东南",
    "EU West": "欧洲西部",
    "Scoreboard": "记分板",
    "Career": "生涯",
    "Open in New Tab": "在新标签页打开",
    "Share": "分享",
    "Picks": "选取",
    "FK": "首杀",
    "FD": "首死",
    "1vX": "1对多",
    "Kill Events": "击杀",
    "Select a round above to view detailed stats for that round.": "选择上方的一个回合以查看该回合的详细数据",
    "Elimination Win": "淘汰获胜",
    "Defusal Win": "拆弹获胜",
    "Hostage Win": "人质获胜",
    "Time Expired Win": "时间耗尽获胜",
    "Match Unavailable": "比赛不可用",
    "No match data available.": "无可用比赛数据",

    "Died every round": "在每回合都死亡",
    "Streak": "连胜",
    "Level": "等级",

    /******************************************************************
     * Encounters / Trends
     ******************************************************************/
    "Player": "玩家",
    "Encountered": "遇到次数",
    "Last Match": "最近比赛",
    "Stats History": "数据历史",

    "Playstyle": "游戏风格",
    "Objective": "目标",
    "Off Objective": "非目标",
    "Roles": "角色",
    "Most picked operator roles": "最常选择的干员角色",
    "forward": "之前",

    "Filters": "筛选条件",

    "Breach": "突破",
    "Front Line": "前线",
    "Intel": "情报",
    "Control": "控制",
    "Anti-Gadget": "反道具",
    "Crowd Control": "人群控制",
    "Anti-Entry": "反入侵",
    "Trapper": "陷阱",
    "Statistic": "统计数据",
    "View by": "查看方式",
    "Day": "天",
    "Week": "周",
    "Month": "月",

    /******************************************************************
     * Find players / Favorites
     ******************************************************************/
    "Find Players": "查找玩家",
    "Enter Ubisoft ID": "输入 Ubisoft ID",
    "Recent Players": "最近的玩家",
    "Favorites": "收藏夹",
    "Players": "玩家",

    /******************************************************************
     * Loading / Empty states
     ******************************************************************/
    "Loading Stats": "正在加载数据",
    "Loading": "正在加载",
    "Sit tight, we're fetching the stats.": "请稍候，我们正在获取数据",
    "This value is missing from our data": "无法查询到此数据",
    "Reports": "报告",
    "ENCOUNTERS": "缘分",
    "Your encounters data is being loaded.": "正在加载您的缘分数据",
    "Getting reports from the filing cabinet.": "正在从档案柜获取报告",
    "Data Unavailable": "数据不可用",
    "No encounters found.": "未找到缘分数据",

    /******************************************************************
     * Footer / Misc / Legal
     ******************************************************************/
    "Premium users don't see ads.": "会员用户不会看到广告",
    "Upgrade for #3/mo": "升级仅需 #3/月",
    "Check out our desktop app!": "看看我们的桌面应用！",
    "Use our Rainbow Six Tracker desktop app to get live match stats, detailed match reports, operator stats and more!":
        "使用我们的彩虹六号数据桌面应用，获取实时比赛数据、详细比赛报告、干员数据等更多内容！",
    "Advertise": "广告服务",
    "Privacy Policy": "隐私政策",
    "Terms of Service": "服务条款",
    "Developer API": "开发者 API",
    "Press Kit": "新闻资料包",
    "Rainbow Six: Siege is a registered trademark of Ubisoft. Trademarks are the property of their respective owners. Game materials copyright Ubisoft. Ubisoft has not endorsed and is not responsible for this site or its content.":
        "彩虹六号：围攻是育碧公司的注册商标。商标为其各自所有者的财产。游戏素材版权归育碧公司所有。育碧公司未认可且不对本网站或其内容负责。",

    "Data reflects Y8S1 and later,": "数据反映自 Y8S1 及以后，",
    "Data reflects Y8S1 and later.": "数据反映自 Y8S1 及以后",
    "Data reflects Y9S3 and later,": "数据反映自 Y9S3 及以后，",
    "Data reflects Y9S3 and later.": "数据反映自 Y9S3 及以后",
    "excludes Arcade & Event playlists.": "不包括街机和活动游戏模式",
    "TRN Elo": "TRN 分数",
    "is our own formula for calculating the relative skill levels of players. It is not your hidden Ubisoft MMR.":
        "是我们自己用来计算玩家相对技能水平的公式。它不是你隐藏的育碧 MMR",
    "The accuracy will increase as more matches are played. Learn more": "随着比赛的进行，准确性将提高。了解更多",
    "Compare yourself to other players on custom leaderboards.": "在自定义排行榜上与其他玩家比较自己",
    "Get Started": "开始使用",
    "A list of players": "玩家",
    "has encountered. These players could be teammates or opponents": "遇到过的。这些玩家可能是队友或对手",
    "Live updating your most recent matches...": "正在实时更新您最近的比赛...",
    "Updating...": "正在更新...",
    "This profile has not been claimed, is it yours? Claim it now for more control.": "此个人资料尚未被认领，是您的吗？立即认领可以控制此资料。",
    "Profile": "个人资料",
    "Copy Link": "复制链接",
    "Click to copy to clipboard": "点击以复制到剪贴板",
    "Copied to clipboard!": "已复制到剪贴板！",
    "iOS & Android": "iOS 和 安卓 应用",
    "Rainbow Six: Siege Tracker": "彩虹六号：围攻 数据追踪应用",
    "No matches found for the selected filters.": "未找到符合所选筛选条件的比赛",
    "here": "这里",
    "Close": "关闭",
    "Excludes": "不包括",
    "playlists.": "游戏模式",

    "Jan #": "1 月 # 日",
    "Feb #": "2 月 # 日",
    "Mar #": "3 月 # 日",
    "Apr #": "4 月 # 日",
    "May #": "5 月 # 日",
    "Jun #": "6 月 # 日",
    "Jul #": "7 月 # 日",
    "Aug #": "8 月 # 日",
    "Sep #": "9 月 # 日",
    "Oct #": "10 月 # 日",
    "Nov #": "11 月 # 日",
    "Dec #": "12 月 # 日",
    "# Jan": "1 月 # 日",
    "# Feb": "2 月 # 日",
    "# Mar": "3 月 # 日",
    "# Apr": "4 月 # 日",
    "# May": "5 月 # 日",
    "# Jun": "6 月 # 日",
    "# Jul": "7 月 # 日",
    "# Aug": "8 月 # 日",
    "# Sep": "9 月 # 日",
    "# Oct": "10 月 # 日",
    "# Nov": "11 月 # 日",
    "# Dec": "12 月 # 日",

    "Name": "名称",
    "Date": "日期",

    /******************************************************************
     * Rank abbreviations / Lifetime labels
     ******************************************************************/

    "LIFETIME": "生涯",

    "COPPER": "紫铜",
    "BRONZE": "青铜",
    "SILVER": "白银",
    "GOLD": "黄金",
    "PLATINUM": "铂金",
    "EMERALD": "翡翠",
    "DIAMOND": "钻石",
    "CHAMPION": "冠军",

    "CO": "紫铜",
    "BR": "青铜",
    "SI": "白银",
    "GO": "黄金",
    "PL": "铂金",
    "EM": "翡翠",
    "DI": "钻石",
    "CH": "冠军",

    "Top #": "前 #",
    "Bottom #": "后 #",

    /******************************************************************
     * Maps / 赛季名称 / 其它（你原文后半部分很长，可继续按块拆）
     * （下面建议你继续按 “赛季 / 地图 / 杂项” 分段摆放）
     ******************************************************************/

    // 赛季名称
    "Daybreak": "破晓行动",
    "Tenfold Pursuit": "十倍追猎行动",
    "High Stakes": "高风险行动",
    "Prep Phase": "准备阶段行动",
    "Collision Point": "碰撞点行动",
    "Twin Shells": "双壳行动",
    "New Blood": "新血液行动",
    "Deadly Omen": "致命预兆行动",
    "Deep Freeze": "极度深寒行动",
    "Heavy Mettle": "开路先锋行动",
    "Dread Factor": "恐惧因素行动",
    "Commanding Force": "统驭行动",
    "Solar Raid": "日光突袭行动",
    "Brutal Swarm": "蜂暴行动",
    "Vector Glare": "矢量炫光行动",
    "Demon Veil": "恶鬼面纱行动",
    "High Calibre": "登峰造极行动",
    "Crystal Guard": "水晶守卫行动",
    "North Star": "北境航星行动",
    "Crimson Heist": "绯红劫案行动",
    "Neon Dawn": "霓虹曙光行动",
    "Shadow Legacy": "暗影传承行动",
    "Steel Wave": "金属狂潮行动",
    "Void Edge": "虚空边缘行动",
    "Shifting Tides": "幻变海潮行动",
    "Ember Rise": "余烬崛起行动",
    "Phantom Sight": "幻境行动",
    "Burnt Horizon": "燃烧地平线行动",
    "Wind Bastion": "风城行动",
    "Grim Sky": "暗空行动",
    "Para Bellum": "备战行动",
    "Chimera": "奇美拉行动",
    "White Noise": "白噪行动",
    "Blood Orchid": "血兰花行动",
    "Health": "健康行动",
    "Velvet Shell": "丝绒壳行动",
    "Red Crow": "赤鸦行动",
    "Skull Rain": "骷髅雨行动",
    "Dust Line": "尘土战线行动",
    "Black Ice": "黑冰行动",

    // 地图
    "Villa": "庄园",
    "Coastline": "海岸线",
    "Bank": "银行",
    "Border": "边境",
    "Kafe Dostoyevsky": "杜斯妥也夫斯基咖啡馆",
    "Chalet": "木屋",
    "Clubhouse": "俱乐部会所",
    "Oregon": "俄勒冈乡间屋宅",
    "Skyscraper": "摩天大楼",
    "Outback": "荒漠服务站",
    "Theme Park": "主题公园",
    "Kanal": "运河",
    "Consulate": "领事馆",
    "Stadium Alpha": "A号竞技场",
    "Yacht": "游艇",
    "Stadium Bravo": "B号竞技场",
    "Favela": "贫民窟",
    "Fortress": "要塞",
    "Lair": "虎穴狼巢",
    "Tower": "塔楼",
    "Emerald Plains": "翡翠原",
    "Nighthaven Labs": "永夜安港实验室",
    "Presidential Plane": "总统专机",
    "House": "芝加哥豪宅",
    "Hereford Base": "赫里福基地",

    "Views": "浏览",
};

window.delClass = ["bordered-davert"];
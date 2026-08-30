"use strict";
const PUBS = [{
  yr: 2026,
  title: "経済ゲーム実験を用いたAIの社会性評価 ── 新たな定量評価指標の提案と検証",
  venue: "情報処理学会論文誌 67(5), pp.916-933",
  authors: "後藤 晶",
  tags: ["ai", "method", "peer"],
  badges: ["peer", "first"]
}, {
  yr: 2026,
  title: "ダークパターンとデフォルト効果に関する研究 ── クラウドソーシング実験による検討",
  venue: "情報処理学会論文誌 67(5), pp.971-988",
  authors: "後藤 晶",
  tags: ["nudge", "method", "peer"],
  badges: ["peer", "first"]
}, {
  yr: 2026,
  title: "電子地域通貨運用の現状と課題 ── 宮崎県都農町の事例から",
  venue: "地域デザイン 27",
  authors: "後藤 晶",
  tags: ["nudge", "invited"],
  badges: ["invited"]
}, {
  yr: 2025,
  title: "エールを送る ── 社会的賞賛と社会的拒絶が協力行動に与える影響",
  venue: "明治大学教養論集 583, pp.89-115",
  authors: "後藤 晶, 日室 聡仁",
  tags: ["coop"],
  badges: ["first"]
}, {
  yr: 2025,
  title: "Dynamism of investment: wealth visibility facilitates economic mobility",
  venue: "Journal of Economic Interaction and Coordination",
  authors: "K. Shimizu, Y. Kamijo, H. Ozono, A. Goto",
  tags: ["ineq", "peer"],
  badges: ["peer"]
}, {
  yr: 2024,
  title: "社会的ジレンマにおけるオンラインでのコミュニケーションの効果 ── オンラインごみ処理ジレンマゲームの開発",
  venue: "マーケティングジャーナル",
  authors: "(招待論文)",
  tags: ["coop", "invited"],
  badges: ["invited"]
}, {
  yr: 2024,
  title: "Behavioural strategies in simultaneous and alternating prisoner's dilemma games with/without voluntary participation",
  venue: "Scientific Reports 21890",
  authors: "H. Yamamoto, A. Goto",
  tags: ["coop", "peer"],
  badges: ["peer"]
}, {
  yr: 2023,
  title: "人間は『人工知能』と『協力』できるか ── クラウドソーシングを用いた仮想的AIエージェント実験による検討",
  venue: "社会情報学 12(1), pp.1-17",
  authors: "後藤 晶",
  tags: ["ai", "method"],
  badges: ["first"]
}, {
  yr: 2023,
  title: "Individuals reciprocate negative actions revealing negative upstream reciprocity",
  venue: "PLoS ONE 18(7), e0288019",
  authors: "R. Umetani, H. Yamamoto, A. Goto, I. Okada, E. Akiyama",
  tags: ["coop", "peer"],
  badges: ["peer"]
}, {
  yr: 2023,
  title: "被監視感が主観的幸福度・社会的選好に与える影響 ── クラウドソーシングを用いた実験から",
  venue: "社会情報学 11(3), pp.1-17",
  authors: "後藤 晶",
  tags: ["surv", "peer"],
  badges: ["peer", "first"]
}, {
  yr: 2022,
  title: "行動科学とステージモデルを活用した環境配慮行動の継続を促す情報システム開発に関する基礎研究",
  venue: "情報処理学会誌 63(5), pp.1234-1248",
  authors: "後藤晶, 江島直也, 日室聡仁, 笹鹿祐司",
  tags: ["nudge", "peer"],
  badges: ["peer", "first"]
}, {
  yr: 2022,
  title: "学会選挙のオンライン化に関する研究 ── コロナ禍における社会情報学会選挙から",
  venue: "社会情報学 10(3), pp.31-47",
  authors: "後藤 晶, 本田 正美, 岡田 勇",
  tags: ["method"]
}, {
  yr: 2021,
  title: "情報社会における監視の許容度に関する分析 ── 監視主体と監視媒体の観点から",
  venue: "社会情報学 9(3), pp.17-33",
  authors: "後藤 晶",
  tags: ["surv", "peer"],
  badges: ["peer", "first"]
}, {
  yr: 2021,
  title: "ビッグデータ時代の経済ゲーム実験 ── クラウドソーシングを用いた大規模公共財ゲーム実験の実施",
  venue: "情報処理学会論文誌 62(5), pp.1246-1260",
  authors: "後藤 晶",
  tags: ["method", "peer", "coop"],
  badges: ["peer", "first"]
}, {
  yr: 2021,
  title: "Asymmetric effects of social and economic incentives on cooperation in real effort based public goods games",
  venue: "PLOS ONE 16(4), e0249217",
  authors: "J. Hackel, H. Yamamoto, I. Okada, A. Goto, A. Taudes",
  tags: ["coop", "peer"],
  badges: ["peer"]
}, {
  yr: 2020,
  title: "公正世界信念がアップストリーム互恵的協力に与える影響の検討",
  venue: "社会心理学研究 36(2), pp.31-38",
  authors: "梅谷凌平, 後藤晶, 岡田勇, 山本仁志",
  tags: ["coop", "peer"],
  badges: ["peer"]
}, {
  yr: 2020,
  title: "ICTを用いたナッジの活用 ── 南三陸町における資源循環促進を例として",
  venue: "行政&情報システム 56(2), pp.31-37",
  authors: "日室聡仁, 後藤 晶",
  tags: ["nudge", "invited"],
  badges: ["invited"]
}, {
  yr: 2020,
  title: "社会経済的要因が利他性・不平等回避性・信頼に与える影響 ── クラウドソーシングを用いたオンラインサーベイ実験による考察",
  venue: "情報文化学会誌 26(2), pp.3-10",
  authors: "後藤 晶",
  tags: ["ineq", "peer", "invited"],
  badges: ["peer", "invited"]
}];
const FILTERS = [{
  id: "all",
  label: "All"
}, {
  id: "coop",
  label: "Cooperation"
}, {
  id: "surv",
  label: "Surveillance"
}, {
  id: "ai",
  label: "AI"
}, {
  id: "nudge",
  label: "Nudge"
}, {
  id: "ineq",
  label: "Inequality"
}, {
  id: "method",
  label: "Methods"
}, {
  id: "peer",
  label: "Peer-reviewed"
}];
function PubsApp() {
  const [active, setActive] = React.useState("all");
  const counts = React.useMemo(() => {
    const c = {
      all: PUBS.length
    };
    FILTERS.forEach(f => {
      if (f.id === "all") return;
      c[f.id] = PUBS.filter(p => p.tags.includes(f.id)).length;
    });
    return c;
  }, []);
  const list = active === "all" ? PUBS : PUBS.filter(p => p.tags.includes(active));
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "pubs-toolbar"
  }, FILTERS.map(f => React.createElement("button", {
    key: f.id,
    className: "filter-btn" + (active === f.id ? " on" : ""),
    onClick: () => setActive(f.id)
  }, f.label, React.createElement("span", {
    className: "count"
  }, counts[f.id])))), React.createElement("div", {
    className: "pub-list"
  }, list.map((p, i) => React.createElement("div", {
    className: "pub",
    key: i
  }, React.createElement("div", {
    className: "yr"
  }, p.yr), React.createElement("div", {
    className: "ttl"
  }, p.title, React.createElement("span", {
    className: "authors"
  }, p.authors)), React.createElement("div", {
    className: "meta"
  }, React.createElement("span", {
    className: "venue"
  }, p.venue), React.createElement("span", {
    className: "badges"
  }, (p.badges || []).filter(b => b !== "peer").map(b => React.createElement("span", {
    key: b,
    className: "badge " + b
  }, b === "peer" ? "Peer-reviewed" : b === "invited" ? "Invited" : b === "first" ? "First author" : b))))))));
}
window.PubsApp = PubsApp;
const PRES = [{
  date: "2025-12-20",
  yr: 2025,
  title: "大規模言語モデルの社会性比較研究：7種の経済ゲーム実験を用いた検証",
  authors: "後藤 晶",
  venue: "2025年度 社会情報学会中国・四国支部 第1回研究発表会",
  place: "鳥取短期大学",
  type: "oral",
  invited: false,
  tags: ["ai", "method"]
}, {
  date: "2025-12-14",
  yr: 2025,
  title: "寄付額の選択肢が寄付行動に与える影響：日本での実験的検証と異質性分析",
  authors: "北野翔大, 後藤 晶, 笹鹿祐司",
  venue: "行動経済学会 第19回大会",
  place: "早稲田大学",
  type: "poster",
  invited: false,
  tags: ["nudge", "featured"]
}, {
  date: "2025-12-14",
  yr: 2025,
  title: "グループ規模とフィードバックが公共財供給に与える影響の検証 ── 大規模言語モデルを活用した実験",
  authors: "日室聡仁, 後藤 晶",
  venue: "行動経済学会 第19回大会",
  place: "早稲田大学",
  type: "poster",
  invited: false,
  tags: ["ai", "coop"]
}, {
  date: "2025-12-13",
  yr: 2025,
  title: "大規模言語モデルは差別をするのか？ ── 経済ゲーム実験を用いた実証",
  authors: "後藤 晶",
  venue: "行動経済学会 第19回大会",
  place: "早稲田大学",
  type: "oral",
  invited: false,
  tags: ["ai"]
}, {
  date: "2025-12-06",
  yr: 2025,
  title: "不真面目回答に対するLLMを活用したナッジ介入の効果の検討：クラウドソーシングを用いて",
  authors: "生井沢祥吾, 後藤 晶",
  venue: "第174回 情報システムと社会環境研究発表会",
  place: "明治大学駿河台",
  type: "oral",
  invited: false,
  tags: ["ai", "nudge", "method"]
}, {
  date: "2025-12-06",
  yr: 2025,
  title: "生成AIはダークパターンに騙される？ ── ダークパターンがAIの意思決定に与える影響",
  authors: "後藤 晶, 日室聡仁",
  venue: "第174回 情報システムと社会環境研究発表会",
  place: "明治大学駿河台",
  type: "oral",
  invited: false,
  tags: ["ai", "method"]
}, {
  date: "2025-09-27",
  yr: 2025,
  title: "AIは人間を攻撃するのか？ ── 先制攻撃ゲームを用いたオンライン実験研究",
  authors: "後藤 晶",
  venue: "2025年 社会情報学会(SSI)学会大会",
  place: "東京大学本郷",
  type: "oral",
  invited: false,
  tags: ["ai"]
}, {
  date: "2025-09-03",
  yr: 2025,
  title: "AIの社会性とその課題 ── 経済ゲーム実験によるAIの社会性評価指標の提案",
  authors: "後藤 晶",
  venue: "FIT2025 選奨セッション",
  place: "北海道科学大学",
  type: "oral",
  invited: false,
  tags: ["ai", "featured"]
}, {
  date: "2025-08-24",
  yr: 2025,
  title: "AIの存在開示とエージェント数が協力行動に与える影響：公共財ゲーム実験による検証",
  authors: "後藤 晶, 日室聡仁",
  venue: "第38回研究会＆第12回社会コミュニケーション部会（情コミ学会）",
  place: "福岡県立ももち文化センター",
  type: "oral",
  invited: false,
  tags: ["ai", "coop"]
}, {
  date: "2025-08-24",
  yr: 2025,
  title: "AIと人間のインタラクション ── 先制攻撃ゲームを用いた検討",
  authors: "後藤 晶",
  venue: "第38回研究会＆第12回社会コミュニケーション部会",
  place: "福岡県立ももち文化センター",
  type: "oral",
  invited: false,
  tags: ["ai"]
}, {
  date: "2025-08-21",
  yr: 2025,
  title: "AIは人を差別するのか？ ── 経済実験による大規模言語モデルのバイアス測定",
  authors: "後藤 晶",
  venue: "第173回 情報システムと社会環境研究発表会",
  place: "愛媛大学",
  type: "oral",
  invited: false,
  tags: ["ai"]
}, {
  date: "2025-08-21",
  yr: 2025,
  title: "論文誌「情報システム特集」編集報告",
  authors: "後藤 晶",
  venue: "第173回 情報システムと社会環境研究発表会",
  place: "愛媛大学",
  type: "oral",
  invited: false,
  tags: ["method"]
}, {
  date: "2025-06-29",
  yr: 2025,
  title: "Consumer evaluation with Incomplete Description of Alternatives under Time Pressure",
  authors: "K. Kikuchi, Y. Fujii, A. Goto, S. Nishizawa",
  venue: "The 28th Experimental Social Science Conference",
  place: "Meiji University",
  type: "oral",
  invited: false,
  tags: ["method", "en"]
}, {
  date: "2025-06-29",
  yr: 2025,
  title: "AIは人間を攻撃するのか？ ── 先制攻撃ゲームを用いたオンライン実験による検討",
  authors: "後藤 晶",
  venue: "第28回 実験社会科学カンファレンス",
  place: "明治大学駿河台",
  type: "oral",
  invited: false,
  tags: ["ai"]
}, {
  date: "2025-06-29",
  yr: 2025,
  title: "経済実験を大規模言語モデルで代替できるのか ── 公共財ゲームを題材にした人間とLLMの協調可能性の検証",
  authors: "日室聡仁, 後藤 晶",
  venue: "第28回 実験社会科学カンファレンス",
  place: "明治大学駿河台",
  type: "oral",
  invited: false,
  tags: ["ai", "coop"]
}, {
  date: "2025-06-29",
  yr: 2025,
  title: "寄付の選択肢が寄付行動に与える影響と機械学習を用いた異質性の検証",
  authors: "北野翔大, 後藤 晶, 笹鹿祐司",
  venue: "第28回 実験社会科学カンファレンス",
  place: "明治大学駿河台",
  type: "oral",
  invited: false,
  tags: ["nudge"]
}, {
  date: "2025-06-28",
  yr: 2025,
  title: "Do Elderly or Women Donate More? Empirical Evidence from Mizuho Bank Transaction Big Data",
  authors: "H. Minami, H. Ozono, Y. Kamijo, A. Goto, K. Shimizu",
  venue: "The 28th Experimental Social Science Conference",
  place: "Meiji University",
  type: "oral",
  invited: false,
  tags: ["ineq", "en"]
}, {
  date: "2025-06-28",
  yr: 2025,
  title: "Dynamism of investment: wealth visibility facilitates economic mobility",
  authors: "K. Shimizu, Y. Kamijo, H. Ozono, A. Goto",
  venue: "The 28th Experimental Social Science Conference",
  place: "Meiji University",
  type: "oral",
  invited: false,
  tags: ["ineq", "en"]
}, {
  date: "2025-06-28",
  yr: 2025,
  title: "パネル実験を用いた向社会性の変化に関する研究",
  authors: "後藤 晶",
  venue: "第28回 実験社会科学カンファレンス",
  place: "明治大学駿河台",
  type: "oral",
  invited: false,
  tags: ["coop", "method"]
}, {
  date: "2025-03-02",
  yr: 2025,
  title: "AIは他者を攻撃するのか ── AI同士の先制攻撃ゲームを用いた実験研究",
  authors: "後藤 晶",
  venue: "情報コミュニケーション学会 第22回全国大会",
  place: "昭和女子大学",
  type: "oral",
  invited: false,
  tags: ["ai"]
}, {
  date: "2025-03-02",
  yr: 2025,
  title: "MBTI情報が他者評価に与える影響",
  authors: "佐藤さくら, 渡邉紗羽, 丸橋美月, 伊藤隆人, 賀来龍ノ介, 後藤 晶",
  venue: "情報コミュニケーション学会 第22回全国大会",
  place: "昭和女子大学",
  type: "oral",
  invited: false,
  tags: ["coop"]
}, {
  date: "2025-03-02",
  yr: 2025,
  title: "景品の種類がギャンブル行動に与える影響",
  authors: "朝見桃子, 添野太壱, 後藤 晶",
  venue: "情報コミュニケーション学会 第22回全国大会",
  place: "昭和女子大学",
  type: "oral",
  invited: false,
  tags: ["nudge"]
}, {
  date: "2025-03-02",
  yr: 2025,
  title: "単純接触効果がネガティブなバイアスに与える影響",
  authors: "網倉ひなの, 長谷川円香, 緑川由真, 後藤 晶",
  venue: "情報コミュニケーション学会 第22回全国大会",
  place: "昭和女子大学",
  type: "oral",
  invited: false,
  tags: ["nudge"]
}, {
  date: "2025-03-02",
  yr: 2025,
  title: "双曲割引と単純接触効果によるマナー促進の心理学的影響",
  authors: "小嶋咲来, 亀田なつみ, 嶋津拓幸, 後藤 晶",
  venue: "情報コミュニケーション学会 第22回全国大会",
  place: "昭和女子大学",
  type: "oral",
  invited: false,
  tags: ["nudge"]
}, {
  date: "2025-03-01",
  yr: 2025,
  title: "SNSによるクチコミが意思決定に与える影響 ── 従来のクチコミとの比較を通じて",
  authors: "荒山結羽, 川本歩里, 川畑夢大, 馬場菜月, 後藤 晶",
  venue: "情報コミュニケーション学会 第22回全国大会",
  place: "昭和女子大学",
  type: "oral",
  invited: false,
  tags: ["surv"]
}, {
  date: "2024-12-14",
  yr: 2024,
  title: "AIの社会性に関する予備的検討 ── AIはどのような関係性を構築できるのか",
  authors: "後藤 晶",
  venue: "2024年度 社会情報学会中国・四国支部 第1回研究発表会",
  place: "島根大学松江",
  type: "oral",
  invited: false,
  tags: ["ai"]
}, {
  date: "2024-12-08",
  yr: 2024,
  title: "実験参加者を大規模言語モデルで代替できるのか ── 繰り返し公共財ゲームを用いた人間とLLMの比較",
  authors: "日室聡仁, 後藤 晶",
  venue: "行動経済学会 第18回大会",
  place: "立命館大学OIC",
  type: "poster",
  invited: false,
  tags: ["ai", "coop"]
}, {
  date: "2024-12-08",
  yr: 2024,
  title: "大規模オンラインパネル実験による社会的指標の経時的変化の解明 ── 向社会性・幸福度・信頼・リスク態度・精神的健康に着目して",
  authors: "後藤 晶",
  venue: "行動経済学会 第18回大会",
  place: "立命館大学OIC",
  type: "poster",
  invited: false,
  tags: ["coop", "method"]
}, {
  date: "2024-09-15",
  yr: 2024,
  title: "クラウドソーシングを用いたパネル調査・実験の現状と課題",
  authors: "後藤 晶",
  venue: "2024年度 社会情報学会(SSI)学会大会",
  place: "香川短期大学",
  type: "oral",
  invited: false,
  tags: ["method"]
}, {
  date: "2024-09-04",
  yr: 2024,
  title: "ダークパターンの影響と利用意図に関する分析 ── クラウドソーシング実験による検討",
  authors: "後藤 晶",
  venue: "FIT2024",
  place: "広島工業大学",
  type: "oral",
  invited: false,
  tags: ["surv", "method", "featured"]
}, {
  date: "2024-08-25",
  yr: 2024,
  title: "社会科学におけるオンライン実験研究の現状と課題",
  authors: "後藤 晶",
  venue: "第36回研究会＆第11回社会コミュニケーション部会（特別講演）",
  place: "敦賀市生涯学習センター",
  type: "invited",
  invited: true,
  tags: ["method"]
}, {
  date: "2024-08-25",
  yr: 2024,
  title: "AIの向社会性 ── AIを使った経済ゲーム実験の課題",
  authors: "後藤 晶",
  venue: "第36回研究会＆第11回社会コミュニケーション部会",
  place: "敦賀市生涯学習センター",
  type: "oral",
  invited: false,
  tags: ["ai"]
}, {
  date: "2024-08-25",
  yr: 2024,
  title: "陰謀論と幸福度 ── 大規模パネルデータによる分析",
  authors: "後藤 晶, 山本輝太郎",
  venue: "第36回研究会＆第11回社会コミュニケーション部会",
  place: "敦賀市生涯学習センター",
  type: "oral",
  invited: false,
  tags: ["surv", "method"]
}, {
  date: "2024-08-22",
  yr: 2024,
  title: "ダークパターンとデフォルト効果に関する研究 ── クラウドソーシング実験による検討",
  authors: "後藤 晶",
  venue: "第169回 情報システムと社会環境研究発表会",
  place: "新潟工科大学",
  type: "oral",
  invited: false,
  tags: ["surv", "nudge", "featured"]
}, {
  date: "2024-07-21",
  yr: 2024,
  title: "IMC課題を用いたダークパターンの検討 ── クラウドソーシングを用いたオンライン実験から",
  authors: "後藤 晶",
  venue: "第27回 実験社会科学カンファレンス",
  place: "同志社大学今出川",
  type: "oral",
  invited: false,
  tags: ["surv", "method"]
}];
const PRES_FILTERS = [{
  id: "all",
  label: "All"
}, {
  id: "ai",
  label: "AI"
}, {
  id: "coop",
  label: "Cooperation"
}, {
  id: "surv",
  label: "Surveillance / Dark Patterns"
}, {
  id: "nudge",
  label: "Nudge"
}, {
  id: "ineq",
  label: "Inequality"
}, {
  id: "method",
  label: "Methods"
}, {
  id: "en",
  label: "English"
}];
function typeBadge(t, invited) {
  if (invited) return {
    label: "Invited",
    cls: "invited"
  };
  if (t === "poster") return {
    label: "Poster",
    cls: "first"
  };
  return {
    label: "Oral",
    cls: ""
  };
}
function fmtDate(s) {
  const [y, m, d] = s.split("-");
  return `${y}.${m}.${d}`;
}
function PresApp() {
  const [active, setActive] = React.useState("all");
  const [showAll, setShowAll] = React.useState(false);
  const counts = React.useMemo(() => {
    const c = {
      all: PRES.length
    };
    PRES_FILTERS.forEach(f => {
      if (f.id === "all") return;
      c[f.id] = PRES.filter(p => p.tags.includes(f.id)).length;
    });
    return c;
  }, []);
  const filtered = active === "all" ? PRES : PRES.filter(p => p.tags.includes(active));
  const list = showAll ? filtered : filtered.slice(0, 12);
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "pubs-toolbar"
  }, PRES_FILTERS.map(f => React.createElement("button", {
    key: f.id,
    className: "filter-btn" + (active === f.id ? " on" : ""),
    onClick: () => {
      setActive(f.id);
      setShowAll(false);
    }
  }, f.label, React.createElement("span", {
    className: "count"
  }, counts[f.id] || 0)))), React.createElement("div", {
    className: "pres-list"
  }, list.map((p, i) => {
    const b = typeBadge(p.type, p.invited);
    return React.createElement("div", {
      className: "pres",
      key: i
    }, React.createElement("div", {
      className: "pres-date"
    }, fmtDate(p.date)), React.createElement("div", {
      className: "pres-body"
    }, React.createElement("div", {
      className: "pres-title"
    }, p.title, p.tags.includes("featured") && React.createElement("span", {
      className: "pres-star",
      title: "\u4E3B\u8981\u306A\u696D\u7E3E"
    }, "\u2605")), React.createElement("div", {
      className: "pres-authors"
    }, p.authors), React.createElement("div", {
      className: "pres-venue"
    }, React.createElement("span", null, p.venue), React.createElement("span", {
      className: "dot-sep"
    }, "\xB7"), React.createElement("span", {
      className: "pres-place"
    }, p.place))), React.createElement("div", {
      className: "pres-meta"
    }, React.createElement("span", {
      className: "badge " + b.cls
    }, b.label)));
  })), filtered.length > 12 && React.createElement("div", {
    className: "pres-more"
  }, React.createElement("button", {
    className: "more-btn",
    onClick: () => setShowAll(!showAll)
  }, showAll ? `▲ Collapse` : `▼ Show all ${filtered.length} presentations`)), React.createElement("div", {
    className: "pres-footnote"
  }, document.documentElement.lang === "en" ? React.createElement(React.Fragment, null, "Over ", React.createElement("strong", null, "127 talks and conference presentations"), " are listed on", React.createElement("a", {
    href: "https://researchmap.jp/akiragoto/presentations",
    target: "_blank",
    rel: "noopener"
  }, " researchmap"), ".") : React.createElement(React.Fragment, null, "researchmap \u306B\u306F ", React.createElement("strong", null, "127\u4EF6\u4EE5\u4E0A"), " \u306E\u8B1B\u6F14\u30FB\u53E3\u982D\u767A\u8868\u304C\u767B\u9332\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u6700\u65B0\u30EA\u30B9\u30C8\u306F", React.createElement("a", {
    href: "https://researchmap.jp/akiragoto/presentations",
    target: "_blank",
    rel: "noopener"
  }, " researchmap "), "\u3092\u3054\u53C2\u7167\u304F\u3060\u3055\u3044\u3002")));
}
window.PresApp = PresApp;
const pubsRoot = document.getElementById("pubsRoot");
if (pubsRoot) {
  ReactDOM.createRoot(pubsRoot).render(React.createElement(PubsApp, null));
}
const presRoot = document.getElementById("presRoot");
if (presRoot && window.PresApp) {
  ReactDOM.createRoot(presRoot).render(React.createElement(PresApp, null));
}
(function navSpy() {
  const links = Array.from(document.querySelectorAll("#topNav a"));
  const sections = links.map(a => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  function update() {
    const y = window.scrollY + 120;
    let active = sections[0];
    for (const s of sections) {
      if (s.offsetTop <= y) active = s;
    }
    links.forEach(a => {
      a.classList.toggle("active", a.getAttribute("href") === "#" + active.id);
    });
  }
  window.addEventListener("scroll", update, {
    passive: true
  });
  update();
})();
(function setupEmail() {
  const link = document.getElementById("emailLink");
  if (!link) return;
  const u = ["a", "k", "i", "r", "a", "g", "o", "t", "o"].join("");
  const d = ["m", "e", "i", "j", "i", ".", "a", "c", ".", "j", "p"].join("");
  const addr = u + "\u0040" + d;
  function reveal(e) {
    e && e.preventDefault();
    link.textContent = addr;
    link.href = "mailto:" + addr;
    link.removeEventListener("click", reveal);
  }
  link.addEventListener("click", reveal);
  link.addEventListener("mouseenter", () => {
    link.textContent = addr;
    link.href = "mailto:" + addr;
  }, {
    once: true
  });
})();
(function applyDefaults() {
  document.body.style.fontSize = "15px";
  document.body.dataset.density = "comfortable";
})();
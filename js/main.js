let branchCount = 0;
let clickCount = 0;
let index = 1;
let ansCount = 1;

// 1D100ダイス
const dice1D100 = Math.floor(Math.random() * 100) + 1;
const dice1D100View = (document.getElementById(
  "serif"
).innerHTML = `${dice1D100}`);
// 目星
const mebosiResult = dice1D100 <= 50 ? "成功" : "失敗";
// 聞き耳
const listenResult = dice1D100 <= 55 ? "成功" : "失敗";

document.getElementById("ansInput").style.visibility = "hidden";
document.getElementById("ansBtn").style.visibility = "hidden";

const serifNext = () => {
  if (ansCount === 1) {
    // テキスト変更
    document.getElementById(
      "serif"
    ).innerHTML = `${serifArr[clickCount][branchCount]}`;
    // 選択肢を表示
    if (clickCount === 4) {
      document.getElementById("nextBtn").disabled = "disabled";
      document.getElementById("ansInput").style.visibility = "visible";
      document.getElementById("ansBtn").style.visibility = "visible";
      const btn = document.getElementById("ansBtn");
      btn.innerHTML = "ダイス";
    }
    // console.log(inputText);
  } else if (ansCount === 2) {
    // テキスト変更
    document.getElementById(
      "serif"
    ).innerHTML = `${serifArr2[clickCount][branchCount]}`;
    if (branchCount === 0) {
      // 目星
      if (dice1D100 <= 50) {
        if (clickCount === 2) {
          // アイデアロール
          document.getElementById("ansInput").value = "アイデア";
          document.getElementById("nextBtn").disabled = "disabled";
          document.getElementById("ansInput").style.visibility = "visible";
          document.getElementById("ansBtn").style.visibility = "visible";
          const btn = document.getElementById("ansBtn");
          btn.innerHTML = "ダイス";
        }
      } else {
        clickCount = 1;
        branchCount = 2;
      }
    } else if (branchCount === 1) {
      // 聞き耳
      if (dice1D100 <= 55) {
        if (clickCount === 2) {
          document.getElementById("ansInput").value = "";
          document.getElementById("nextBtn").disabled = "disabled";
          document.getElementById("ansInput").style.visibility = "visible";
          document.getElementById("ansBtn").style.visibility = "visible";
          const btn = document.getElementById("ansBtn");
          btn.innerHTML = "決定";
        }
      } else {
        clickCount = 1;
        branchCount = 3;
      }
    }
  } else if (ansCount === 3) {
    // テキスト変更
    document.getElementById(
      "serif"
    ).innerHTML = `${serifArr3[clickCount][branchCount]}`;
  }
  console.log(branchCount);
  clickCount++;
};

const skillArr = { mebosi: "目星", listen: "聞き耳", idou: "移動" };
// ansCountの数値により何回目の選択か判断
// 何回目の時はこの分岐へ…と制御
const ansInput = () => {
  document.getElementById("nextBtn").disabled = null;
  let inputText = document.getElementById("ansInput").value;
  if (ansCount === 1) {
    clickCount = 0;
    if (inputText === skillArr["mebosi"]) {
      branchCount = 0;
      ansCount++;
      serifNext();
    } else if (inputText === skillArr["listen"]) {
      branchCount = 1;
      ansCount++;
      serifNext();
    } else if (inputText === skillArr["idou"]) {
      branchCount = 2;
      ansCount++;
      serifNext();
    } else {
      document.getElementById("serif").innerHTML = "正しく入力してください";
      clickCount = 4;
    }
  } else if (ansCount === 2 && branchCount === 0) {
    // 目星アイデアロール
    if (inputText === "アイデア") {
      // console.log(ansCount);
      ansCount++;
      clickCount = 0;
      branchCount = 0;
      serifNext();
    }
  } else if (ansCount === 2 && branchCount === 1) {
    // 聞き耳部屋選択
    if (inputText === "北" || inputText === "調理室") {
      ansCount++;
      clickCount = 1;
      branchCount = 1;
      // console.log(branchCount);
      serifNext();
    } else if (
      inputText === "南" ||
      inputText === "礼拝室" ||
      inputText === "礼拝堂"
    ) {
      ansCount++;
      clickCount = 1;
      branchCount = 2;
      serifNext();
    } else if (inputText === "西" || inputText === "書物庫") {
      ansCount++;
      clickCount = 1;
      branchCount = 1;
      serifNext();
    } else if (inputText === "東" || inputText === "下僕の部屋") {
      ansCount++;
      clickCount = 1;
      branchCount = 1;
      serifNext();
    } else {
      document.getElementById("serif").innerHTML = "正しく入力してください";
      clickCount = 2;
      ansCount = 2;
    }
  }
  // input,button 非表示
  document.getElementById("ansInput").style.visibility = "hidden";
  document.getElementById("ansBtn").style.visibility = "hidden";
  // inputテキスト削除
  document.getElementById("ansInput").value = "";
};

// const dice1D6 = Math.floor(Math.random() * 6) + 1;
// const dice2D6 = Math.floor(Math.random() * 12) + 1;
// const dice3D6 = Math.floor(Math.random() * 18) + 1;
document.getElementById("serif").innerHTML =
  "～注意書き～<br><br>(1)このゲームはクトゥルフTRPGというゲームのルールにある程度則って制作していますが、制作者の技量不足により本来のTRPGとは違う点が何点か存在します。<br><br>(2)本来のTRPGは探索者のアイデアや探索する場所など臨機応変に対応できるものですが、再現できていません。<br><br>(3)シナリオ「毒入りスープ」の序盤のネタバレを含みます。<br><br>(4)グロテスクな描写を含みます。苦手な方はプレイしないことをおすすめします。<br><br>以上の点をふまえて、お楽しみいただける方のみNEXTボタンを押下しお進みください。";
const serifArr = [
  [
    "あなたは何でもない平凡な日々を送る中、ある日の夜に突然目を覚まします。<br>目を覚ますとそこは、壁も床もコンクリートで出来た四方に扉のある正方形の部屋でした。<br>しかもあなたは丸腰で、着ている衣類は全て白いローブのようなぼろきれで、他には何もありません。",
  ],
  [
    "天井の薄暗い豆電球だけが部屋を照らし、真ん中には古い木製の長机と椅子が一つあります。<br>更に机の上には木製の器に入った、赤い無臭のスープが一つ。そして椅子の上には、古い紙切れが二つ落ちています。<br>内容は次の通りです。",
  ],
  [
    "～帰りたいなら　一時間以内に　毒入りスープを飲め。　飲むまでは　君じゃあここから　出られない。　一時間以内に　飲めなかったら　お迎えが来るぞ～",
  ],
  [
    "そしてもう一つには、この部屋の地図を思わしきものが記されています。<br>今いる部屋は『スープの部屋』、北の部屋は『調理室』、南の部屋は『礼拝室』、西の部屋は『書物庫』、東の部屋は『下僕の部屋』と記されてます。",
  ],
  ["なにをしますか？<br>～ここでできること～<br>目星[94]、聞き耳[55]、移動"],
];
const serifArr2 = [
  [
    "目星<" + dice1D100View + "…" + mebosiResult,
    "聞き耳<" + dice1D100View + "…" + listenResult,
    "目星<" + dice1D100View + "…" + mebosiResult,
  ],
  [
    "あなたは紙の裏にも文字が記されていると気付きます。内容は以下の通りです。<br><br>～暖かい　人間の　血の　スープ　冷めない　内に　召し上がれ～",
    "なにに対して行いますか？",
    "どの部屋に移動しますか？",
  ],
  [
    "アイデアロール",
    "北…『調理室』<br>南…『礼拝室』<br>西…『書物庫』<br>東…『下僕の部屋』",
    "あなたは、赤いスープが人間の血でできているとは思えませんでした。",
    "あなたは音が聞こえるかどうか、よくわかりませんでした。",
  ],
];
const serifArr3 = [
  [dice1D100View],
  [
    "あなたは、赤いスープは人間の血でできたスープであるという事が事実であるように思えます。<br>途端にスープから鉄錆に似た悪臭が込みあがる感じがしました。<br>この事実に気付いたあなたは、自身の想像力から生まれた不安感から0/1d4のSAN値チェックです。",
    "中からの物音は全く聞こえないことがわかります。",
    "あなたは、部屋の向こうから何かの荒い呼吸音と、ズルズルという何か重いものを引きずるような音を耳にします。<br>また、聞き耳を立てるために近づいたあなたは、扉に格子状の窓がついていることに気が付くでしょう。",
  ],
];

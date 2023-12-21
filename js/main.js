let branchCount = 0;
let clickCount = 0;
let index = 1;
let ansCount = 1;
let repeatCount = 0;
let currentStetus = "導入";
// 技能値
let mebosi = 94;
let listen = 55;
let aidea = 70;
let SANStetus = 68;

// 技能分100面ダイスつくる
// 1D100ダイス
const dice1D100 = Math.floor(Math.random() * 100) + 1;
const mebosi1D100 = Math.floor(Math.random() * 100) + 1;
const listen1D100 = Math.floor(Math.random() * 100) + 1;
const aidea1D100 = Math.floor(Math.random() * 100) + 1;
const SAN1D100 = Math.floor(Math.random() * 100) + 1;
// console.log(dice1D100);
// console.log(mebosi1D100);
// console.log(listen1D100);
// console.log(aidea1D100);
// console.log(SAN1D100);
// 目星
let mebosiResult;
if (mebosi1D100 <= 5) {
  mebosiResult = "クリティカル";
} else if (mebosi1D100 >= 95) {
  mebosiResult = "ファンブル";
} else if (mebosi1D100 <= mebosi) {
  mebosiResult = "成功";
} else {
  mebosiResult = "失敗";
}
// 聞き耳
let listenResult = listen1D100 <= listen ? "成功" : "失敗";
// アイデア
let aideaResult;
if (aidea1D100 <= 5) {
  aideaResult = "クリティカル";
} else if (aidea1D100 >= 95) {
  aideaResult = "ファンブル";
} else if (aidea1D100 <= aidea) {
  aideaResult = "成功";
} else {
  aideaResult = "失敗";
}
// SAN値
let SANResult;
if (SAN1D100 <= 5) {
  SANResult = "クリティカル";
} else if (SAN1D100 >= 95) {
  SANResult = "ファンブル";
} else if (SAN1D100 <= SANStetus) {
  SANResult = "成功";
} else {
  SANResult = "失敗";
}
document.getElementById("ansInput").style.visibility = "hidden";
document.getElementById("ansBtn").style.visibility = "hidden";

const serifNext = () => {
  console.log(aideaResult);
  console.log("clickCount：" + clickCount);
  console.log("currentStetus：" + currentStetus);
  console.log("ansCount：" + ansCount);
  console.log("branchCount：" + branchCount);
  if (currentStetus === "導入") {
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
  } else if (ansCount === 2) {
    // テキスト変更
    document.getElementById(
      "serif"
    ).innerHTML = `${serifArr2[clickCount][branchCount]}`;
    if (currentStetus === "目星") {
      // 目星
      if (mebosi1D100 <= mebosi) {
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
        if (clickCount === 1) {
          clickCount = 2;
          branchCount = 2;
        }
        document.getElementById(
          "serif"
        ).innerHTML = `${serifArr2[clickCount][branchCount]}`;
        if (clickCount === 2) {
          // 選択画面に戻る
          currentStetus = "導入";
          clickCount = 3;
          branchCount = 0;
          ansCount = 1;
        }
      }
    } else if (currentStetus === "聞き耳") {
      // 聞き耳
      if (listen1D100 <= listen) {
        if (clickCount === 2) {
          document.getElementById("ansInput").value = "";
          document.getElementById("nextBtn").disabled = "disabled";
          document.getElementById("ansInput").style.visibility = "visible";
          document.getElementById("ansBtn").style.visibility = "visible";
          const btn = document.getElementById("ansBtn");
          btn.innerHTML = "決定";
        }
      } else {
        if (clickCount === 1) {
          clickCount = 2;
          branchCount = 3;
        }
        document.getElementById(
          "serif"
        ).innerHTML = `${serifArr2[clickCount][branchCount]}`;
        if (clickCount === 2) {
          // 選択画面に戻る
          currentStetus = "導入";
          clickCount = 3;
          branchCount = 0;
          ansCount = 1;
        }
      }
    } else if (currentStetus === "移動") {
      // 移動
      if (clickCount === 1) {
        document.getElementById("ansInput").value = "";
        document.getElementById("nextBtn").disabled = "disabled";
        document.getElementById("ansInput").style.visibility = "visible";
        document.getElementById("ansBtn").style.visibility = "visible";
        const btn = document.getElementById("ansBtn");
        btn.innerHTML = "決定";
      }
    }
  } else if (ansCount === 3) {
    if (currentStetus === "聞き耳") {
      // テキスト変更
      document.getElementById(
        "serif"
      ).innerHTML = `${listenArr[clickCount][branchCount]}`;
      if (clickCount === 0) {
        // 選択画面に戻る
        currentStetus = "導入";
        clickCount = 3;
        ansCount = 1;
        branchCount = 0;
      }
    } else if (currentStetus === "移動") {
      document.getElementById(
        "serif"
      ).innerHTML = `${idouArr[clickCount][branchCount]}`;
      if (clickCount === 1) {
        document.getElementById("ansInput").value = "";
        document.getElementById("nextBtn").disabled = "disabled";
        document.getElementById("ansInput").style.visibility = "visible";
        document.getElementById("ansBtn").style.visibility = "visible";
        const btn = document.getElementById("ansBtn");
        btn.innerHTML = "決定";
      }
    } else if (currentStetus === "アイデア") {
      document.getElementById(
        "serif"
      ).innerHTML = `${aideaArr[clickCount][branchCount]}`;
      if (aidea1D100 <= aidea) {
        // アイデア成功したら以下の処理
        if (clickCount === 1) {
          // アイデア成功後、次に進むよう制御
          clickCount = 2;
          branchCount = 0;
        }
        // 成功した場合は branchCount = 0;なのでそのまま
        document.getElementById(
          "serif"
        ).innerHTML = `${aideaArr[clickCount][branchCount]}`;
        if (SANResult === "失敗" || SANResult === "ファンブル") {
          branchCount = 1;
          if (clickCount === 4) {
            SANStetus = SANStetus - dice1D4;
            // 選択画面に戻る
            currentStetus = "導入";
            clickCount = 3;
            ansCount = 1;
            branchCount = 0;
          }
        } else if (clickCount === 4) {
          // 選択画面に戻る
          currentStetus = "導入";
          clickCount = 3;
          ansCount = 1;
          branchCount = 0;
        }
      } else {
        document.getElementById(
          "serif"
        ).innerHTML = `${aideaArr[clickCount][branchCount]}`;
        if (clickCount === 1) {
          // 選択画面に戻る
          currentStetus = "導入";
          clickCount = 3;
          ansCount = 1;
          branchCount = 0;
        }
      }
    }
  } else if (ansCount === 4) {
    if (currentStetus === "移動") {
      if (branchCount === 1) {
        document.getElementById(
          "serif"
        ).innerHTML = `${noArr[clickCount][branchCount]}`;
      } else if (branchCount === 0) {
        document.getElementById(
          "serif"
        ).innerHTML = `${noArr[clickCount][branchCount]}`;
        currentStetus = "導入";
        clickCount = 3;
        ansCount = 1;
        branchCount = 0;
      }
    }
  }
  clickCount++;
};

const skillArr = {
  mebosi: "目星",
  listen: "聞き耳",
  idou: "移動",
  mame: "豆電球",
};
// ansCountの数値により何回目の選択か判断
// 何回目の時はこの分岐へ…と制御…できないので
const ansInput = () => {
  document.getElementById("nextBtn").disabled = null;
  let inputText = document.getElementById("ansInput").value;
  if (currentStetus === "導入") {
    clickCount = 0;
    if (inputText === skillArr["mebosi"]) {
      currentStetus = "目星";
      branchCount = 0;
      ansCount++;
      serifNext();
    } else if (inputText === skillArr["listen"]) {
      currentStetus = "聞き耳";
      branchCount = 1;
      ansCount++;
      serifNext();
    } else if (inputText === skillArr["idou"]) {
      currentStetus = "移動";
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
      currentStetus = "アイデア";
      ansCount++;
      clickCount = 0;
      branchCount = 0;
      serifNext();
    }
  } else if (currentStetus === "聞き耳" && branchCount === 1) {
    // 聞き耳部屋選択
    if (inputText === "北" || inputText === "調理室") {
      ansCount++;
      clickCount = 0;
      branchCount = 0;
      serifNext();
    } else if (
      inputText === "南" ||
      inputText === "礼拝室" ||
      inputText === "礼拝堂"
    ) {
      ansCount++;
      clickCount = 0;
      branchCount = 1;
      serifNext();
    } else if (inputText === "西" || inputText === "書物庫") {
      ansCount++;
      clickCount = 0;
      branchCount = 0;
      serifNext();
    } else if (inputText === "東" || inputText === "下僕の部屋") {
      ansCount++;
      clickCount = 0;
      branchCount = 0;
      serifNext();
    } else {
      document.getElementById("serif").innerHTML = "正しく入力してください";
      clickCount = 2;
      ansCount = 2;
    }
  } else if (currentStetus === "移動" && ansCount === 2) {
    // 移動部屋選択
    if (inputText === "北" || inputText === "調理室") {
      ansCount++;
      clickCount = 0;
      branchCount = 0;
      serifNext();
    } else if (
      inputText === "南" ||
      inputText === "礼拝室" ||
      inputText === "礼拝堂"
    ) {
      ansCount++;
      clickCount = 0;
      branchCount = 1;
      serifNext();
    } else if (inputText === "西" || inputText === "書物庫") {
      ansCount++;
      clickCount = 0;
      branchCount = 2;
      serifNext();
    } else if (inputText === "東" || inputText === "下僕の部屋") {
      ansCount++;
      clickCount = 0;
      branchCount = 3;
      serifNext();
    } else {
      document.getElementById("serif").innerHTML = "正しく入力してください";
      clickCount = 1;
      ansCount = 2;
    }
  } else if (currentStetus === "移動") {
    if (ansCount === 3) {
      if (inputText === "いいえ") {
        clickCount = 0;
        branchCount = 0;
        ansCount++;
        serifNext();
      } else if (inputText === "はい") {
        clickCount = 0;
        branchCount = 1;
        ansCount++;
        serifNext();
      }
    }
  }
  // input,button 非表示
  document.getElementById("ansInput").style.visibility = "hidden";
  document.getElementById("ansBtn").style.visibility = "hidden";
  // inputテキスト削除
  document.getElementById("ansInput").value = "";
};

const dice1D4 = Math.floor(Math.random() * 4) + 1;
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
  [
    "なにをしますか？<br>～ここでできること～<br>目星[" +
      mebosi +
      "]、聞き耳[" +
      listen +
      "]、移動",
  ],
];
const serifArr2 = [
  [
    "目星[" + mebosi + "]　<　" + mebosi1D100 + "…" + mebosiResult,
    "聞き耳[" + listen + "]　<　" + listen1D100 + "…" + listenResult,
    "移動　<　どの部屋に移動しますか？",
  ],
  [
    "あなたは紙の裏にも文字が記されていると気付きます。内容は以下の通りです。<br><br>～暖かい　人間の　血の　スープ　冷めない　内に　召し上がれ～",
    "なにに対して行いますか？",
    "北…『調理室』<br>南…『礼拝室』<br>西…『書物庫』<br>東…『下僕の部屋』",
  ],
  [
    "アイデアロール",
    "北…『調理室』<br>南…『礼拝室』<br>西…『書物庫』<br>東…『下僕の部屋』",
    "あなたは、赤いスープが人間の血でできているとは思えませんでした。",
    "あなたは音が聞こえるかどうか、よくわかりませんでした。",
  ],
];
const listenArr = [
  [
    "中からの物音は全く聞こえないことがわかります。",
    "あなたは、部屋の向こうから何かの荒い呼吸音と、ズルズルという何か重いものを引きずるような音を耳にします。<br>また、聞き耳を立てるために近づいたあなたは、扉に格子状の窓がついていることに気が付くでしょう。",
  ],
  [],
];
const idouArr = [
  [
    "北の扉は、ドアノブがなく、真っ白な板の押し扉になっているようです。",
    "南の扉は、小窓付きの一回り大きな厚い鉄扉となっています。小窓から中の様子が伺えそうです。",
    "西の扉は、木製できれいな印象を受けます。鍵などはかかっておらず、難なく開けられるでしょう。",
    "東の扉は、さびた鉄でできています。鍵がかかっているようですが、ひどく脆く、力ずくで開けられるでしょう。",
  ],
  [
    "本当に移動しますか？",
    "本当に移動しますか？",
    "本当に移動しますか？",
    "本当に移動しますか？",
  ],
];
const aideaArr = [
  ["アイデア[" + aidea + "]　<　" + aidea1D100 + "…" + aideaResult],
  ["あなたは、赤いスープが人間の血でできているとは思えませんでした。"],
  [
    "あなたは、赤いスープは人間の血でできたスープであるという事が事実であるように思えます。<br>途端にスープから鉄錆に似た悪臭が込みあがる感じがしました。<br>この事実に気付いたあなたは、自身の想像力から生まれた不安感から0/1d4のSAN値チェックです。",
  ],
  [
    "SAN値[" + SANStetus + "]　<　" + SAN1D100 + "…" + SANResult,
    "SAN値[" + SANStetus + "]　<　" + SAN1D100 + "…" + SANResult,
  ],
  [
    "減少値　→　0<br>SAN値<br>" + SANStetus + "　→　" + `${SANStetus}`,
    "1D4　→　" +
      dice1D4 +
      "<br>SAN値<br>" +
      SANStetus +
      "　→　" +
      `${SANStetus - dice1D4}`,
  ],
];
const noArr = [
  [
    "ではあなたは移動するのをやめました。",
    "このゲームで遊べるのはここまでです。続きが気になる方は実際のTRPGを遊んでみてください。",
  ],
];

const answerHistory = [];

function submitAnswer() {
  const userAnswer = document.getElementById("answer").value;

  // 回答とタイムスタンプを履歴に追加
  answerHistory.push({ answer: userAnswer });

  // 回答回数を計算
  const answerSubmitNumber = answerHistory.length;

  // 履歴表示
  const historyDiv = document.getElementById("history");
  const newHistoryItem = document.createElement("div");
  newHistoryItem.innerHTML = `<strong>${answerSubmitNumber}回目の回答</strong> ${userAnswer}`;
  historyDiv.appendChild(newHistoryItem);

  // 正解かどうかをチェック（仮実装）
  const isCorrect = true; // 本当はサーバから結果を取得

  // 正解なら穴に答えを埋める
  if (isCorrect && selectedWordIndex !== -1) {
    const sentenceDiv = document.getElementById("sentence");
    const words = sentenceDiv.innerText.split(" ");
    words[selectedWordIndex] = userAnswer;
    sentenceDiv.innerHTML = words
      .map((word, i) => `<span onclick='selectWord(${i})'>${word}</span>`)
      .join(" ");
  }

  fetch("/check-answer", {
    method: "POST", // 送信
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ answer: userAnswer }),
  })
    .then((response) => response.json()) // 受信?
    .then((data) => {
      // 正誤判定
      const resultDiv = document.getElementById("result");
      if (data.isCorrect) {
        resultDiv.textContent = "正解";
      } else {
        resultDiv.textContent = "不正解";
      }
    });
}

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
}

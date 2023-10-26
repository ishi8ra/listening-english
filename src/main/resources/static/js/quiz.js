const answerHistory = [];

async function saveAnswer() {
  const userAnswer = document.getElementById("answer").value;

  // サーバーから正解データを取得
  const questionId = 1; // 仮の問題ID
  const response = await fetch(`/api/questions/${questionId}`);
  const data = await response.json();
  const correctAnswer = data.correctAnswer;

  // 正誤判定
  const isCorrect = userAnswer === correctAnswer;

  // 結果表示
  const resultDiv = document.getElementById("result");
  if (isCorrect) {
    resultDiv.textContent = "正解";
  } else {
    resultDiv.textContent = "不正解";
  }

  // 回答とタイムスタンプを履歴に追加
  answerHistory.push({ answer: userAnswer });

  // 回答回数を計算
  const answerSubmitNumber = answerHistory.length;

  // 履歴表示
  const historyDiv = document.getElementById("history");
  const newHistoryItem = document.createElement("div");

  // 前回の回答と比較
  const lastAnswer =
    answerHistory.length > 1 ? answerHistory[answerHistory.length - 2].answer : null;
  let styledAnswer = "";

  if (lastAnswer) {
    const lastWords = lastAnswer.split(" ");
    const currentWords = userAnswer.split(" ");

    styledAnswer = currentWords
      .map((word, index) => {
        if (lastWords[index] === word) {
          return `<span style="color: black;">${word}</span>`;
        } else {
          return `<span style="color: red;">${word}</span>`;
        }
      })
      .join(" ");
  } else {
    styledAnswer = userAnswer;
  }

  newHistoryItem.innerHTML = `<strong>${answerSubmitNumber}回目の回答</strong> ${styledAnswer}`;
  historyDiv.appendChild(newHistoryItem);
}

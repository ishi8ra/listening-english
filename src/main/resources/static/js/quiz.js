const answerHistory = [];

async function saveAnswer() {
  console.log("saveAnswer is called");
  const userAnswer = document.getElementById("answer").value;

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

function submitAnswer() {
  console.log("submitAnswer is called");
  const questionId = 3;
  console.log("Before fetch");

  fetch(`/api/questions/${questionId}`)
    .then((response) => {
      console.log("response: ", response);
      return response.json();
    })
    .then((data) => {
      console.log("data: ", data);
      const correctAnswer = data.correctAnswer;
      console.log("correctAnswer: " + correctAnswer);
      // 最後に保存された回答を取得
      const savedAnswer =
        answerHistory.length > 0 ? answerHistory[answerHistory.length - 1].answer : null;

      // 正誤判定
      const isCorrect = savedAnswer === correctAnswer;

      // 結果表示
      const resultDiv = document.getElementById("result");
      if (isCorrect) {
        resultDiv.textContent = "正解である";
      } else {
        resultDiv.textContent = "不正解あっちょんぷりけ";
      }
    })
    .catch((error) => {
      console.log("Fetch failed", error);
    });

  console.log("After fetch");
}

document.addEventListener("DOMContentLoaded", function () {
  const saveButton = document.getElementById("saveButton");
  const submitButton = document.getElementById("submitButton");

  if (saveButton) {
    saveButton.addEventListener("click", saveAnswer);
  }

  if (submitButton) {
    submitButton.addEventListener("click", submitAnswer);
  }
});

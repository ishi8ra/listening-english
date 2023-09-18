function submitAnswer() {
  const userAnswer = document.getElementById("answer").value;
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

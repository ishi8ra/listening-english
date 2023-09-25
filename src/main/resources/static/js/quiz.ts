// quiz.ts
async function submitAnswer(): Promise<void> {
  const userAnswerInput = document.getElementById("answer") as HTMLInputElement;
  const userAnswer = userAnswerInput.value;

  const response = await fetch("/check-answer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ answer: userAnswer }),
  });

  const data = await response.json();
  const resultDiv = document.getElementById("result") as HTMLElement;
  resultDiv.textContent = data.isCorrect ? "正解" : "不正解";
}

const toggleImgButton = document.getElementById("toggleImgButton") as HTMLButtonElement;
const imageFigure = document.getElementById("imageFigure") as HTMLElement;
imageFigure.style.display = "none";

toggleImgButton.addEventListener("click", () => {
  if (imageFigure.style.display === "none") {
    imageFigure.style.display = "block";
    toggleImgButton.innerHTML = "ヒント1<br />静止画を非表示";
  } else {
    imageFigure.style.display = "none";
    toggleImgButton.innerHTML = "ヒント1<br />静止画を表示";
  }
});

const toggleVideoButton = document.getElementById("toggleVideoButton") as HTMLButtonElement;
const videoFigure = document.getElementById("videoFigure") as HTMLElement;
videoFigure.style.display = "none";

toggleVideoButton.addEventListener("click", () => {
  if (videoFigure.style.display === "none") {
    videoFigure.style.display = "block";
    toggleVideoButton.innerHTML = "ヒント2<br />動画を非表示";
  } else {
    videoFigure.style.display = "none";
    toggleVideoButton.innerHTML = "ヒント2<br />動画を表示";
  }
});

// function submitAnswer() {
//   const userAnswer = document.getElementById("answer").value;
//   fetch("/check-answer", {
//     method: "POST", // 送信
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ answer: userAnswer }),
//   })
//     .then((response) => response.json()) // 受信?
//     .then((data) => {
//       // 正誤判定
//       const resultDiv = document.getElementById("result");
//       if (data.isCorrect) {
//         resultDiv.textContent = "正解";
//       } else {
//         resultDiv.textContent = "不正解";
//       }
//     });
// }

// const toggleImgButton = document.getElementById("toggleImgButton");
// const imageFigure = document.getElementById("imageFigure");
// imageFigure.style.display = "none";

// toggleImgButton.addEventListener("click", function () {
//   console.log(imageFigure.style.display);
//   console.log("toggleImgButton's EventListener is called");

//   if (imageFigure.style.display === "none") {
//     imageFigure.style.display = "block";
//     toggleImgButton.innerHTML = "ヒント1<br />静止画を非表示";
//   } else {
//     imageFigure.style.display = "none";
//     toggleImgButton.innerHTML = "ヒント1<br />静止画を表示";
//   }
// });

// const toggleVideoButton = document.getElementById("toggleVideoButton");
// const videoFigure = document.getElementById("videoFigure");
// videoFigure.style.display = "none";

// toggleVideoButton.addEventListener("click", function () {
//   console.log(videoFigure.style.display);
//   console.log("toggleVideoButton's EventListener is called");

//   if (videoFigure.style.display === "none") {
//     videoFigure.style.display = "block";
//     toggleVideoButton.innerHTML = "ヒント2<br />動画を非表示";
//   } else {
//     videoFigure.style.display = "none";
//     toggleVideoButton.innerHTML = "ヒント2<br />動画を表示";
//   }
// });

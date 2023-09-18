// audio 要素と各ボタン要素を取得
const audio = document.querySelector("audio");
const playBtn = document.querySelector(".play");
const pauseBtn = document.querySelector(".pause");
const stopBtn = document.querySelector(".stop");

// 各ボタン要素の click イベントにリスナー関数を登録
playBtn.addEventListener("click", playAudio, false);
pauseBtn.addEventListener("click", pauseAudio, false);
stopBtn.addEventListener("click", stopAudio, false);

// Play ボタンのリスナー関数
function playAudio() {
  // play() メソッドで音声を再生
  audio.play();
}

// Pause ボタンのリスナー関数
function pauseAudio() {
  // pause() メソッドで停止
  audio.pause();
}

// Stop ボタンのリスナー関数
function stopAudio() {
  // 停止して再生位置を先頭に戻す
  audio.pause();
  audio.currentTime = 0;
}

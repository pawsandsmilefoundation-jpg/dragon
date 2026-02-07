const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const dp = document.getElementById("dp");

playBtn.onclick = () => {
  if(audio.paused){
    audio.play();
    dp.classList.add("rotate");
    playBtn.textContent = "⏸";
  }else{
    audio.pause();
    dp.classList.remove("rotate");
    playBtn.textContent = "▶";
  }
};

audio.onended = () => {
  dp.classList.remove("rotate");
  playBtn.textContent = "▶";
};

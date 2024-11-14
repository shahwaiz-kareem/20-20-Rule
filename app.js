import player from "node-wav-player";
let minutes = 20
const playAudio = async () => {
  audio = await player.play({
    path: "./alert.wav",
  })

  setTimeout(() => {
    audio = player.stop()
  }, 1000 * 10)

  console.log(`Time remaining ${minutes} mins`);
  minutes = 20
}

setTimeout(() => {
  if (minutes >= 0) {
    minutes = minutes - 1
  }

}, 1000 * 60);


setInterval(() => {
  playAudio()
}, 1000 * 60 * 20)






// time and date
setInterval( () => {
    const time = new Date();
    const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    };

    document.querySelector("#time").textContent = time.toLocaleTimeString(
    "bb-no", options); 

}, 1000)


// for every 40h second scroll new message from array

// scrolling text airport messages.....
const airportMessages = [
  "* Vennligst hold minst 1 meter avstand, tusen takk *",
  "* Begrenset utenriks flyvning pga. Covid-19 *",
  "* Siste avgang for flytoget 21.desember 2020 *",
  "* Reise trygt og ta vare på hverandre *",
  "* God Jul og Godt nyttår! *",
];

setInterval(() => {
  let randomNumber = Math.floor(Math.random() * 4 + 1);
  airportMessage.textContent = airportMessages[randomNumber];
}, 40000);

// vennlist ikke forlat bagasje uten tilsyn

const infoSpeaker = {};

const infoSpeakerMessages = [
  "Please keep your distance",
  "Please use a mask",
  "Merry Christmas!",
  "Flight XY 124 is now ready for boarding, please go to gate",
  "Flight FG 342 is delayed, new arrival time is updated",
];

window.onclick = () => {
  setInterval(() => {
    let i = Math.floor(Math.random() * 4 + 1);
    const speech = new SpeechSynthesisUtterance();
    speech.lang = "en-uk";
    speech.voice = speechSynthesis.getVoices()[3];
    speech.text = infoSpeakerMessages[i];
    speechSynthesis.speak(speech);
  }, 20000);
};

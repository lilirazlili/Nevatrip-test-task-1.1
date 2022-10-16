const ticketTimeMore = document.querySelector(".ticketTimeMore");
const ticketTime1 = document.querySelector(".ticketTime1");
const ticketTime2 = document.querySelector(".ticketTime2");
const ticketTime3 = document.querySelector(".ticketTime3");
const priseAndButton3 = document.querySelector(".priseAndButton3");

ticketTimeMore.addEventListener("click", function () {
  ticketTime1.style.display = "inline";
  ticketTime2.style.display = "inline";
  ticketTime3.style.display = "inline";
  ticketTimeMore.style.display = "none";
  priseAndButton3.style.marginTop = "0px";
});

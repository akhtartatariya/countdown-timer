const daysEl=document.getElementById("days");
const hoursEl=document.getElementById("hours");
const minutesEl=document.getElementById("minutes");
const secondsEl=document.getElementById("seconds");

const targetDate = new Date('2023-12-31 23:59:59').getTime(); 

function countDown(){
  const currentDate = new Date().getTime();
  const timeRemaining = targetDate - currentDate;
  if (timeRemaining <= 0){
    const stopMessage =document.getElementById('stop').innerHTML = 'Happy New Year!';;
  }
  else{
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  daysEl.innerHTML=days;
  hoursEl.innerHTML=hours;
  minutesEl.innerHTML=minutes;
  secondsEl.innerHTML=seconds;
}}
setInterval(countDown, 1000);
countDown();
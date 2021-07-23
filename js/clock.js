const showTime = () => {
  let date = new Date();
  let time = date.toLocaleTimeString();
  let day = date.toDateString().split(" ");
  let today = `${day[0]}., ${day[1]}. ${day[2]}, ${day[3]}`;
  document.getElementById("clock").innerText = time;
  document.getElementById("clock").textContent = time;
  document.getElementById("date").innerText = today;
  document.getElementById("date").textContent = today;

  setTimeout(showTime, 1000);
};

showTime();

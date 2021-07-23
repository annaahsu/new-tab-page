const show = (classname) => {
  const elements = document.getElementsByClassName(classname);
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = "block";
  }
};

const showAll = () => {
  show("anchor");
  show("blue");
  show("red");
  show("weekend");
  show("college-apps");

  document.getElementById("btn").style.display = "none";
};

const setDisplay = (day) => {
  if (day == 1) {
    show("anchor");
  } else if (day == 2 || day == 4) {
    show("blue");
  } else if (day == 3 || day == 5) {
    show("red");
  } else {
    show("weekend");
  }
};

const myName = "Anna";

const setMessage = (time) => {
  let message = "";
  if (time >= 0 && time < 6) {
    message = "Sleep, girl!";
  } else if (time >= 6 && time < 9) {
    message = "Too early to be awake &#x1F634;";
  } else if (time >= 9 && time < 12) {
    message = `Good morning, ${myName}!`;
  } else if (time >= 12 && time < 18) {
    message = `Good afternoon, ${myName}!`;
  } else if (time >= 18 && time < 21) {
    message = `Good evening, ${myName}!`;
  } else {
    message = `Good night, ${myName}!`;
  }
  document.getElementById("message").innerHTML = message;
};

let currDate = new Date();
setDisplay(currDate.getDay());
setMessage(currDate.getHours());

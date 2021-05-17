const show = (classname) => {
    const elements = document.getElementsByClassName(classname);
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "block";
    }
}

const showAll = () => {
    show("anchor");
    show("blue");
    show("red");

    document.getElementById("main-container").style.alignItems = "center";
    document.getElementById("btn").style.display = "none";
}

const setDisplay = (day) => {
    if (day == 1) {
        show("anchor")
    }
    else if (day == 2 || day == 4) {
        show("blue")
    }
    else if (day == 3 || day == 5) {
        show("red")
    }
}

const currDate = new Date();
const dayOfTheWeek = currDate.getDay();
setDisplay(dayOfTheWeek);
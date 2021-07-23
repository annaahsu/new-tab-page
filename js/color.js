const root = document.documentElement;
const d = new Date();
const m = 1 + d.getMonth();

const spring = {
  black: "#030806",
  dark: "#091611",
  light: "#b4e0cf",
  pale: "#ebf7f3",
};
const summer = {
  black: "#070502",
  dark: "#170f06",
  light: "#e9cba8",
  pale: "#f9f0e7",
};
const fall = {
  black: "#050100",
  dark: "#170602",
  light: "#f4ab9a",
  pale: "#fce6e1",
};
const winter = {
  black: "#010204",
  dark: "#040b14",
  light: "#a1c2ec",
  pale: "#e2ecf9",
};

const setTheme = (season, name) => {
  for (color in season) {
    root.style.setProperty(`--${color}`, season[color]);
  }
  let link = document.querySelector("link[rel~='" + "icon" + "']");
  link = document.createElement("link");
  link.rel = "icon";
  document.getElementsByTagName("head")[0].appendChild(link);
  link.href = "favicon/" + name + "/favicon.ico";
};

if (m >= 3 && m < 6) {
  // if it is sometime between March and May
  setTheme(spring, "spring");
} else if (m >= 6 && m < 9) {
  // if it is sometime between June and August
  setTheme(summer, "summer");
} else if (m >= 9 && m < 11) {
  // if it is sometime between Semptember and November
  setTheme(fall, "fall");
} else {
  // if it isn't any of those (theoretically sometime between December and February)
  setTheme(winter, "winter");
}

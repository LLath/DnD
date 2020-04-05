// Choose Mode

const mode = localStorage.getItem("Mode");
let green = "#8d8741";
let blue = "#659DBD";
let red = "#DAAD86";
let brown = "#BC986A";
let yellow = "#FBEEC1";
let text_color = "white";

switch (mode) {
  case "light":
    green = "#8d8741";
    blue = "#659DBD";
    red = "#DAAD86";
    brown = "#BC986A";
    yellow = "#FBEEC1";
    text_color = "white";
    break;

  case "dark":
    green = "#DCD0C0";
    blue = "#C0B283";
    red = "#F4F4F4";
    brown = "373737";
    yellow = "#C0B283";
    text_color = "black";
    break;

  default:
    break;
}

// Color
export const GREEN = green;
export const BLUE = blue;
export const RED = red;
export const BROWN = brown;
export const YELLOW = yellow;
export const TEXT_COLOR = text_color;

// Size
export const NORMAL = "1rem";
export const SMALL = "0.5rem";
export const BIG = "2rem";

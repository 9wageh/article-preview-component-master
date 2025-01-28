let share = document.querySelector(".share");
function on() {
    let displayValue = window.getComputedStyle(share).display;
    if (displayValue === "none") {
        share.style.display = "flex";
    } else {
        share.style.display = "none";

    }
}
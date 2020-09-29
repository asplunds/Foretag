document.addEventListener("DOMContentLoaded", e => {
    const buttons = [...document.querySelectorAll(".rubrik")];

    for (const button of buttons) {
    button.addEventListener("click", e => {
        e.currentTarget.querySelector(".content").classList.toggle("hidden")
    });
    }
})
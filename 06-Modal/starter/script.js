'use strict';
const modalOpen = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const modalClose = document.querySelector(".close-modal")

const openHandler = () => {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}
const closeHandler = () => {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

for(let i = 0; i < modalOpen.length; i++ ){
    modalOpen[i].addEventListener("click", openHandler)
}

modalClose.addEventListener("click", closeHandler);
overlay.addEventListener("click", closeHandler);
document.addEventListener("keydown", (e) => {
    if(!modal.classList.contains("hidden") && e.key === "Escape"){
        closeHandler();
    }
})


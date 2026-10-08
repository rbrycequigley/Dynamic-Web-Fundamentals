console.log(".js file loaded")

const image = document.querySelector("#smallPic");
const modal = document.querySelector(".modal");
const modalImage = document.querySelector("#largePic");
const close = document.querySelector(".close");
const closeButton = document.querySelector("#closeModal");
const nav2 = document.querySelector("#nav2")
const menu = document.querySelector("#nav")
const menuButton = document.querySelector("#menuButton")

document.addEventListener("click", function(event) {
    console.log(event.target)
});

image.addEventListener("click", function() {
    modal.style.display = "block";
    modalImage.style.display = "block";
    console.log("modal open");
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        modal.style.display = "none";
        modalImage.style.display = "none";
        console.log("modal closed via escape");
    }
});

modal.addEventListener("click", function(event) {
    if (event.target !== modalImage) {
        modal.style.display = "none";
        modalImage.style.display = "none";
        console.log("modal closed via click");
    }
});

document.addEventListener("click", function(event) {
    if (event.target === menuButton) {
        console.log("Menu clicked")
        if (nav2.style.display === "none") {
            nav2.style.display = "flex";
            console.log("changed from none to flex");
            nav2.classList.toggle("open");
        } else {
            nav2.style.display = "none";
        }
        
        
        
        
        
        
        
        
    }
});





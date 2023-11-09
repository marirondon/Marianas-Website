const division1 = document.getElementById("division1");
const division2 = document.getElementById("division2");
const division3 = document.getElementById("division3");
const projectPic = document.querySelector(".proyectPic");

const image1 = document.querySelector(".image1");
const image2 = document.querySelector(".image2");
const image3 = document.querySelector(".image3");

division1.addEventListener("mouseenter", () => {
    const imageSrc = division1.getAttribute("data-image");
    image1.querySelector("img").src = imageSrc;
    image1.style.display = "block";
    setTimeout(() => {
        image1.style.opacity = 1;
    }, 10); // Delay setting opacity to allow smooth transition
});

division2.addEventListener("mouseenter", () => {
    const imageSrc = division2.getAttribute("data-image");
    image2.querySelector("img").src = imageSrc;
    image2.style.display = "block";
    setTimeout(() => {
        image2.style.opacity = 1;
    }, 10);
});

division3.addEventListener("mouseenter", () => {
    const imageSrc = division3.getAttribute("data-image");
    image3.querySelector("img").src = imageSrc;
    image3.style.display = "block";
    setTimeout(() => {
        image3.style.opacity = 1;
    }, 10);
});

// Hide images when mouse leaves the divisions
division1.addEventListener("mouseleave", () => {
    image1.style.opacity = 0;
    setTimeout(() => {
        image1.style.display = "none";
    }, 500); // Delay hiding the image for a smooth transition
});

division2.addEventListener("mouseleave", () => {
    image2.style.opacity = 0;
    setTimeout(() => {
        image2.style.display = "none";
    }, 500);
});

division3.addEventListener("mouseleave", () => {
    image3.style.opacity = 0;
    setTimeout(() => {
        image3.style.display = "none";
    }, 500);
});
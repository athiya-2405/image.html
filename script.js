
let images = Array.from(document.querySelectorAll(".gallery img"));

let currentIndex = 0;

function openLightbox(image) {
    currentIndex = images.indexOf(image);

    document.getElementById("largeImage").src = image.src;

    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function changeImage(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;

    document.getElementById("largeImage").src = images[currentIndex].src;
}

function filterImages(category) {
    images.forEach(image => {
        if (
            category === "all" ||
            image.dataset.category === category
        ) {
            image.style.display = "block";
        } else {
            image.style.display = "none";
        }
    });
}

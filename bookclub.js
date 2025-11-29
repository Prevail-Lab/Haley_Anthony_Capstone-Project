function toggleSpoiler(id) {
    var spoiler = document.getElementById(id);
    var button = event.target;

    if (spoiler.classList.contains("spoiler")) {
        spoiler.classList.remove("spoiler");
        button.textContent = "Hide Spoiler";
    } else {
        spoiler.classList.add("spoiler");
        button.textContent = "Show Spoiler";
    }
}

let currentImage = 0;
const images = [
    "photo-1662101458732-e1024a703261.avif",
    "photo-1544947950-fa07a98d237f.avif",
    "photo-1723220217708-f0421cc9d649.avif",
    "premium_photo-1681487388651-d744a4d9f781.avif",
    "Dorian-Gray-photo-1633477189729-9290b3261d0a.avif"
];

function showImage(index) {
    const imgElement = document.getElementById("cycling-image");
    const dots = document.getElementsByClassName("dot");

    imgElement.src = images[index];
    currentImage = index;

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    dots[index].classList.add("active");
}

function cycleImages() {
    let next = (currentImage + 1) % images.length;
    showImage(next);
}

function currentSlide(n) {
    showImage(n);
}

window.onload = function() {
    setInterval(cycleImages, 3000);
};

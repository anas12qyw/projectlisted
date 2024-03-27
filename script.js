window.onload = function() {
    console.log("Page loaded");
    logImageLoad();
};

var imageContainers = document.querySelectorAll('.image-container');

imageContainers.forEach(container => {
    container.addEventListener('mouseover', function() {
        console.log("Mouse over");
        container.style.transform = 'scale(1.1)';
    });

    container.addEventListener('mouseleave', function() {
        console.log("Mouse leave");
        container.style.transform = 'scale(1)';
    });

    container.addEventListener('focus', function() {
        console.log("Focus");
        container.style.border = '2px solid #ff0000';
    });

    container.addEventListener('blur', function() {
        console.log("Blur");
        container.style.border = 'none';
    });
});

function logImageLoad() {
    var images = document.querySelectorAll('.gallery-image');
    images.forEach(image => {
        console.log("Image loaded: " + image.alt);
    });
}

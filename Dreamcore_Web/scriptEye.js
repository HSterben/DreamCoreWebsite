// Function to check if two elements overlap
function isOverlap(element1, element2) {
    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();

    return (
        rect1.left < rect2.right &&
        rect1.right > rect2.left &&
        rect1.top < rect2.bottom &&
        rect1.bottom > rect2.top
    );
}

// Function to add a random image to the container without overlap
function addRandomImage(images) {
    const container = document.getElementById("random-images-container");
    const image = document.createElement("img");

    // Set the source (replace with your image file path)
    image.src = "eye.png";

    // Set the initial position of the image
    const maxWidth = container.offsetWidth - image.width;
    const maxHeight = container.offsetHeight - image.height;
    let left, top;

    do {
        // Generate random positions within the container
        left = Math.random() * maxWidth;
        top = Math.random() * maxHeight;

        // Check for overlap with existing images
        var overlap = false;
        for (const existingImage of images) {
            if (isOverlap(image, existingImage)) {
                overlap = true;
                break;
            }
        }
    } while (overlap);

    // Set the position of the image
    image.style.position = "absolute";
    image.style.left = `${left}px`;
    image.style.top = `${top}px`;

    // Add the image to the container
    container.appendChild(image);

    // Add the image to the list of existing images
    images.push(image);
}

// Array to store existing images
const existingImages = [];

// Add multiple random images (adjust the number as needed)
for (let i = 0; i < 45; i++) {
    addRandomImage(existingImages);
}
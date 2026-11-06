function changeImage() {

    // Ask for new image URL
    let imageURL = prompt("Enter new image URL:");

    // Ask for border color
    let borderColor = prompt("Enter border color:");

    // Ask for image width
    let width = prompt("Enter image width in pixels:");

    // Ask for image height
    let height = prompt("Enter image height in pixels:");

    // Ask for border radius
    let borderRadius = prompt("Enter border radius in pixels:");

    // Select image
    let img = document.querySelector("#myImage");

    // Apply new image URL
    if (imageURL) {
        img.src = imageURL;
    }

    // Apply border color
    if (borderColor) {
        img.style.borderColor = borderColor;
    }

    // Apply width
    if (width && !isNaN(width) && Number(width) > 0) {
        img.style.width = width + "px";
    }

    // Apply height
    if (height && !isNaN(height) && Number(height) > 0) {
        img.style.height = height + "px";
    }

    // Apply border radius
    if (borderRadius && !isNaN(borderRadius) && Number(borderRadius) >= 0) {
        img.style.borderRadius = borderRadius + "px";
    }

}
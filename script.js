let originalMessage = document.getElementById('message').innerHTML;

function upDate(previewPic) {
    let messageDiv = document.getElementById('message');
    messageDiv.innerHTML = "";

    // Create a new image element to display in the message div
    let newImage = document.createElement('img');
    newImage.src = previewPic.src;
    newImage.alt = previewPic.alt;
    newImage.style.width = '150px'; // Adjust the size as needed
    newImage.style.height = '150px';
    messageDiv.appendChild(newImage);

  
    messageDiv.appendChild(description);
    console.log("Mouse over image: " + previewPic.alt);
}

function unDo() {
    let messageDiv = document.getElementById('message');
    messageDiv.innerHTML = originalMessage;
    console.log("Mouse leave image");
}

function focusUpdate(previewPic) {
    let messageDiv = document.getElementById('message');
    messageDiv.innerHTML = "";

    // Create a new image element to display in the message div
    let newImage = document.createElement('img');
    newImage.src = previewPic.src;
    newImage.alt = previewPic.alt;
    newImage.style.width = '150px'; // Adjust the size as needed
    newImage.style.height = '150px';
    messageDiv.appendChild(newImage);

    // Add description below the image
    let description = document.createElement('p');
    switch (previewPic.alt) {
        case 'Month 1: January':
            description.innerHTML = "January is a cold month, and I feel sluggish.";
            break;
        case 'Month 2: February':
            description.innerHTML = "February is also cold and sometimes snowy. I don't like it.";
            break;
        case 'Month 3: March':
            description.innerHTML = "March is still cold with a lot of wind.";
            break;
        case 'Month 4: April':
            description.innerHTML = "April is often rainy with occasional warm days. Has hints of spring.";
            break;
        case 'Month 5: May':
            description.innerHTML = "May flowers bloom and I start to go outside.";
            break;
        case 'Month 6: June':
            description.innerHTML = "June marks the start of summer and is a great month for my health.";
            break;
        default:
            description.innerHTML = previewPic.alt;
    }
    messageDiv.appendChild(description);
    console.log("Focus on image: " + previewPic.alt);
}

function blurUpdate() {
    let messageDiv = document.getElementById('message');
    messageDiv.innerHTML = originalMessage;
    console.log("Blur event on image");
}

// Add event listeners for mouseover, mouseleave, focus, and blur events
let images = document.querySelectorAll('.preview');
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('mouseover', function () {
        upDate(images[i]);
    });
    images[i].addEventListener('mouseleave', function () {
        unDo();
    });
    images[i].addEventListener('focus', function () {
        focusUpdate(images[i]);
    });
    images[i].addEventListener('blur', function () {
        blurUpdate();
    });
}

// Set tabindex for accessibility
for (let i = 0; i < images.length; i++) {
    images[i].setAttribute('tabindex', '0');
    console.log("Tab index added for image: " + images[i].alt);
}

// Set focus on page load for accessibility
document.addEventListener('DOMContentLoaded', function () {
    if (images.length > 0) {
        images[0].focus();
        focusUpdate(images[0]); // Update message with the first image on load
    }
    console.log("Page loaded and focus set on the first image");
});

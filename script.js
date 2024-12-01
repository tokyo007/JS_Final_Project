let originalMessage = document.getElementById('message').innerHTML;

function upDate(previewPic) {
    let messageDiv = document.getElementById('message');
    switch (previewPic.alt) {
        case 'Month 1: January':
            messageDiv.innerHTML = "January is a cold month and I hibernate.";
            break;
        case 'Month 2: February':
            messageDiv.innerHTML = "February is also cold and sometimes snowy. Blah!";
            break;
        case 'Month 3: March':
            messageDiv.innerHTML = "March brings the start of spring with cold blustry wind.";
            break;
        case 'Month 4: April':
            messageDiv.innerHTML = "April is often rainy but with an occassional sunny day.";
            break;
        case 'Month 5: May':
            messageDiv.innerHTML = "May flowers bloom and I am starting to feel alive.";
            break;
        case 'Month 6: June':
            messageDiv.innerHTML = "June marks the start of summer, I feel healthy and happy.";
            break;
        default:
            messageDiv.innerHTML = previewPic.alt + " - hover";
    }
    console.log("Mouse over image: " + previewPic.alt);
}

function unDo() {
    let messageDiv = document.getElementById('message');
    messageDiv.innerHTML = originalMessage;
    console.log("Mouse leave image");
}

function focusUpdate(previewPic) {
    let messageDiv = document.getElementById('message');
    switch (previewPic.alt) {
        case 'Month 1: January':
            messageDiv.innerHTML = "January is a cold month, and I feel sluggish.";
            break;
        case 'Month 2: February':
            messageDiv.innerHTML = "February is also cold and sometimes snowy. I don't like it.";
            break;
        case 'Month 3: March':
            messageDiv.innerHTML = "March is still cold with a lot of wind.";
            break;
        case 'Month 4: April':
            messageDiv.innerHTML = "April is often rainy with occasional warm days. Has hints of spring.";
            break;
        case 'Month 5: May':
            messageDiv.innerHTML = "May flowers bloom and I start to go outside.";
            break;
        case 'Month 6: June':
            messageDiv.innerHTML = "June marks the start of summer and is a great month for my health.";
            break;
        default:
            messageDiv.innerHTML = previewPic.alt;
    }
    console.log(previewPic.alt);
}

function blurUpdate() {
    let messageDiv = document.getElementById('message');
    messageDiv.innerHTML = originalMessage;
    console.log("Blur event on image");
}

// Adding lightbox effect with image carousel
let images = document.querySelectorAll('.preview');
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function () {
        let lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        lightbox.style.position = 'fixed';
        lightbox.style.top = '0';
        lightbox.style.left = '0';
        lightbox.style.width = '100%';
        lightbox.style.height = '100%';
        lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        lightbox.style.display = 'flex';
        lightbox.style.alignItems = 'center';
        lightbox.style.justifyContent = 'center';
        document.body.appendChild(lightbox);

        let imgElement = document.createElement('img');
        imgElement.src = images[i].src;
        imgElement.alt = images[i].alt;
        imgElement.style.width = '300px';
        imgElement.style.height = '300px';
        imgElement.style.boxShadow = '0px 0px 15px rgba(255, 255, 255, 0.9)';
        lightbox.appendChild(imgElement);

        let caption = document.createElement('div');
        caption.style.color = 'white';
        caption.style.marginTop = '10px';
        caption.innerText = images[i].alt;
        lightbox.appendChild(caption);

        // Adding navigation buttons
        let prevButton = document.createElement('button');
        prevButton.innerText = '<';
        prevButton.style.marginRight = '10px';
        lightbox.appendChild(prevButton);

        let nextButton = document.createElement('button');
        nextButton.innerText = '>';
        nextButton.style.marginLeft = '10px';
        lightbox.appendChild(nextButton);

        let currentIndex = i;

        function showImage(index) {
            imgElement.src = images[index].src;
            imgElement.alt = images[index].alt;
            caption.innerText = images[index].alt;
        }

        prevButton.addEventListener('click', function () {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        });

        nextButton.addEventListener('click', function () {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        });

        // Close lightbox on click outside of image
        lightbox.addEventListener('click', function (e) {
            if (e.target === lightbox) {
                document.body.removeChild(lightbox);
            }
        });
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
    }
    console.log("Page loaded and focus set on the first image");
});

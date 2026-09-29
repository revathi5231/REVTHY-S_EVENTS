// BOOKING FORM
const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
    bookingForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const eventType = document.getElementById("eventType").value;
        const date = document.getElementById("date").value;

        alert(
            "Thank you, " + name + "! ❤️\n\n" +
            "Your " + eventType + " booking request has been received.\n" +
            "Event Date: " + date + "\n\n" +
            "Our wedding team will contact you soon."
        );

        bookingForm.reset();
    });
}


// CONTACT FORM
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("contactName").value;

        alert(
            "Thank you, " + name + "! ❤️\n\n" +
            "Your message has been received."
        );

        contactForm.reset();
    });
}


// MOBILE MENU
function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");

    if (navLinks) {
        navLinks.classList.toggle("active");
    }
}


// GALLERY POPUP
const galleryImages = document.querySelectorAll(".photo img");

galleryImages.forEach(function(image) {

    image.addEventListener("click", function() {

        const popup = document.createElement("div");

        popup.className = "image-popup";

        popup.innerHTML = `
            <span class="close-popup">&times;</span>
            <img src="${image.src}" alt="${image.alt}">
        `;

        document.body.appendChild(popup);

        popup.querySelector(".close-popup").onclick = function() {
            popup.remove();
        };

        popup.onclick = function(event) {
            if (event.target === popup) {
                popup.remove();
            }
        };

    });
    const galleryImages = document.querySelectorAll(".photo img");

galleryImages.forEach(function(image) {

    image.addEventListener("click", function() {

        const popup = document.createElement("div");

        popup.style.position = "fixed";
        popup.style.top = "0";
        popup.style.left = "0";
        popup.style.width = "100%";
        popup.style.height = "100%";
        popup.style.background = "rgba(0,0,0,0.9)";
        popup.style.display = "flex";
        popup.style.alignItems = "center";
        popup.style.justifyContent = "center";
        popup.style.zIndex = "99999";

        popup.innerHTML = `
            <span style="
                position:absolute;
                top:20px;
                right:40px;
                color:white;
                font-size:50px;
                cursor:pointer;
            ">&times;</span>

            <img src="${image.src}" style="
                max-width:85%;
                max-height:85%;
                object-fit:contain;
                border-radius:10px;
            ">
        `;

        document.body.appendChild(popup);

        popup.querySelector("span").onclick = function() {
            popup.remove();
        };

        popup.onclick = function(event) {
            if (event.target === popup) {
                popup.remove();
            }
        };

    });

});

});
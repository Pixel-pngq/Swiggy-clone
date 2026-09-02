// ================================
// SWIGGY FRONTEND JAVASCRIPT
// ================================


// ================================
// 1. HEADER SCROLL ANIMATION
// ================================

const header = document.querySelector("header");

if (header) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 30) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    });

}


// ================================
// 2. SEARCH INPUT
// ================================

const searchInput = document.querySelector(".search-input");

if (searchInput) {

    const searchTexts = [
        "Search for restaurant, item or more",
        "Search for pizza...",
        "Search for burgers...",
        "Search for biryani...",
        "Search for desserts..."
    ];

    let textIndex = 0;
    let characterIndex = 0;
    let deleting = false;


    // ================================
    // TYPING ANIMATION
    // ================================

    function typingAnimation() {

        // Don't animate placeholder while user is typing
        if (searchInput.value !== "") {
            setTimeout(typingAnimation, 500);
            return;
        }

        const currentText = searchTexts[textIndex];

        if (!deleting) {

            searchInput.placeholder =
                currentText.substring(0, characterIndex + 1);

            characterIndex++;

            if (characterIndex >= currentText.length) {

                deleting = true;

                setTimeout(typingAnimation, 1500);

                return;
            }

        } else {

            searchInput.placeholder =
                currentText.substring(0, characterIndex - 1);

            characterIndex--;

            if (characterIndex <= 0) {

                characterIndex = 0;
                deleting = false;

                textIndex++;

                if (textIndex >= searchTexts.length) {
                    textIndex = 0;
                }
            }
        }

        setTimeout(
            typingAnimation,
            deleting ? 40 : 80
        );
    }

    typingAnimation();


    // ================================
    // 3. SEARCH FUNCTION
    // ================================

    searchInput.addEventListener("keydown", (event) => {

        if (event.key !== "Enter") {
            return;
        }

        const searchValue =
            searchInput.value.trim();

        // Empty search
        if (searchValue === "") {

            searchInput.style.borderColor = "red";

            setTimeout(() => {
                searchInput.style.borderColor = "";
            }, 1000);

            return;
        }

        // Search result
        alert(`Searching for: ${searchValue}`);

        searchInput.value = "";

        searchInput.style.borderColor = "";
    });


    // ================================
    // 4. SEARCH FOCUS EFFECT
    // ================================

    searchInput.addEventListener("focus", () => {

        searchInput.style.borderColor =
            "#ff5200";

    });


    // ================================
    // 5. SEARCH INPUT EFFECT
    // ================================

    searchInput.addEventListener("input", () => {

        if (searchInput.value.trim() !== "") {

            searchInput.style.borderColor =
                "#ff5200";

        } else {

            searchInput.style.borderColor = "";

        }

    });

}


// ================================
// 6. FOOD IMAGE MOUSE EFFECT
// ================================

// Select both left and right images

const foodImages =
    document.querySelectorAll(
        ".left-image, .right-image"
    );


foodImages.forEach((foodImage) => {

    foodImage.addEventListener("mousemove", (event) => {

        const rect =
            foodImage.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -5;

        const rotateY =
            ((x - centerX) / centerX) * 5;

        foodImage.style.transform =
            `perspective(600px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.03)`;

    });


    // Reset image when mouse leaves

    foodImage.addEventListener("mouseleave", () => {

        foodImage.style.transform =
            "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)";

    });

});


// ================================
// 7. PAGE LOAD ANIMATION
// ================================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    console.log(
        "Swiggy website loaded successfully!"
    );

});
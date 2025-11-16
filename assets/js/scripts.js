document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".executamos-swiper", {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        speed: 700,
        slidesPerView: 1.3,
        spaceBetween: 8,
        breakpoints: {
            576: {
                slidesPerView: 2.2
            },
            768: {
                slidesPerView: 3
            },
            992: {
                slidesPerView: 4
            },
            1200: {
                slidesPerView: 5
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".faq-item");

    items.forEach(item => {
        const header = item.querySelector(".faq-header");
        const body = item.querySelector(".faq-body");
        const icon = item.querySelector(".faq-icon");

        if (item.classList.contains("active")) {
            body.style.maxHeight = body.scrollHeight + "px";
            icon.textContent = "−";
        }

        header.addEventListener("click", () => {
            const isActive = item.classList.contains("active");

            items.forEach(other => {
                if (other !== item) {
                    other.classList.remove("active");
                    const otherBody = other.querySelector(".faq-body");
                    const otherIcon = other.querySelector(".faq-icon");
                    otherBody.style.maxHeight = 0;
                    otherIcon.textContent = "+";
                }
            });

            if (isActive) {
                item.classList.remove("active");
                body.style.maxHeight = 0;
                icon.textContent = "+";
            } else {
                item.classList.add("active");
                body.style.maxHeight = body.scrollHeight + "px";
                icon.textContent = "−";
            }
        });
    });
});
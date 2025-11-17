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

    function setBodyHeight(item) {
        const body = item.querySelector(".faq-body");
        if (item.classList.contains("active")) {
            body.style.maxHeight = body.scrollHeight + "px";
        } else {
            body.style.maxHeight = 0;
        }
    }

    items.forEach(item => {
        const icon = item.querySelector(".faq-icon");
        if (item.classList.contains("active")) {
            icon.textContent = "−";
            setBodyHeight(item);
        } else {
            icon.textContent = "+";
            setBodyHeight(item);
        }
    });

    items.forEach(item => {
        const header = item.querySelector(".faq-header");
        const icon = item.querySelector(".faq-icon");

        header.addEventListener("click", () => {
            const isActive = item.classList.contains("active");

            items.forEach(other => {
                other.classList.remove("active");
                other.querySelector(".faq-icon").textContent = "+";
                setBodyHeight(other);
            });

            if (!isActive) {
                item.classList.add("active");
                icon.textContent = "−";
                setBodyHeight(item);
            }
        });
    });

    window.addEventListener("resize", () => {
        items.forEach(item => {
            if (item.classList.contains("active")) {
                setBodyHeight(item);
            }
        });
    });
});
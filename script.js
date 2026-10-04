// Smooth reveal animation

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    },
    {
        threshold: 0.15
    }
);

sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "opacity 1s ease, transform 1s ease";

    observer.observe(section);
});


// Mouse light effect
const background = document.querySelector(".background");

document.addEventListener("mousemove", (event) => {

    const x = event.clientX;
    const y = event.clientY;

    background.style.background = `
        radial-gradient(
            circle 380px at ${x}px ${y}px,
            rgba(150, 10, 25, 0.16),
            transparent 70%
        ),
        radial-gradient(
            circle at 50% 15%,
            rgba(120, 5, 20, 0.12),
            transparent 35%
        ),
        #070506
    `;
});

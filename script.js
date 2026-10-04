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
            circle 350px at ${x}px ${y}px,
            rgba(255, 255, 255, 0.055),
            transparent 70%
        ),
        #080808
    `;
});

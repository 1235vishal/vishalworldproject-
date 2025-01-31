document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // GSAP Animations
  gsap.to(".container14", {
    opacity: 1,
    y: 0,
    ease: "power3.out",
    duration: 2,
    scrollTrigger: {
      trigger: ".container14",
      start: "top bottom",
      end: "top center",
      scrub: true,
    },
  });

  gsap.to("h1", {
    opacity: 1,
    y: 0,
    ease: "power3.out",
    duration: 2,
    scrollTrigger: {
      trigger: "h1",
      start: "top bottom",
      end: "top center",
      scrub: true,
    },
  });

  gsap.utils.toArray(".house-card").forEach((card, index) => {
    gsap.to(card, {
      opacity: 1,
      y: 0,
      ease: "power3.out",
      duration: 1.5,
      delay: index * 0.2,
      scrollTrigger: {
        trigger: card,
        start: "top bottom",
        end: "top center",
        scrub: true,
      },
    });
  });

  // Zone Filter Functionality
  document.getElementById("apply-filter").addEventListener("click", () => {
    const selectedZone = document.getElementById("zone-select").value;
    const cards = document.querySelectorAll(".house-card");

    cards.forEach((card) => {
      const zone = card.querySelector("p:nth-child(4)").textContent.split(":")[1].trim();
      card.style.display = (zone.toLowerCase() === selectedZone.toLowerCase() || selectedZone === "") ? "block" : "none";
    });
  });
});

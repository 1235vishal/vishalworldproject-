document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === 'undefined') {
    console.error("GSAP not loaded. Skipping animations.");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".pg-container", {
    opacity: 1,
    y: 0,
    ease: "power3.out",
    duration: 1.5,
    scrollTrigger: {
      trigger: ".pg-container",
      start: "top bottom",
      end: "top center",
      scrub: true,
    },
  });

  gsap.utils.toArray(".pg-house-card").forEach((card, index) => {
    gsap.to(card, {
      opacity: 1,
      y: 0,
      ease: "power3.out",
      duration: 1.2,
      delay: index * 0.2,
      scrollTrigger: {
        trigger: card,
        start: "top bottom",
        end: "top center",
        scrub: true,
      },
    });
  });
});

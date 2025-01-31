
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Animate the services container (Initial state: hidden and below)
  gsap.from(".services-container", {
    opacity: 0,
    y: 100, // Start position below the screen
    ease: "power3.out",
    duration: 2,
    scrollTrigger: {
      trigger: ".services-container",
      start: "top bottom", // Trigger when top of the container reaches the bottom of the viewport
      end: "top center", // End when top reaches the center of the viewport
      scrub: true,
    },
  });

  // Animate the services title (Initial state: hidden and below)
  gsap.from(".services-title", {
    opacity: 0,
    y: 50, // Start position below the screen
    ease: "power3.out",
    duration: 2,
    scrollTrigger: {
      trigger: ".services-title",
      start: "top bottom",
      end: "top center",
      scrub: true,
    },
  });

  // Animate each service card (Initial state: hidden and below)
  gsap.utils.toArray(".service-card").forEach((card, index) => {
    gsap.from(card, {
      opacity: 0,
      y: 50, // Start position below the screen
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
});

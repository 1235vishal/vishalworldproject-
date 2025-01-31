
// GSAP Animation for Images
const images = document.querySelectorAll('.gsap-animate');
gsap.fromTo(
  images,
  { opacity: 0, scale: 0.8, y: 50 },
  {
    opacity: 1,
    scale: 1,
    y: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".pgmap-image-gallery",
      start: "top 80%",
      end: "top 30%",
      toggleActions: "play none none none",
    },
  }
);

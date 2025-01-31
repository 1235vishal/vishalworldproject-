

  // Initialize GSAP animations
  gsap.registerPlugin(ScrollTrigger);

  // Animate both sections
  document.querySelectorAll(".firstsetabout, .secondsetabout").forEach((section) => {
    gsap.fromTo(
      section,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  // Animate headings and images
  gsap.from(".heading-primary, .heading-secondary", {
    x: -30,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".heading-primary",
      start: "top 90%",
    },
  });

  gsap.from(".image-container img", {
    scale: 0.9,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".image-container",
      start: "top 80%",
    },
  });

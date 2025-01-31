    // GSAP Animation for scrolling
    gsap.to(".illustration-container", {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".illustration-container",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

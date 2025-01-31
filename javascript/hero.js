
document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".paragraphs-container p", {
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out",
  });

  const stats = document.querySelectorAll(".about-text div span:first-child");
  stats.forEach((stat) => {
    const isNumeric = /^\d+$/.test(stat.textContent);
    if (isNumeric) {
      const countTo = parseInt(stat.textContent);
      gsap.fromTo(
        stat,
        { textContent: 0 },
        {
          textContent: countTo,
          scrollTrigger: {
            trigger: stat,
            start: "top 90%",
          },
          duration: 2,
          ease: "power3.out",
          snap: { textContent: 1 },
        }
      );
    }
  });

  gsap.from("button", {
    scrollTrigger: {
      trigger: "button",
      start: "top 90%",
    },
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(1.7)",
  });

  gsap.from(".main-image", {
    scrollTrigger: {
      trigger: ".main-image",
      start: "top 85%",
    },
    x: -50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(".square-images img", {
    scrollTrigger: {
      trigger: ".square-images",
      start: "top 85%",
    },
    x: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
  });

  gsap.to(".aboutbigbox", {
    y: -50,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".about-container",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.to(".about-text", {
    y: 30,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".about-container",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
});

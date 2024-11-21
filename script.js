// Animate header
gsap.from("header h1", { duration: 1, opacity: 0, y: -50 });
gsap.from("header p", { duration: 1.5, opacity: 0, y: 50, delay: 0.5 });

// Animate sections
gsap.utils.toArray('section').forEach(section => {
    gsap.from(section, { scrollTrigger: section, opacity: 0, y: 50, duration: 1 });
});

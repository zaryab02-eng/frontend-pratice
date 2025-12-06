gsap.to(".page1 .box1", {
  x: 500,
  duration: 2,
  delay: 1,
  rotation: 360,
  repeat: -1,
  yoyo: true,
  borderRadius: "50%",
});

gsap.from(".page2 .box2", {
  scale: 0,
  opacity: 0,
  rotation: 720,
  duration: 1,
  scrollTrigger: {
    trigger: ".page2 .box2",
    scroller: "body",
    markers: true,
    start: "top 50%",
    end: "top 30%",
    scrub: 2,
    pin: true,
  },
});

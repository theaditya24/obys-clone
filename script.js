var tl = gsap.timeline();
tl.from(".line h1", {
  y: 150,
  stagger: 0.25,
  duration: 0.6,
  delay: 0.5,
});
tl.from("#line1-part1 ", {
  opacity: 0,
  onStart: function () {
    var h5 = document.querySelector("#line1-part1 h5");
    var grow = 0;
    setInterval(function () {
      if (grow < 100) {
        grow++;
        h5.innerHTML = grow;
      } else {
        h5.innerHTML = 100;
      }
    }, 30);
  },
});
tl.to(".line h2",{
  animationName:"anime",
  opacity:1
})
tl.to("#loader", {
  opacity: 0,
  duration: 0.2,
  delay: 4,
});
tl.from("#page1",{
  delay:0.2,
  y:1200,
  opacity:0,
  duration:0.5
})
tl.to("#loader",{
  display:"none"
})
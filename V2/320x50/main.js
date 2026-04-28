var tl;
var tl2;
var startTime;


function init() {
  startTime = new Date();
  tl = gsap.timeline({ onComplete: logDuration });
  animate();
  setRollover();
}
gsap.config({
    force3D: true
  });
function animate() {
  tl.set(["#main_content"], { autoAlpha: 1, force3D: true });
  tl.set([".copy2 .line, .copy3 .line"], { xPercent: -120 });
  tl.set([logo, logoBlack, copy1, copy2, copy3, copy4, cta], {force3D: true});

  tl.addLabel("frame1", 1)
    .to(logoBlack, 0.5, { autoAlpha:0, ease: "power1.inOut" }, "frame1")
    .from(".copy1 .line", 0.5, { xPercent: -120, stagger: 0.2, ease: "power1.inOut" }, "frame1+=0.5")
    .to(cta, 0.5, { autoAlpha:1, ease: "power1.inOut" }, "frame1+=1.7")
  
  .addLabel("frame2", "frame1+=3")
    .to(copy1, 0.5, {autoAlpha:0, ease: "power1.inOut" }, "frame2")
    .to(".copy2 .line", 0.5, { xPercent: 0, stagger: 0.2, ease: "power1.inOut" }, "frame2+=0.5")

  .addLabel("frame3", "frame2+=3")
    .to(copy2, 0.5, {autoAlpha:0, ease: "power1.inOut" }, "frame3")
    .to(".copy3 .line", 0.5, { xPercent: 0, stagger: 0.2, ease: "power1.inOut" }, "frame3+=0.5")

  .addLabel("frame4", "frame3+=3")
    .to(".black", 0.5, { y: 0, ease: "power1.inOut" }, "frame4")
    .to(copy4, 0.5, { autoAlpha:0, ease: "power1.inOut" }, "frame4+=1.5")
    .to(logo, 0.5, { autoAlpha:1, ease: "power1.inOut" }, "frame4+=2")
}

function setRollover() {
  document
    .getElementById("default_exit")
    .addEventListener("mouseover", defaultOver, false);
  document
    .getElementById("default_exit")
    .addEventListener("mouseout", defaultOut, false);
}

function defaultOver() {
  gsap.to("#cta", 0.15, { scale: 1.1, ease: Power1.easeInOut });
}

function defaultOut() {
  gsap.to("#cta", 0.15, { scale: 1, ease: Power1.easeInOut });
}


function logDuration() {
  let endTime = new Date();
  console.log(
    "Animation duration: " +
      ((endTime - startTime) / 1000).toFixed(2) +
      " seconds",
  );
}
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
  tl.set([".copy2 .line, .copy3 .line, .copy4 .line"], { xPercent: -120 });
  tl.set([logo, img, bg1, bg2, bg3, bg4, copy1, copy2, copy3, copy4, cta], {force3D: true});
  tl.set([bg4], { y: 230 });

  tl.addLabel("frame1", 1)
    .to(logo, 1, { width: 143, x: 8.5, y: 4, ease: "power1.inOut" }, "frame1")
    .to(img, 1, { width: 665, height: 226, x: 12, y: 12, ease: 'Sine.easeOut' }, "frame1")
    .to(bg1, 1, { width: 719, height: 237, x: -32, y: -11, ease: 'Sine.easeOut'}, "frame1")
    .from(".copy1 .line", 0.5, { xPercent: -120, stagger: 0.2, ease: "power1.inOut" }, "frame1+=1")
    .to(cta, 0.5, { autoAlpha:1, ease: "power1.inOut" }, "frame1+=1.9")
  
  .addLabel("frame2", "frame1+=3")
    .to([bg1, copy1], 0.5, {autoAlpha:0, ease: "power1.inOut" }, "frame2")
    .to(bg2, 0.5, {autoAlpha:1, ease: "power1.inOut" }, "frame2")
    .to(".copy2", 0.1, { autoAlpha: 1, }, ">")
    .to(".copy2 .line", 0.5, { xPercent: 0, stagger: 0.2, ease: "power1.inOut" }, "frame2+=0.5")
  

  .addLabel("frame3", "frame2+=3")
    .to([bg2, copy2], 0.5, {autoAlpha:0, ease: "power1.inOut" }, "frame3")
    .to(bg3, 0.5, {autoAlpha:1, ease: "power1.inOut" }, "frame3")
    .to(".copy3", 0.1, { autoAlpha: 1, }, ">")
    .to(".copy3 .line", 0.5, { xPercent: 0, stagger: 0.2, ease: "power1.inOut" }, "frame3+=0.5")

  .addLabel("frame4", "frame3+=3")
    .to([copy3, logo], 0.5, {autoAlpha:0, ease: "power1.inOut" }, "frame4")
    .to(bg4, 0.8, { y: 0,ease: "power1.inOut" }, "frame4")
    .to(".copy4", 0.1, { autoAlpha: 1, }, ">")
    .to(".copy4 .line", 0.5, { xPercent: 0, stagger: 0.2, ease: "power1.inOut" }, "frame4+=0.5")
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
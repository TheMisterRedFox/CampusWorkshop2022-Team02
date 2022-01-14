const img = document.querySelector(".logoDC");
const titreSpans = document.querySelectorAll("span");
const btns = document.querySelectorAll(".btn-first");

window.addEventListener("load", () => {
  const TL = gsap.timeline({ paused: true });
  TL.staggerFrom(img, 2, { top: -500, opacity: 0, ease: "power3.out" }, 0.3)
    .staggerFrom(
      titreSpans,
      1.5,
      { top: +800, opacity: 0, ease: "power2.out" },
      0.05,
      "-=1"
    )
    .staggerFrom(btns, 2, { opacity: 0, ease: "power2.out" }, 0.3);

  TL.play();
});

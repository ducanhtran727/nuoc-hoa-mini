const wheelDialog = document.querySelector("#lucky-wheel");
const wheelDisc = document.querySelector("#wheel-disc");
const wheelSpin = document.querySelector("#wheel-spin");
const wheelClaim = document.querySelector("#wheel-claim");
const wheelResult = document.querySelector("#wheel-result");

document.querySelector("#wheel-launch").addEventListener("click", () => {
  wheelDialog.showModal();
});

wheelSpin.addEventListener("click", () => {
  wheelSpin.disabled = true;
  wheelResult.textContent = "Đang quay…";
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const duration = reducedMotion ? 0 : 3200;
  const angle = 1800 + 60 * Math.floor(Math.random() * 6);
  wheelDisc.style.transitionDuration = duration + "ms";
  wheelDisc.style.transform = "rotate(" + angle + "deg)";
  window.setTimeout(() => {
    wheelResult.textContent = "Ưu đãi của bạn: 899.000đ/set và miễn phí ship.";
    wheelClaim.hidden = false;
  }, duration);
});

wheelClaim.addEventListener("click", () => {
  wheelDialog.close();
});

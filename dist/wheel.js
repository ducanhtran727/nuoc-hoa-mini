const wheelDialog = document.querySelector("#lucky-wheel");
const wheelDisc = document.querySelector("#wheel-disc");
const wheelSpin = document.querySelector("#wheel-spin");
const wheelClaim = document.querySelector("#wheel-claim");
const wheelResult = document.querySelector("#wheel-result");

document.querySelector("#wheel-launch").addEventListener("click", () => {
  wheelDialog.showModal();
});
wheelDialog.showModal();

wheelSpin.addEventListener("click", () => {
  wheelSpin.disabled = true;
  wheelResult.textContent = "Đang quay…";
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const duration = reducedMotion ? 0 : 3200;
  // The 45% sector starts directly under the pointer.
  const angle = 5 * 360;
  wheelDisc.style.transitionDuration = duration + "ms";
  wheelDisc.style.transform = "rotate(" + angle + "deg)";
  window.setTimeout(() => {
    const product = products[0];
    const price = Math.round(product.originalPrice * 55 / 100);
    product.price = price;
    product.variants[0].price = price;
    selectPurchaseSize(product.variants[0].saleType);
    document.querySelectorAll("[data-wheel-price]").forEach(label => {
      label.textContent = money(price);
    });
    wheelResult.textContent = "Bạn nhận ưu đãi giảm 45%: " + money(price) + "/set và miễn phí ship.";
    wheelClaim.hidden = false;
  }, duration);
});

wheelClaim.addEventListener("click", () => {
  wheelDialog.close();
});

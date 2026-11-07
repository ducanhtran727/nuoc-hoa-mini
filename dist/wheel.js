const wheelDialog = document.querySelector("#lucky-wheel");
const wheelDisc = document.querySelector("#wheel-disc");
const wheelSpin = document.querySelector("#wheel-spin");
const wheelClaim = document.querySelector("#wheel-claim");
const wheelResult = document.querySelector("#wheel-result");
const wheelStorageKey = "kiwwi-seven-little-fortunes-wheel-used";
const usedMessage = "Bạn đã dùng lượt quay. Mỗi lần vào trang chỉ có một lượt.";

let wheelUsed = false;
try {
  wheelUsed = sessionStorage.getItem(wheelStorageKey) === "1";
} catch {
  // The current page still limits spins if browser storage is unavailable.
}
let wheelSpinning = false;

function showWheelReward(previouslyUsed) {
  const product = products[0];
  const price = Math.round(product.originalPrice * 55 / 100);
  product.wheelRewardApplied = true;
  product.price = price;
  product.variants[0].price = price;
  selectPurchaseSize(product.variants[0].saleType);
  document.querySelectorAll("[data-wheel-price]").forEach(label => {
    label.textContent = money(price);
  });

  wheelSpin.disabled = true;
  const reward = "Ưu đãi giảm 45%: " + money(price) + "/set và miễn phí ship.";
  wheelResult.textContent = previouslyUsed ? usedMessage + " " + reward : reward;
  wheelClaim.hidden = false;
}

function openWheel() {
  if (wheelUsed && !wheelSpinning) showWheelReward(true);
  if (!wheelDialog.open) wheelDialog.showModal();
}

document.querySelector("#wheel-launch").addEventListener("click", openWheel);
openWheel();

wheelSpin.addEventListener("click", () => {
  if (wheelUsed) return;
  wheelUsed = true;
  wheelSpinning = true;
  wheelSpin.disabled = true;
  try {
    sessionStorage.setItem(wheelStorageKey, "1");
  } catch {
    // The in-memory flag still prevents another spin on this page.
  }

  wheelResult.textContent = "Đang quay…";
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const duration = reducedMotion ? 0 : 3200;
  // The 45% sector starts directly under the pointer.
  wheelDisc.style.transitionDuration = duration + "ms";
  wheelDisc.style.transform = "rotate(1800deg)";
  window.setTimeout(() => {
    wheelSpinning = false;
    showWheelReward(false);
  }, duration);
});

wheelClaim.addEventListener("click", () => {
  wheelDialog.close();
});

// Dán URL Web App Google Apps Script (đuôi /exec) vào đây.
const URLscript = 'https://script.google.com/macros/s/AKfycbz93Qui7gLMjYwA6vEFj0GH7iUwys_WoKrK7Lrqkjl2qI1Eq0N87dJ9_bWe9rZoi_IM/exec';
let isSubmitting = false;

const products = [
  {
    "id": 0,
    "brand": "Chanel",
    "name": "Bleu de Chanel EDP Mini",
    "gender": "male",
    "price": 269000,
    "maxPrice": 269000,
    "volume": "10ml",
    "image": "assets/bleu-de-chanel.webp",
    "images": [
      "assets/bleu-de-chanel.webp"
    ],
    "inStock": true,
    "variants": [
      {
        "price": 269000,
        "comboPrice": 538000,
        "volume": "10ml",
        "saleType": "mini"
      }
    ]
  },
  {
    "id": 1,
    "brand": "Chanel",
    "name": "Chance EDP Mini",
    "gender": "female",
    "price": 278000,
    "maxPrice": 278000,
    "volume": "7.5ml",
    "image": "assets/chance.webp",
    "images": [
      "assets/chance.webp"
    ],
    "inStock": true,
    "variants": [
      {
        "price": 278000,
        "comboPrice": 556000,
        "volume": "7.5ml",
        "saleType": "mini"
      }
    ]
  },
  {
    "id": 2,
    "brand": "Chanel",
    "name": "Coco Mademoiselle EDP Mini",
    "gender": "female",
    "price": 260000,
    "maxPrice": 260000,
    "volume": "7.5ml",
    "image": "assets/coco-mademoiselle.webp",
    "images": [
      "assets/coco-mademoiselle.webp"
    ],
    "inStock": true,
    "variants": [
      {
        "price": 260000,
        "comboPrice": 520000,
        "volume": "7.5ml",
        "saleType": "mini"
      }
    ]
  },
  {
    "id": 3,
    "brand": "Chanel",
    "name": "N°5 EDP Mini",
    "gender": "female",
    "price": 240000,
    "maxPrice": 240000,
    "volume": "7.5ml",
    "image": "assets/chanel-no5.webp",
    "images": [
      "assets/chanel-no5.webp"
    ],
    "inStock": true,
    "variants": [
      {
        "price": 240000,
        "comboPrice": 480000,
        "volume": "7.5ml",
        "saleType": "mini"
      }
    ]
  },
  {
    "id": 4,
    "brand": "Dior",
    "name": "J’adore EDP Mini",
    "gender": "female",
    "price": 279000,
    "maxPrice": 279000,
    "volume": "5ml",
    "image": "assets/jadore.webp",
    "images": [
      "assets/jadore.webp"
    ],
    "inStock": true,
    "variants": [
      {
        "price": 279000,
        "comboPrice": 558000,
        "volume": "5ml",
        "saleType": "mini"
      }
    ]
  },
  {
    "id": 5,
    "brand": "Dior",
    "name": "Miss Dior EDP Mini",
    "gender": "female",
    "price": 265000,
    "maxPrice": 265000,
    "volume": "5ml",
    "image": "assets/miss-dior.webp",
    "images": [
      "assets/miss-dior.webp"
    ],
    "inStock": true,
    "variants": [
      {
        "price": 265000,
        "comboPrice": 530000,
        "volume": "5ml",
        "saleType": "mini"
      }
    ]
  },
  {
    "id": 6,
    "brand": "Dior",
    "name": "Sauvage EDP Mini",
    "gender": "male",
    "price": 259000,
    "maxPrice": 259000,
    "volume": "10ml",
    "image": "assets/sauvage.webp",
    "images": [
      "assets/sauvage.webp"
    ],
    "inStock": true,
    "variants": [
      {
        "price": 259000,
        "comboPrice": 518000,
        "volume": "10ml",
        "saleType": "mini"
      }
    ]
  },
  {
    "id": 7,
    "brand": "Giorgio Armani",
    "name": "My Way EDP Mini",
    "gender": "female",
    "price": 240000,
    "maxPrice": 240000,
    "volume": "7ml",
    "image": "assets/my-way.webp",
    "images": [
      "assets/my-way.webp"
    ],
    "inStock": true,
    "variants": [
      {
        "price": 240000,
        "comboPrice": 480000,
        "volume": "7ml",
        "saleType": "mini"
      }
    ]
  },
  {
    "id": 8,
    "brand": "Gucci",
    "name": "Bloom Acqua di Fiori EDP Mini",
    "gender": "female",
    "price": 239000,
    "maxPrice": 239000,
    "volume": "5ml",
    "image": "assets/bloom-acqua.webp",
    "images": [
      "assets/bloom-acqua.webp"
    ],
    "inStock": true,
    "variants": [
      {
        "price": 239000,
        "comboPrice": 478000,
        "volume": "5ml",
        "saleType": "mini"
      }
    ]
  },
  {
    "id": 9,
    "brand": "Gucci",
    "name": "Bloom EDP Mini",
    "gender": "female",
    "price": 239000,
    "maxPrice": 239000,
    "volume": "5ml",
    "image": "assets/bloom.webp",
    "images": [
      "assets/bloom.webp"
    ],
    "inStock": true,
    "variants": [
      {
        "price": 239000,
        "comboPrice": 478000,
        "volume": "5ml",
        "saleType": "mini"
      }
    ]
  },
  {
    "id": 10,
    "brand": "Gucci",
    "name": "Flora Gorgeous Jasmine EDP Mini",
    "gender": "female",
    "price": 269000,
    "maxPrice": 269000,
    "volume": "5ml",
    "image": "assets/flora-jasmine.webp",
    "images": [
      "assets/flora-jasmine.webp"
    ],
    "inStock": true,
    "variants": [
      {
        "price": 269000,
        "comboPrice": 538000,
        "volume": "5ml",
        "saleType": "mini"
      }
    ]
  },
  {
    "id": 11,
    "brand": "Chanel",
    "name": "Coco Noir EDP Mini",
    "gender": "female",
    "price": 240000,
    "maxPrice": 240000,
    "volume": "7.5ml",
    "image": "assets/coco-noir.webp",
    "images": [
      "assets/coco-noir.webp"
    ],
    "inStock": true,
    "variants": [
      {
        "price": 240000,
        "comboPrice": 480000,
        "volume": "7.5ml",
        "saleType": "mini"
      }
    ]
  },
  {
    "id": 12,
    "brand": "Versace",
    "name": "Bright Crystal EDT Mini",
    "gender": "female",
    "price": 199000,
    "maxPrice": 199000,
    "volume": "5ml",
    "image": "assets/bright-crystal.webp",
    "images": [
      "assets/bright-crystal.webp"
    ],
    "inStock": true,
    "variants": [
      {
        "price": 199000,
        "comboPrice": 398000,
        "volume": "5ml",
        "saleType": "mini"
      }
    ]
  },
  {
    "id": 13,
    "brand": "Yves Saint Laurent",
    "name": "Libre EDP Mini",
    "gender": "female",
    "price": 279000,
    "maxPrice": 279000,
    "volume": "7.5ml",
    "image": "assets/libre.webp",
    "images": [
      "assets/libre.webp"
    ],
    "inStock": true,
    "variants": [
      {
        "price": 279000,
        "comboPrice": 558000,
        "volume": "7.5ml",
        "saleType": "mini"
      }
    ]
  }
];
const money = (n) => n.toLocaleString("vi-VN") + "₫";
const $ = (s) => document.querySelector(s);
const gender = { female: "Nữ", male: "Nam", unisex: "Unisex" };
let filter = "all",
  limit = 8,
  selectedProduct = null;

function render() {
  let list = products.filter(
    (p) =>
      (filter === "all" || p.gender === filter) &&
      (p.brand + " " + p.name)
        .toLocaleLowerCase("vi")
        .includes($("#search").value.trim().toLocaleLowerCase("vi")),
  );
  if ($("#sort").value !== "default")
    list.sort((a, b) =>
      $("#sort").value === "asc" ? a.price - b.price : b.price - a.price,
    );
  $("#result-count").textContent = list.length + " sản phẩm";
  $("#products").innerHTML =
    list
      .slice(0, limit)
      .map(
        (p) => `<article class="product ${p.inStock ? "" : "sold-out"}">
        <button class="product-image" data-detail="${p.id}" aria-label="Xem ${p.brand} ${p.name}"><span class="tag">${gender[p.gender]}</span><img src="${p.image}" alt="${p.brand} ${p.name}" loading="lazy" decoding="async" width="960" height="960"></button>
        <div class="product-brand">${p.brand}</div><h3>${p.name}</h3><div class="product-meta">${gender[p.gender]} · ${p.volume}</div>
        <div class="prices price-range"><strong>${money(p.price)}</strong></div>
        <button class="buy" ${p.inStock ? `data-buy="${p.id}"` : "disabled"}>${p.inStock ? "Mua ngay ↗" : "Hết hàng"}</button></article>`,
      )
      .join("") ||
    '<p class="empty">Chưa tìm thấy mùi hương phù hợp. Thử tên khác nhé.</p>';
  $("#more").hidden = list.length <= limit;
}

let detailProduct = null;
let detailSize = 'mini';
function sizeOptions(product, selected, scope) {
  if (product.variants.length === 1) return '';
  return `<div class="size-options" role="group" aria-label="Chọn thể tích">${product.variants.map(v => `<button type="button" class="size-option ${v.saleType === selected ? 'selected' : ''}" data-size-choice="${v.saleType}" data-size-scope="${scope}" aria-pressed="${v.saleType === selected}"><span>${v.volume}</span><strong>${money(v.price)}</strong></button>`).join('')}</div>`;
}
function openDetail(id) {
  if (isSubmitting) return;
  detailProduct = products.find(product => product.id === id);
  if (!detailProduct) return;
  detailSize = 'mini';
  const p = detailProduct;
  $('#detail-content').innerHTML = `<div class="detail-gallery">${p.images.map((src,i) => `<figure><img src="${src}" alt="${p.brand} ${p.name} — ảnh ${i+1}" decoding="async"><figcaption>${p.volume}</figcaption></figure>`).join('')}</div><div class="detail-body"><div class="eyebrow">${p.brand}</div><h2>${p.name}</h2><p>${gender[p.gender]}</p><p id="detail-selected-size"></p><div class="prices"><strong id="detail-price"></strong></div><div id="detail-sizes"></div><p class="detail-offer" id="detail-offer"></p><button class="button" id="detail-buy" data-buy="${p.id}">Mua ngay ↗</button></div>`;
  updateDetailSize('mini');
  $('#detail').showModal();
  $('#detail').scrollTop = 0;
}
function updateDetailSize(size) {
  const variant = detailProduct?.variants.find(v => v.saleType === size);
  if (!variant) return;
  detailSize = size;
  $('#detail-selected-size').textContent = 'Bạn đang chọn: ' + variant.volume;
  $('#detail-price').textContent = money(variant.price);
  $('#detail-sizes').innerHTML = sizeOptions(detailProduct, size, 'detail');
  $('#detail-offer').innerHTML = `<span>1 chai ${money(variant.price)} + 22.000đ ship</span><span>2 chai ${money(variant.comboPrice)} · Miễn phí ship</span>`;
  $('#detail-buy').dataset.buySize = size;
}
function selectPurchaseSize(size) {
  const product = products.find(p => p.id === selectedProduct?.id);
  const variant = product?.variants.find(v => v.saleType === size);
  if (!variant) return;
  selectedProduct = { ...product, ...variant };
  $('#purchase-name').textContent = product.name + ' · ' + variant.volume;
  $('#purchase-price').textContent = money(variant.price);
  $('#purchase-sizes').innerHTML = sizeOptions(product, size, 'purchase');
  $('#purchase-offer').innerHTML = `<div class="offer-heading">Chọn số lượng</div><div class="offer-grid">${[1,2].map(q => {
    const price = quote(q);
    return `<button type="button" class="offer-choice" data-offer="${q}" aria-pressed="false"><span>${q} chai</span><strong>${(price.subtotal / 1000).toLocaleString('vi-VN')}k</strong><small>${q === 1 ? '+22k ship' : 'Free ship'}</small></button>`;
  }).join('')}</div>`;
  updateTotal();
}
function validQuantity(value) {
  const quantity = Number(value);
  return Number.isInteger(quantity) && quantity >= 1 && quantity <= 2;
}
function quote(quantity, product = selectedProduct) {
  if (!validQuantity(quantity))
    throw new RangeError("Số lượng phải từ 1 đến 2.");
  if (!product || !product.inStock) throw new Error("Sản phẩm đã hết hàng.");
  const subtotal = Number(quantity) === 2 ? product.comboPrice : product.price;
  const shipping = Number(quantity) === 1 ? 22000 : 0;
  return { subtotal, shipping, total: subtotal + shipping };
}
function updateTotal() {
  const input = $("#quantity");
  const valid = validQuantity(input.value);
  input.setCustomValidity(
    valid ? "" : "Vui lòng nhập số lượng nguyên từ 1 đến 2.",
  );
  input.setAttribute("aria-invalid", String(!valid));
  $("#quantity-error").hidden = valid;
  const price = valid && selectedProduct ? quote(Number(input.value)) : null;
  $("#purchase-subtotal").textContent = price ? money(price.subtotal) : "—";
  $("#purchase-shipping").textContent = price
    ? price.shipping
      ? money(price.shipping)
      : "Miễn phí"
    : "—";
  $("#purchase-total").textContent = price ? money(price.total) : "—";
  document.querySelectorAll('[data-offer]').forEach(button => {
    const active = valid && Number(button.dataset.offer) === Number(input.value);
    button.classList.toggle('selected', active);
    button.setAttribute('aria-pressed', String(active));
  });
  $("#quantity-minus").disabled = valid && Number(input.value) <= 1;
  $("#quantity-plus").disabled = valid && Number(input.value) >= 2;
}
function openPurchase(id, size = "mini") {
  if (isSubmitting) return;
  const product = products.find(p => p.id === id);
  if (!product || !product.inStock) return;
  if ($("#detail").open) $("#detail").close();
  selectedProduct = { ...product };
  $("#purchase-form").reset();
  $("#purchase-status").textContent = "";
  $("#purchase-image").src = product.images[0];
  $("#purchase-image").alt = product.brand + " " + product.name + " — ảnh 1";
  $("#purchase-image-second").hidden = true;

  $("#purchase-brand").textContent = product.brand;
  selectPurchaseSize(size);
  $("#purchase").showModal();
  $("#purchase").scrollTop = 0;
  $("#buyer-name").focus();
}
function stepQuantity(delta) {
  const input = $("#quantity");
  input.value = validQuantity(input.value)
    ? Math.min(2, Math.max(1, Number(input.value) + delta))
    : 1;
  updateTotal();
}
function purchasePayload(product, quantity, buyer) {
  return {
    fullname: buyer.name,
    phone: buyer.phone,
    address: buyer.address,
    quantity: String(quantity),
    category: product.brand + " " + product.name + " · " + product.volume,
    note: buyer.note,
    timestamp: new Date().toISOString(),
  };
}
async function sendPurchase(payload) {
  if (!URLscript.trim())
    throw new Error(
      "Chức năng đặt hàng chưa được kết nối. Vui lòng thử lại sau.",
    );
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);
  try {
    const response = await fetch(URLscript, {
      method: "POST",
      body: new URLSearchParams(payload),
      signal: controller.signal,
    });
    if (!response.ok)
      throw new Error(
        "Chưa gửi được thông tin. Vui lòng kiểm tra trước khi gửi lại.",
      );
    // Script có thể trả text, {result:"success"} hoặc {success:true}.
    // Chỉ chặn khi phản hồi JSON ghi rõ có lỗi.
    const text = await response.text();
    let result;
    try {
      result = JSON.parse(text);
    } catch {
      /* Phản hồi text cũng hợp lệ. */
    }
    if (
      result &&
      (result.success === false ||
        result.result === "error" ||
        result.status === "error" ||
        result.error)
    ) {
      throw new Error(
        "Cửa hàng chưa xác nhận đơn. Vui lòng kiểm tra trước khi gửi lại.",
      );
    }
  } finally {
    clearTimeout(timeout);
  }
}
function showOrderSuccess(payload, orderTotal) {
  $("#purchase").close();
  $("#success-phone").textContent = payload.phone;
  $("#success-product").textContent = payload.category;
  $("#success-quantity").textContent = payload.quantity + " chai";
  $("#success-total").textContent = money(
    orderTotal,
  );
  $("#purchase-form").reset();
  $("#purchase-status").textContent = "";
  $("#order-success").showModal();
  $("#success-continue").focus();
}
$("#success-continue").addEventListener("click", () => {
  $("#order-success").close();
  $("#collection").scrollIntoView({ behavior: "smooth" });
});
$("#purchase-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  if (typeof fbq === "function") fbq("track", "InitiateCheckout");
  if (isSubmitting) return;
  updateTotal();
  const buyer = {
    name: $("#buyer-name").value.trim(),
    phone: $("#buyer-phone").value.trim(),
    address: $("#buyer-address").value.trim(),
    note: $("#buyer-note").value.trim(),
  };
  for (const [key, selector] of [
    ["name", "#buyer-name"],
    ["address", "#buyer-address"],
  ]) {
    $(selector).setCustomValidity(buyer[key] ? "" : "Vui lòng nhập thông tin.");
  }
  const phoneDigits = buyer.phone.replace(/\D/g, "");
  $("#buyer-phone").setCustomValidity(
    /^[+0-9() .-]+$/.test(buyer.phone) &&
      phoneDigits.length >= 9 &&
      phoneDigits.length <= 15
      ? ""
      : "Vui lòng nhập số điện thoại hợp lệ (9–15 chữ số).",
  );
  if (!selectedProduct || !selectedProduct.inStock || !$("#purchase-form").reportValidity()) return;
  const payload = purchasePayload(
    selectedProduct,
    Number($("#quantity").value),
    buyer,
  );
  const orderTotal = quote(Number(payload.quantity)).total;
  const submitButton = $('#purchase-form button[type="submit"]');
  const originalLabel = submitButton.textContent;
  isSubmitting = true;
  submitButton.disabled = true;
  submitButton.textContent = "Đang gửi...";
  $("#purchase-status").textContent = "Đang gửi thông tin mua hàng...";
  try {
    await sendPurchase(payload);
    if (typeof fbq === "function") fbq("track", "Purchase", {
      value: orderTotal,
      currency: "VND",
    });
    showOrderSuccess(payload, orderTotal);
  } catch (error) {
    $("#purchase-status").textContent =
      error.name === "AbortError"
        ? "Chưa nhận được xác nhận từ cửa hàng. Vui lòng kiểm tra lại trước khi gửi lại."
        : error instanceof TypeError || error instanceof SyntaxError
          ? "Không nhận được xác nhận đơn hàng. Vui lòng kiểm tra lại trước khi gửi lại."
          : error.message;
  } finally {
    isSubmitting = false;
    submitButton.disabled = false;
    submitButton.textContent = originalLabel;
  }
});
for (const selector of ["#buyer-name", "#buyer-phone", "#buyer-address"]) {
  $(selector).addEventListener("input", () =>
    $(selector).setCustomValidity(""),
  );
}
$("#quantity").addEventListener("input", updateTotal);
$("#quantity-minus").onclick = () => stepQuantity(-1);
$("#quantity-plus").onclick = () => stepQuantity(1);

document.addEventListener("click", (e) => {
  const sizeChoice = e.target.closest('[data-size-choice]');
  if (sizeChoice && !isSubmitting) {
    if (sizeChoice.dataset.sizeScope === 'detail') updateDetailSize(sizeChoice.dataset.sizeChoice);
    else selectPurchaseSize(sizeChoice.dataset.sizeChoice);
  }
  const offer = e.target.closest('[data-offer]');
  if (offer && !isSubmitting) {
    $('#quantity').value = offer.dataset.offer;
    updateTotal();
  }
  const buy = e.target.closest("[data-buy]");
  if (buy) openPurchase(Number(buy.dataset.buy), buy.dataset.buySize || "mini");
  const detail = e.target.closest("[data-detail]");
  if (detail) openDetail(Number(detail.dataset.detail));
  const close = e.target.closest(".close");
  if (close) close.closest("dialog").close();
  const guide = e.target.closest("[data-guide]");
  if (guide) {
    setFilter(guide.dataset.guide);
    $("#collection").scrollIntoView({ behavior: "smooth" });
  }
});
function setFilter(f) {
  filter = f;
  limit = 8;
  document
    .querySelectorAll("[data-filter]")
    .forEach((b) => b.classList.toggle("active", b.dataset.filter === f));
  render();
}
document
  .querySelectorAll("[data-filter]")
  .forEach((b) => (b.onclick = () => setFilter(b.dataset.filter)));
$("#search").oninput = () => {
  limit = 8;
  render();
};
$("#sort").onchange = render;
$("#more").onclick = () => {
  limit += 8;
  render();
};
document.querySelectorAll("dialog").forEach((d) =>
  d.addEventListener("click", (e) => {
    if (e.target === d) {
      const r = d.getBoundingClientRect();
      if (
        e.clientX < r.left ||
        e.clientX > r.right ||
        e.clientY < r.top ||
        e.clientY > r.bottom
      )
        d.close();
    }
  }),
);
render();

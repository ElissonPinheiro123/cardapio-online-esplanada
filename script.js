const WHATSAPP = "5569992129060";
const POPULAR_IDS = [10, 2, 4, 29];

const pizzas = [
  { id: 1,  nome: "Atum",                  categoria: "salgada", ingredientes: "molho, mussarela, atum, cebola, pimentão, tomate, catupiry, orégano.",          m: 50, g: 55 },
  { id: 2,  nome: "Bacon",                 categoria: "salgada", ingredientes: "molho, mussarela, bacon, tomate, catupiry, orégano.",                            m: 46, g: 51, destaque: true },
  { id: 3,  nome: "Baiana Apimentada",     categoria: "salgada", ingredientes: "molho, mussarela, presunto, ervilha, bacon, pimenta calabresa, orégano.",        m: 46, g: 51 },
  { id: 4,  nome: "Calabresa",             categoria: "salgada", ingredientes: "molho, mussarela, calabresa, orégano.",                                          m: 46, g: 51 },
  { id: 5,  nome: "Calabresa c/ Catupiry", categoria: "salgada", ingredientes: "molho, mussarela, calabresa, catupiry, orégano.",                                m: 48, g: 53 },
  { id: 6,  nome: "Camarão",               categoria: "salgada", ingredientes: "molho, mussarela, camarão, orégano.",                                            m: 52, g: 57 },
  { id: 7,  nome: "Cupim",                 categoria: "salgada", ingredientes: "molho, mussarela, cupim, catupiry, orégano.",                                    m: 48, g: 53 },
  { id: 8,  nome: "Dengosa",               categoria: "salgada", ingredientes: "molho, mussarela, calabresa, bacon, milho, ovos, tomate, cebola, orégano.",      m: 46, g: 51 },
  { id: 9,  nome: "Fazenda",               categoria: "salgada", ingredientes: "molho, mussarela, costela, cebola, bacon, orégano.",                             m: 48, g: 53 },
  { id: 10, nome: "Filé",                  categoria: "salgada", ingredientes: "molho, mussarela, filé, champignon, catupiry, orégano.",                         m: 60, g: 65, destaque: true },
  { id: 11, nome: "Frango c/ Catupiry",    categoria: "salgada", ingredientes: "molho, mussarela, frango, catupiry, orégano.",                                   m: 46, g: 51 },
  { id: 12, nome: "Frango c/ Milho",       categoria: "salgada", ingredientes: "molho, mussarela, frango, tomate, milho, orégano.",                              m: 46, g: 51 },
  { id: 13, nome: "Lombo",                 categoria: "salgada", ingredientes: "molho, mussarela, lombo, orégano.",                                              m: 46, g: 51 },
  { id: 14, nome: "Lombo c/ Catupiry",     categoria: "salgada", ingredientes: "molho, mussarela, lombo, catupiry, orégano.",                                    m: 48, g: 53 },
  { id: 15, nome: "Milho Verde",           categoria: "salgada", ingredientes: "molho, mussarela, milho, tomate, orégano.",                                      m: 46, g: 51 },
  { id: 16, nome: "Mista",                 categoria: "salgada", ingredientes: "molho, mussarela, presunto, ervilha, ovo, orégano.",                             m: 46, g: 51 },
  { id: 17, nome: "Mussarela",             categoria: "salgada", ingredientes: "molho, mussarela, tomate, orégano.",                                             m: 43, g: 48 },
  { id: 18, nome: "Palmito",               categoria: "salgada", ingredientes: "molho, mussarela, palmito, orégano.",                                            m: 46, g: 51 },
  { id: 19, nome: "Palmito c/ Catupiry",   categoria: "salgada", ingredientes: "molho, mussarela, palmito, catupiry, orégano.",                                  m: 48, g: 53 },
  { id: 20, nome: "Peperoni",              categoria: "salgada", ingredientes: "molho, mussarela, peperoni, orégano.",                                           m: 52, g: 57 },
  { id: 21, nome: "Portuguesa",            categoria: "salgada", ingredientes: "molho, mussarela, presunto, ervilha, milho, pimentão, ovo, orégano.",            m: 46, g: 51 },
  { id: 22, nome: "Presunto e Tomate",     categoria: "salgada", ingredientes: "molho, mussarela, presunto, tomate, orégano.",                                   m: 46, g: 51 },
  { id: 23, nome: "Quatro Queijos",        categoria: "salgada", ingredientes: "molho, mussarela, catupiry, provolone, parmesão, orégano.",                      m: 46, g: 51 },
  { id: 24, nome: "Três Queijos",          categoria: "salgada", ingredientes: "molho, mussarela, catupiry, cheddar, orégano.",                                  m: 46, g: 51 },
  { id: 25, nome: "Vegetariana",           categoria: "salgada", ingredientes: "molho, mussarela, brócolis, tomate seco, palmito, orégano.",                     m: 46, g: 51 },
  { id: 26, nome: "Banana c/ Canela",      categoria: "doce",    ingredientes: "creme de leite, mussarela, banana, leite condensado, canela em pó.",             m: 46, g: 51 },
  { id: 27, nome: "Banana c/ Chocolate",   categoria: "doce",    ingredientes: "creme de leite, mussarela, banana, chocolate.",                                  m: 46, g: 51 },
  { id: 28, nome: "Brigadeiro",            categoria: "doce",    ingredientes: "creme de leite, mussarela, chocolate, granulado.",                               m: 46, g: 51 },
  { id: 29, nome: "Chocolate c/ Morango",  categoria: "doce",    ingredientes: "creme de leite, mussarela, chocolate, morango, granulado.",                      m: 46, g: 51 },
  { id: 30, nome: "Prestígio",             categoria: "doce",    ingredientes: "creme de leite, mussarela, coco ralado, chocolate, leite condensado.",           m: 46, g: 51 },
  { id: 31, nome: "Romeu e Julieta",       categoria: "doce",    ingredientes: "creme de leite, mussarela, goiabada.",                                           m: 46, g: 51 }
];

let cart        = [];
let favorites   = [];
let currentFilter = "todas";
let activePizza = null;
let activeSecond = null;
let activeSize  = "M";
let activeQty   = 1;
let pickingSecond = false;
let builder     = { size: "M", count: 1, qty: 1, first: null, second: null };
let changeNeed  = "nao";
let confirmAction = null;
let summaryStep = 1;
let miniCartTimer = null;

const $ = (id) => document.getElementById(id);

function money(v) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function isOpenNow() {
  const now = new Date();
  const day = now.getDay();
  const minutes = now.getHours() * 60 + now.getMinutes();
  return day !== 1 && minutes >= 1110 && minutes <= 1320;
}

function priceOf(pizza, size) {
  return size === "G" ? pizza.g : pizza.m;
}

function itemPrice(sabores, size) {
  return Math.max(...sabores.map((p) => priceOf(p, size)));
}

function pizzaName(item) {
  return item.sabores.length === 1
    ? item.sabores[0].nome
    : `Meia ${item.sabores[0].nome} / Meia ${item.sabores[1].nome}`;
}

function totalCart() {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

/* ── Carrinho fixo ─────────────────────────── */
function updateCartButton() {
  const btn = $("cartButton");
  if (!cart.length) {
    btn.classList.add("hidden");
    $("miniCart").classList.add("hidden");
    return;
  }
  const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);
  btn.classList.remove("hidden");
  btn.querySelector(".cart-top-line").textContent =
    `🛒 ${totalItems} ${totalItems === 1 ? "item" : "itens"} · ${money(totalCart())}`;
  updateFavoritesFilter();
}

/* ── Filtro de favoritas ───────────────────── */
function updateFavoritesFilter() {
  const btn = document.querySelector('[data-filter="favoritas"]');
  if (!btn) return;
  btn.textContent = favorites.length > 0 ? `Favoritas (${favorites.length})` : "Favoritas";
}

/* ── Mini carrinho ─────────────────────────── */
function updateMiniCart() {
  const items = $("miniCartItems");
  const sub   = $("miniCartSubtotal");
  if (!cart.length) return;
  items.innerHTML = cart.map((item) => `
    <div class="mini-cart-item">
      <span>🍕 ${item.quantity > 1 ? item.quantity + "x " : ""}${pizzaName(item)} ${item.size}</span>
      <span>${money(item.price * item.quantity)}</span>
    </div>
  `).join("");
  sub.textContent = `Subtotal: ${money(totalCart())}`;
}

function showMiniCartBriefly() {
  if (!cart.length) return;
  updateMiniCart();
  $("miniCart").classList.remove("hidden");
  clearTimeout(miniCartTimer);
  miniCartTimer = setTimeout(() => $("miniCart").classList.add("hidden"), 3200);
}

/* ── Seção popular ─────────────────────────── */
function renderPopular() {
  const popular = POPULAR_IDS.map((id) => pizzas.find((p) => p.id === id)).filter(Boolean);
  $("popularList").innerHTML = popular.map((p) => `
    <article class="popular-card" onclick="openPizzaModal(${p.id})">
      <div class="popular-img">
        <span class="popular-badge">🔥 Popular</span>
      </div>
      <div class="popular-info">
        <strong>${p.nome}</strong>
        <span class="popular-ingr">${p.ingredientes}</span>
        <div class="popular-price">
          <span>M ${money(p.m)}</span>
          <span class="sep">|</span>
          <span>G ${money(p.g)}</span>
        </div>
        <button class="btn primary" type="button" onclick="event.stopPropagation(); openPizzaModal(${p.id})">Pedir agora</button>
      </div>
    </article>
  `).join("");
}

/* ── Grid do cardápio ──────────────────────── */
function renderPizzas() {
  const q = $("searchInput").value.trim().toLowerCase();
  const grid = $("pizzaGrid");
  const list = pizzas.filter((p) => {
    const search = !q || p.nome.toLowerCase().includes(q) || p.ingredientes.toLowerCase().includes(q);
    const filter =
      currentFilter === "todas" ||
      (currentFilter === "salgadas" && p.categoria === "salgada") ||
      (currentFilter === "doces"    && p.categoria === "doce") ||
      (currentFilter === "destaques" && p.destaque) ||
      (currentFilter === "favoritas" && favorites.includes(p.id));
    return search && filter;
  });

  if (currentFilter === "favoritas" && favorites.length === 0) {
    grid.innerHTML = `
      <div class="empty-message">
        <div style="font-size:42px;margin-bottom:10px">⭐</div>
        <strong>Nenhuma favorita ainda</strong>
        <p>Toque na estrela das pizzas que você mais gosta para salvá-las aqui.</p>
      </div>`;
    return;
  }

  if (!list.length) {
    grid.innerHTML = `
      <div class="empty-message">
        <div style="font-size:42px;margin-bottom:10px">🔍</div>
        <strong>Nenhuma pizza encontrada</strong>
        <p>Tente outro termo de busca.</p>
      </div>`;
    return;
  }

  grid.innerHTML = list.map((p) => `
    <article class="pizza-card">
      <div class="pizza-inner">
        <div class="pizza-img"></div>
        <div class="pizza-body">
          <div class="pizza-top">
            <div>
              <h3>${p.nome}</h3>
              ${p.destaque ? `<span class="badge">⭐ Destaque da casa</span>` : ""}
              <p>${p.ingredientes}</p>
            </div>
            <button class="star ${favorites.includes(p.id) ? "active" : ""}" onclick="toggleFavorite(${p.id})" type="button" title="Favoritar">★</button>
          </div>
          <div class="pizza-actions">
            <div class="price">M ${money(p.m)} · G ${money(p.g)}</div>
            <button class="btn primary" onclick="openPizzaModal(${p.id})" type="button">Montar com esse sabor</button>
          </div>
        </div>
      </div>
    </article>
  `).join("");
}

/* ── Builder list ──────────────────────────── */
function renderBuilderList() {
  const q = $("builderSearch").value.trim().toLowerCase();
  const list = pizzas.filter((p) => p.nome.toLowerCase().includes(q));
  $("builderList").innerHTML = list.map((p) => {
    const selected = builder.first?.id === p.id || builder.second?.id === p.id;
    return `<button class="simple-item ${selected ? "selected" : ""}" onclick="selectBuilderFlavor(${p.id})" type="button">
      <strong>${p.nome}</strong>
      <span>M ${money(p.m)} · G ${money(p.g)}</span>
    </button>`;
  }).join("");

  $("builderSelected").textContent = builder.first
    ? builder.count === 2 && builder.second
      ? `${builder.first.nome} / ${builder.second.nome}`
      : builder.first.nome
    : "nenhum";
}

function selectBuilderFlavor(id) {
  const pizza = pizzas.find((p) => p.id === id);
  if (!builder.first) builder.first = pizza;
  else if (builder.count === 2) builder.second = pizza;
  else builder.first = pizza;
  renderBuilderList();
}

function addBuilderPizza() {
  if (!builder.first || (builder.count === 2 && !builder.second)) return;
  const sabores = builder.count === 2 ? [builder.first, builder.second] : [builder.first];
  cart.push({ id: crypto.randomUUID(), size: builder.size, quantity: builder.qty, sabores, price: itemPrice(sabores, builder.size) });
  builder.first = null;
  builder.second = null;
  builder.qty = 1;
  $("builderQty").textContent = "1";
  renderBuilderList();
  updateCartButton();
  showAddedFlow();
}

/* ── Favoritos ─────────────────────────────── */
function toggleFavorite(id) {
  favorites = favorites.includes(id)
    ? favorites.filter((x) => x !== id)
    : [...favorites, id];
  updateFavoritesFilter();
  renderPizzas();
}

/* ── Modal de pizza ────────────────────────── */
function openPizzaModal(id) {
  activePizza   = pizzas.find((p) => p.id === id);
  activeSecond  = null;
  activeSize    = "M";
  activeQty     = 1;
  pickingSecond = false;
  renderPizzaModal();
  $("pizzaModal").classList.remove("hidden");
}

function closePizzaModal() {
  $("pizzaModal").classList.add("hidden");
}

function renderPizzaModal() {
  const content = $("pizzaModalContent");

  if (pickingSecond) {
    content.innerHTML = `
      <h3>Adicionar segundo sabor</h3>
      <button class="btn secondary" onclick="backToPizzaModal()" type="button" style="margin-bottom:12px">← Voltar</button>
      <div class="second-grid">
        ${pizzas.map((p) => `
          <button class="second-card" onclick="chooseSecond(${p.id})" type="button">
            <div class="pizza-img"></div>
            <strong>${p.nome}</strong>
            <p>${p.ingredientes}</p>
            <span style="font-weight:800;font-size:13px;color:#9b1f2f">M ${money(p.m)} · G ${money(p.g)}</span>
          </button>`).join("")}
      </div>`;
    return;
  }

  const sabores = activeSecond ? [activePizza, activeSecond] : [activePizza];
  const preco   = itemPrice(sabores, activeSize);

  content.innerHTML = `
    <h3>${activePizza.nome}</h3>
    ${activePizza.destaque ? `<span class="badge">⭐ Destaque da casa</span>` : ""}
    <div class="modal-grid" style="margin-top:16px">
      <div class="modal-box">
        <strong>Tamanho</strong>
        <div class="two-buttons">
          <button class="choice ${activeSize === "M" ? "active" : ""}" onclick="setModalSize('M')" type="button">M</button>
          <button class="choice ${activeSize === "G" ? "active" : ""}" onclick="setModalSize('G')" type="button">G</button>
        </div>
      </div>
      <div class="modal-box">
        <strong>Quantidade</strong>
        <div class="qty-control">
          <button onclick="setModalQty(-1)" type="button">−</button>
          <span>${activeQty}</span>
          <button onclick="setModalQty(1)" type="button">+</button>
        </div>
      </div>
    </div>

    <div class="modal-box" style="margin-top:14px">
      <strong>Sabores</strong>
      <p style="margin-top:6px">${activeSecond
        ? `🍕 Meia <strong>${activePizza.nome}</strong> / Meia <strong>${activeSecond.nome}</strong>`
        : `🍕 <strong>${activePizza.nome}</strong>`}</p>
      ${activeSecond
        ? `<button class="btn secondary" onclick="removeSecondFlavor()" type="button" style="margin-top:10px;font-size:13px;padding:10px 16px">✕ Remover segundo sabor</button>`
        : `<button class="btn secondary" onclick="openSecondPicker()" type="button" style="margin-top:10px;font-size:13px;padding:10px 16px">+ Adicionar segundo sabor</button>`}
    </div>

    <div class="modal-price">
      <span>Valor da pizza</span><br>
      <strong>${money(preco)}</strong>
      ${activeQty > 1 ? `<div style="font-size:13px;color:#7a6050;margin-top:4px">${activeQty}x = ${money(preco * activeQty)}</div>` : ""}
    </div>

    <button class="btn primary full" onclick="confirmPizza()" type="button">Adicionar ao pedido</button>
  `;
}

function setModalSize(size) {
  activeSize = size;
  renderPizzaModal();
}

function setModalQty(delta) {
  activeQty = Math.max(1, activeQty + delta);
  renderPizzaModal();
}

function openSecondPicker() {
  pickingSecond = true;
  renderPizzaModal();
}

function backToPizzaModal() {
  pickingSecond = false;
  renderPizzaModal();
}

function chooseSecond(id) {
  activeSecond  = pizzas.find((p) => p.id === id);
  pickingSecond = false;
  renderPizzaModal();
}

function removeSecondFlavor() {
  activeSecond = null;
  renderPizzaModal();
}

function confirmPizza() {
  const sabores = activeSecond ? [activePizza, activeSecond] : [activePizza];
  cart.push({ id: crypto.randomUUID(), size: activeSize, quantity: activeQty, sabores, price: itemPrice(sabores, activeSize) });
  updateCartButton();
  showAddedFlow();
}

function showAddedFlow() {
  $("pizzaModalContent").innerHTML = `
    <div class="success-box">
      <div class="success-icon">✅</div>
      <h3>Pizza adicionada ao pedido!</h3>
      <p>O que deseja fazer agora?</p>
      <div class="success-actions">
        <button class="btn secondary" onclick="closePizzaModal()" type="button">← Continuar no cardápio</button>
        <button class="btn primary" onclick="closePizzaModal(); openSummary()" type="button">Finalizar pedido →</button>
      </div>
    </div>`;
  $("pizzaModal").classList.remove("hidden");
  showMiniCartBriefly();
}

/* ── Resumo e etapas ───────────────────────── */
function renderSummary() {
  $("summaryItems").innerHTML = cart.map((item) => {
    const subtotal = item.price * item.quantity;
    const line = item.quantity > 1
      ? `${item.quantity}× Pizza ${item.size} — ${pizzaName(item)} — ${money(item.price)} cada`
      : `Pizza ${item.size} — ${pizzaName(item)}`;
    return `<div class="summary-item">
      <div class="summary-row">
        <div>
          <strong>${line}</strong>
          ${item.quantity > 1 ? `<div style="font-size:13px;color:#9b1f2f;margin-top:2px">Subtotal ${money(subtotal)}</div>` : `<div style="font-size:13px;color:#9b1f2f;margin-top:2px">${money(item.price)}</div>`}
        </div>
        <div class="item-controls">
          <button onclick="changeItemQty('${item.id}', -1)" type="button">−</button>
          <span>${item.quantity}</span>
          <button onclick="changeItemQty('${item.id}', 1)" type="button">+</button>
          <button class="remove-btn" onclick="askRemove('${item.id}')" type="button">Remover</button>
        </div>
      </div>
    </div>`;
  }).join("");
  $("summaryTotal").textContent = `Total: ${money(totalCart())}`;
  updateCartButton();
}

function openSummary() {
  if (!cart.length) return alert("Adicione pelo menos uma pizza ao pedido antes de finalizar.");
  summaryStep = 1;
  renderSummary();
  goToStep(1);
  $("summaryModal").classList.remove("hidden");
}

function goToStep(step) {
  if (step > summaryStep) {
    if (summaryStep === 2) {
      if (!$("customerName").value.trim()) return showWarning("Informe seu nome para continuar.");
      if (!$("serviceType").value)          return showWarning("Selecione o tipo de atendimento para continuar.");
    }
    if (summaryStep === 3) {
      if (!$("payment").value) return showWarning("Escolha a forma de pagamento para continuar.");
    }
  }

  $("warning").classList.add("hidden");
  summaryStep = step;

  document.querySelectorAll(".step").forEach((s) => {
    const n = Number(s.dataset.step);
    s.classList.toggle("active", n === step);
    s.classList.toggle("done",   n < step);
  });

  document.querySelectorAll(".step-line").forEach((line, i) => {
    line.classList.toggle("done", i + 1 < step);
  });

  document.querySelectorAll("[data-step-content]").forEach((el) => {
    el.classList.toggle("hidden", Number(el.dataset.stepContent) !== step);
  });
}

function changeItemQty(id, delta) {
  cart = cart.map((item) => item.id === id
    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
    : item);
  renderSummary();
}

function askRemove(id) {
  confirmAction = () => {
    cart = cart.filter((item) => item.id !== id);
    closeConfirm();
    renderSummary();
    if (!cart.length) $("summaryModal").classList.add("hidden");
  };
  $("confirmText").textContent = "Remover esta pizza do pedido?";
  $("confirmYes").textContent  = "Sim, remover";
  $("confirmModal").classList.remove("hidden");
}

function askClear() {
  confirmAction = () => {
    cart = [];
    closeConfirm();
    $("summaryModal").classList.add("hidden");
    updateCartButton();
  };
  $("confirmText").textContent = "Tem certeza que deseja limpar todo o pedido?";
  $("confirmYes").textContent  = "Sim, limpar";
  $("confirmModal").classList.remove("hidden");
}

function closeConfirm() {
  $("confirmModal").classList.add("hidden");
  confirmAction = null;
}

function showWarning(text) {
  const w = $("warning");
  w.textContent = text;
  w.classList.remove("hidden");
  w.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

/* ── Envio do pedido ───────────────────────── */
function sendOrder() {
  $("warning").classList.add("hidden");

  if (!cart.length) return showWarning("Adicione pelo menos uma pizza ao pedido antes de finalizar.");
  if (!$("customerName").value.trim()) return showWarning("Informe seu nome para continuar.");
  if (!$("serviceType").value)          return showWarning("Selecione o tipo de atendimento para continuar.");
  if (!$("payment").value)              return showWarning("Escolha a forma de pagamento para continuar.");
  if (!$("aware").checked)              return showWarning("Para continuar, confirme que está ciente que não fazemos entrega.");
  if (!isOpenNow())                     return showWarning("Estamos fora do horário de atendimento. Funcionamos de terça a domingo, das 18h30 às 22h.");

  const orderLines = cart.map((item) => {
    const subtotal = item.price * item.quantity;
    return item.quantity > 1
      ? `- ${item.quantity}× Pizza ${item.size} — ${pizzaName(item)} — ${money(item.price)} cada — Subtotal ${money(subtotal)}`
      : `- 1× Pizza ${item.size} — ${pizzaName(item)} — ${money(item.price)}`;
  }).join("\n");

  let paymentLine = $("payment").value;
  if (paymentLine === "Dinheiro") {
    paymentLine = changeNeed === "sim"
      ? `Dinheiro — troco para ${$("changeFor").value || "não informado"}`
      : "Dinheiro — não precisa de troco";
  }

  const message = `Olá, segue meu pedido pelo cardápio online:

Nome: ${$("customerName").value.trim()}
Atendimento: ${$("serviceType").value}

Pedido:
${orderLines}

Pagamento: ${paymentLine}
Observação: ${$("notes").value.trim() || "nenhuma"}
Total: ${money(totalCart())}

Atenção: não fazemos entrega. Atendimento somente para retirada no local ou consumo no estabelecimento.`;

  saveLastOrder();
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank");
}

/* ── Último pedido (localStorage) ─────────── */
function saveLastOrder() {
  if (!cart.length) return;
  const simplified = cart.map((item) => ({
    size: item.size,
    quantity: item.quantity,
    saborIds: item.sabores.map((s) => s.id)
  }));
  try { localStorage.setItem("esplanada_last_order", JSON.stringify(simplified)); } catch {}
}

function repeatLastOrder() {
  let saved;
  try { saved = JSON.parse(localStorage.getItem("esplanada_last_order")); } catch {}
  if (!saved || !saved.length) return;

  const restored = saved.map((item) => {
    const sabores = item.saborIds.map((id) => pizzas.find((p) => p.id === id)).filter(Boolean);
    if (!sabores.length) return null;
    return { id: crypto.randomUUID(), size: item.size, quantity: item.quantity, sabores, price: itemPrice(sabores, item.size) };
  }).filter(Boolean);

  if (!restored.length) { alert("Não foi possível restaurar o último pedido."); return; }
  cart = restored;
  updateCartButton();
  openSummary();
}

function checkRepeatButton() {
  let saved;
  try { saved = JSON.parse(localStorage.getItem("esplanada_last_order")); } catch {}
  if (saved && saved.length) $("repeatBtn").classList.remove("hidden");
}

/* ── Init ──────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  $("fixedWhats").href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Olá, gostaria de tirar uma dúvida sobre o cardápio.")}`;

  if (!isOpenNow()) $("closedNotice").classList.remove("hidden");

  renderPopular();
  renderPizzas();
  renderBuilderList();
  checkRepeatButton();
  updateFavoritesFilter();

  $("searchInput").addEventListener("input", renderPizzas);
  $("builderSearch").addEventListener("input", renderBuilderList);

  document.querySelectorAll(".filter").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      renderPizzas();
    });
  });

  document.querySelectorAll("[data-builder-size]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-builder-size]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      builder.size = btn.dataset.builderSize;
      renderBuilderList();
    });
  });

  document.querySelectorAll("[data-flavor-count]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-flavor-count]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      builder.count = Number(btn.dataset.flavorCount);
      if (builder.count === 1) builder.second = null;
      renderBuilderList();
    });
  });

  $("builderMinus").onclick = () => { builder.qty = Math.max(1, builder.qty - 1); $("builderQty").textContent = builder.qty; };
  $("builderPlus").onclick  = () => { builder.qty += 1; $("builderQty").textContent = builder.qty; };
  $("addBuilderPizza").onclick = addBuilderPizza;

  $("closePizzaModal").onclick = closePizzaModal;
  $("cartButton").onclick = openSummary;
  $("closeSummary").onclick = () => $("summaryModal").classList.add("hidden");
  $("clearOrder").onclick  = askClear;
  $("confirmOrder").onclick = sendOrder;
  $("repeatBtn").onclick   = repeatLastOrder;

  $("payment").addEventListener("change", () => {
    $("changeBox").classList.toggle("hidden", $("payment").value !== "Dinheiro");
  });

  document.querySelectorAll("[data-change]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-change]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      changeNeed = btn.dataset.change;
      $("changeFor").classList.toggle("hidden", changeNeed !== "sim");
    });
  });

  $("confirmNo").onclick  = closeConfirm;
  $("confirmYes").onclick = () => confirmAction && confirmAction();

  $("backTop").onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  window.addEventListener("scroll", () => {
    $("backTop").classList.toggle("hidden", window.scrollY < 500);
  });

  /* Navegação pelas etapas do modal (delegação de evento) */
  document.addEventListener("click", (e) => {
    const nextBtn = e.target.closest(".step-next");
    const backBtn = e.target.closest(".step-back");
    if (nextBtn) goToStep(Number(nextBtn.dataset.next));
    if (backBtn) goToStep(Number(backBtn.dataset.back));
  });

  /* Mini carrinho: mostrar/ocultar ao passar o mouse sobre o botão (desktop) */
  $("cartButton").addEventListener("mouseenter", () => {
    if (!cart.length) return;
    clearTimeout(miniCartTimer);
    updateMiniCart();
    $("miniCart").classList.remove("hidden");
  });

  $("cartButton").addEventListener("mouseleave", () => {
    miniCartTimer = setTimeout(() => $("miniCart").classList.add("hidden"), 600);
  });

  $("miniCart").addEventListener("mouseenter", () => clearTimeout(miniCartTimer));
  $("miniCart").addEventListener("mouseleave", () => {
    miniCartTimer = setTimeout(() => $("miniCart").classList.add("hidden"), 600);
  });
});

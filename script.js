(() => {
  "use strict";

  /* ---------- Product data ---------- */
  const products = [
    {
      name: "Diesel Fuel Filter",
      sku: "VB-FF-101",
      cat: "filters",
      catLabel: "Filters",
      icon: "i-filter",
      isNew: true,
    },
    {
      name: "Fuel Lift Pump",
      sku: "VB-LP-204",
      cat: "pumps",
      catLabel: "Pumps & Rotors",
      icon: "i-drop",
      isNew: true,
    },
    {
      name: "Injector Nozzle Set",
      sku: "VB-NZ-318",
      cat: "valves",
      catLabel: "Valves",
      icon: "i-valve",
      isNew: false,
    },
    {
      name: "Pump Rotor Assembly",
      sku: "VB-RT-422",
      cat: "pumps",
      catLabel: "Pumps & Rotors",
      icon: "i-gear",
      isNew: true,
    },
    {
      name: "Distributor Head",
      sku: "VB-DH-509",
      cat: "pumps",
      catLabel: "Pumps & Rotors",
      icon: "i-cylinder",
      isNew: false,
    },
    {
      name: "Pump Liner Kit",
      sku: "VB-PL-611",
      cat: "kits",
      catLabel: "Repair Kits",
      icon: "i-kit",
      isNew: false,
    },
    {
      name: "Metering Valve",
      sku: "VB-MV-733",
      cat: "valves",
      catLabel: "Valves",
      icon: "i-valve",
      isNew: true,
    },
    {
      name: "Adjustment Plate",
      sku: "VB-AP-845",
      cat: "valves",
      catLabel: "Valves",
      icon: "i-gear",
      isNew: false,
    },
    {
      name: "Roller Kit Assembly",
      sku: "VB-RK-957",
      cat: "kits",
      catLabel: "Repair Kits",
      icon: "i-roller",
      isNew: true,
    },
    {
      name: "Pump Repair Kit",
      sku: "VB-PR-063",
      cat: "kits",
      catLabel: "Repair Kits",
      icon: "i-kit",
      isNew: false,
    },
    {
      name: "Secondary Fuel Filter",
      sku: "VB-FF-176",
      cat: "filters",
      catLabel: "Filters",
      icon: "i-filter",
      isNew: false,
    },
    {
      name: "Feed Pump Blade Set",
      sku: "VB-BL-288",
      cat: "pumps",
      catLabel: "Pumps & Rotors",
      icon: "i-gear",
      isNew: false,
    },
  ];

  const grid = document.getElementById("productGrid");
  if (grid) {
    grid.innerHTML = products
      .map(
        (p) => `
      <article class="product-card" data-cat="${p.cat}">
        <div class="product-card__media">
          ${p.isNew ? '<span class="product-card__badge">New</span>' : ""}
          <svg class="ic"><use href="#${p.icon}"/></svg>
        </div>
        <div class="product-card__body">
          <span class="product-card__cat">${p.catLabel}</span>
          <h3>${p.name}</h3>
          <span class="product-card__sku">SKU: ${p.sku}</span>
          <div class="product-card__footer">
            <a href="#contact" class="product-card__link">Enquire <svg class="ic"><use href="#i-arrow"/></svg></a>
          </div>
        </div>
      </article>
    `
      )
      .join("");
  }

  /* ---------- Filter tabs ---------- */
  const filterBtns = document.querySelectorAll(".filter");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const value = btn.dataset.filter;
      document.querySelectorAll(".product-card").forEach((card) => {
        const show = value === "all" || card.dataset.cat === value;
        card.style.display = show ? "" : "none";
      });
    });
  });

  /* ---------- Mobile nav ---------- */
  const nav = document.getElementById("siteNav");
  const navToggle = document.getElementById("navToggle");
  const navOverlay = document.getElementById("navOverlay");

  function closeNav() {
    nav.classList.remove("open");
    navOverlay.classList.remove("show");
    navToggle.setAttribute("aria-expanded", "false");
  }
  function toggleNav() {
    const isOpen = nav.classList.toggle("open");
    navOverlay.classList.toggle("show", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  }
  navToggle.addEventListener("click", toggleNav);
  navOverlay.addEventListener("click", closeNav);
  nav
    .querySelectorAll("a")
    .forEach((link) => link.addEventListener("click", closeNav));

  /* ---------- Sticky header shadow ---------- */
  const header = document.getElementById("siteHeader");
  function onScroll() {
    header.classList.toggle("scrolled", window.scrollY > 8);
    backToTop.classList.toggle("show", window.scrollY > 480);
  }
  const backToTop = document.getElementById("backToTop");
  backToTop.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => io.observe(el));

  /* ---------- Contact form ---------- */
  const WHATSAPP_NUMBER = "923037631514";
  const form = document.getElementById("quoteForm");
  const formNote = document.getElementById("formNote");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      formNote.textContent = "Please fill in all required fields.";
      return;
    }

    const name = document.getElementById("fname").value.trim();
    const contact = document.getElementById("fcontact").value.trim();
    const brand = document.getElementById("fbrand").value;
    const message = document.getElementById("fmsg").value.trim();

    const text =
      `Hello Bilal Traders, I'd like to request a quote.\n\n` +
      `Name: ${name}\n` +
      `Contact: ${contact}\n` +
      `Vehicle Brand: ${brand}\n` +
      `Message: ${message}`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

    formNote.textContent = "Opening WhatsApp with your enquiry details...";
    window.open(whatsappUrl, "_blank", "noopener");
    form.reset();
  });

  /* ---------- Footer year ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();
})();

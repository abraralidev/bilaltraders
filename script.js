(() => {
  "use strict";

  /* ---------- Product data ---------- */
  const products = [
    {
      name: "Accelerator Lever",
      sku: "7123-770",
      cat: "pumps",
      catLabel: "Pumps & Rotors",
      image: "Accelerator lever 7123-770.jpeg",
      isNew: true,
    },
    {
      name: "Cam Ring Screw",
      sku: "7123-975",
      cat: "pumps",
      catLabel: "Pumps & Rotors",
      image: "CAM RING SCREW 7123-975.jpeg",
      isNew: false,
    },
    {
      name: "Cam Ring",
      sku: "7123-308E",
      cat: "pumps",
      catLabel: "Pumps & Rotors",
      image: "CAM RNG 7123-308E.jpeg",
      isNew: false,
    },
    {
      name: "D Plate",
      sku: "7123-630A",
      cat: "pumps",
      catLabel: "Pumps & Rotors",
      image: "D Plate 7123-630A.jpeg",
      isNew: false,
    },
    {
      name: "Drive Shaft",
      sku: "7139-657C",
      cat: "pumps",
      catLabel: "Pumps & Rotors",
      image: "DRIVE SHAFT 7139-657C.jpeg",
      isNew: true,
    },
    {
      name: "Hub Drive",
      sku: "7123-549",
      cat: "pumps",
      catLabel: "Pumps & Rotors",
      image: "HUB DRIVE 7123-549.jpeg",
      isNew: false,
    },
    {
      name: "Piston",
      sku: "7123-015G",
      cat: "pumps",
      catLabel: "Pumps & Rotors",
      image: "PISTON 7123-015G.jpeg",
      isNew: false,
    },
    {
      name: "Pump Blade",
      sku: "7123-388",
      cat: "pumps",
      catLabel: "Pumps & Rotors",
      image: "PUMP Blade 7123-388.jpeg",
      isNew: false,
    },
    {
      name: "Pump Cover",
      sku: "7123-888A",
      cat: "pumps",
      catLabel: "Pumps & Rotors",
      image: "PUMP COVER 7123-888A.jpg",
      isNew: true,
    },
    {
      name: "Roller & Shoe Kit",
      sku: "7135-72",
      cat: "kits",
      catLabel: "Repair Kits",
      image: "ROLLER & SHOE KIT 7135-72.jpeg",
      isNew: true,
    },
    {
      name: "Rotor Nut",
      sku: "7123-18D",
      cat: "pumps",
      catLabel: "Pumps & Rotors",
      image: "ROTOR NUT 7123-18D.jpeg",
      isNew: false,
    },
    {
      name: "Sleeve & Piston",
      sku: "7135-74A",
      cat: "kits",
      catLabel: "Repair Kits",
      image: "Sleeve & Piston 7135-74A.jpeg",
      isNew: false,
    },
    {
      name: "TP End Plate Kit (2)",
      sku: "7135-180",
      cat: "kits",
      catLabel: "Repair Kits",
      image: "TP END PLATE KIT 7135-180 (2).jpeg",
      isNew: false,
    },
    {
      name: "TP End Plate Kit",
      sku: "7135-180",
      cat: "kits",
      catLabel: "Repair Kits",
      image: "TP END PLATE KIT 7135-180.jpg",
      isNew: true,
    },
    {
      name: "Transfer Pump Liner",
      sku: "7139-223",
      cat: "pumps",
      catLabel: "Pumps & Rotors",
      image: "TRANSFER PUMP LINER 7139-223.jpeg",
      isNew: false,
    },
    {
      name: "Transfer Pump Liner",
      sku: "7139-540",
      cat: "pumps",
      catLabel: "Pumps & Rotors",
      image: "TRANSFER PUMP LINER 7139-540.jpeg",
      isNew: false,
    },
    {
      name: "Transfer Pump Liner",
      sku: "7185-469",
      cat: "pumps",
      catLabel: "Pumps & Rotors",
      image: "TRANSFER PUMP LINER 7185-469.jpg",
      isNew: true,
    },
    {
      name: "Transfer Pump Steel Blade",
      sku: "7135-108",
      cat: "pumps",
      catLabel: "Pumps & Rotors",
      image: "Transfer Pump Steel Blade.jpeg",
      isNew: false,
    },
    {
      name: "Metering Valve",
      sku: "7123-490E",
      cat: "valves",
      catLabel: "Valves",
      image: "metering Valve 7123-490E.jpeg",
      isNew: true,
    },
    {
      name: "Metering Valve",
      sku: "7139-559H",
      cat: "valves",
      catLabel: "Valves",
      image: "metering Valve 7139-559H.jpeg",
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
          <img src="assets/products/${p.image}" alt="${p.name}" style="width: 100%; height: 100%; object-fit: cover;">
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

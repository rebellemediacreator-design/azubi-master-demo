(() => {
  // Mobile menu
  const burger = document.querySelector(".burger");
  const mnav = document.getElementById("mnav");
  if (burger && mnav) {
    burger.addEventListener("click", () => {
      const expanded = burger.getAttribute("aria-expanded") === "true";
      burger.setAttribute("aria-expanded", String(!expanded));
      mnav.hidden = expanded;
    });
    mnav.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        burger.setAttribute("aria-expanded", "false");
        mnav.hidden = true;
      });
    });
  }

  // Lightbox
  const lb = document.getElementById("lightbox");
  const lbImg = lb?.querySelector(".lightbox__img");
  const closeEls = lb?.querySelectorAll("[data-close]");
  const shots = document.querySelectorAll("[data-lightbox]");

  const openLb = (src, alt) => {
    if (!lb || !lbImg) return;
    lbImg.src = src;
    lbImg.alt = alt || "Bild";
    lb.classList.add("is-open");
    lb.setAttribute("aria-hidden", "false");
    document.documentElement.style.overflow = "hidden";
  };

  const closeLb = () => {
    if (!lb || !lbImg) return;
    lb.classList.remove("is-open");
    lb.setAttribute("aria-hidden", "true");
    lbImg.src = "";
    lbImg.alt = "";
    document.documentElement.style.overflow = "";
  };

  shots.forEach(el => {
    el.addEventListener("click", () => {
      const src = el.getAttribute("data-lightbox");
      const img = el.querySelector("img");
      openLb(src, img?.alt || "Bild");
    });
  });

  closeEls?.forEach(el => el.addEventListener("click", closeLb));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLb();
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
})();

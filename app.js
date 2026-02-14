(() => {
  const lb = document.getElementById("lightbox");
  const lbImg = document.getElementById("lbImg");
  const lbClose = document.getElementById("lbClose");

  function open(src, alt){
    lbImg.src = src;
    lbImg.alt = alt || "";
    lb.classList.add("is-open");
    lb.setAttribute("aria-hidden", "false");
  }

  function close(){
    lb.classList.remove("is-open");
    lb.setAttribute("aria-hidden", "true");
    lbImg.src = "";
  }

  document.querySelectorAll("[data-lightbox]").forEach(img => {
    img.addEventListener("click", () => open(img.dataset.lightbox, img.alt));
  });

  lbClose.addEventListener("click", close);
  lb.addEventListener("click", (e) => { if(e.target === lb) close(); });
  window.addEventListener("keydown", (e) => { if(e.key === "Escape") close(); });
})();

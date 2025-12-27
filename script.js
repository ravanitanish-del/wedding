<script>
/* ===== REEL STYLE SCROLL ANIMATION ===== */
const reveals = document.querySelectorAll("section, .shadow-xl");

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => {
  el.classList.add("reveal");
  revealObserver.observe(el);
});

/* ===== Smooth Navbar Scroll ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

/* ===== Lightbox cinematic open ===== */
function openLightbox(src) {
  const overlay = document.getElementById("lightbox-overlay");
  const img = document.getElementById("lightbox-image");
  img.src = src;
  overlay.classList.add("active");
  img.style.animation = "zoomIn .6s ease";
}
</script>

<style>
@keyframes zoomIn {
  from { transform: scale(0.7); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
</style>

function revealOnScroll(selector) {
    const blocks = document.querySelectorAll(selector);

    function checkBlocks() {
        blocks.forEach(block => {
            const top = block.getBoundingClientRect().top;
            if (top < window.innerHeight * 0.92) {
                block.style.animationPlayState = "running";
            }
        });
    }
    window.addEventListener("scroll", checkBlocks);
    window.addEventListener("load", checkBlocks);
}
revealOnScroll('.product-card, .gallery-grid img');

window.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) heroTitle.style.animationPlayState = 'running';
});

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.left = e.offsetX + 'px';
        ripple.style.top = e.offsetY + 'px';
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 550);
    });
});

const heroText = document.querySelector('.hero h1');
if (heroText) {
    const html = heroText.textContent.split("").map(
        (char, i) => `<span style="opacity:0;animation:typed .7s linear forwards ${i*0.032}s">${char}</span>`
    ).join("");
    heroText.innerHTML = html;
}

const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
const closeBtn = document.getElementById('lightbox-close');

document.querySelectorAll('.gallery-grid a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        lightboxImg.src = this.href;
        lightboxImg.alt = this.querySelector('img').alt;
        lightbox.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
    lightboxImg.src = '';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
        lightboxImg.src = '';
    }
});

document.querySelectorAll('.more-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.getElementById('modal-img').src = btn.dataset.img;
    document.getElementById('modal-title').textContent = btn.dataset.title;
    document.getElementById('modal-desc').textContent = btn.dataset.description;
    document.getElementById('modal').classList.add('active');
  });
});
document.getElementById('modal-close').onclick = function() {
  document.getElementById('modal').classList.remove('active');
};
document.getElementById('modal').onclick = function(e) {
  if (e.target === this) this.classList.remove('active');
};

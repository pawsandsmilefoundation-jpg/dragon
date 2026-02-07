// 🔥 ADD / REMOVE PHOTOS HERE (UNLIMITED)
const images = [
  "photos/page1.jpeg",
  "photos/page2.jpeg",
  "photos/page3.jpeg",
  "photos/page4.jpeg",
  "photos/page5.jpeg",
  "photos/page6.jpeg",
  "photos/page7.jpeg"
];

const book = document.getElementById("book");
const cover = document.getElementById("cover");

// create pages automatically
images.forEach((img, i) => {
  if (i % 2 === 0) {
    const page = document.createElement("div");
    page.className = "book-page page-right";

    page.innerHTML = `
      <div class="page-front">
        <img src="${img}">
        <span class="next">›</span>
      </div>
      <div class="page-back">
        <img src="${images[i + 1] || img}">
        <span class="prev">‹</span>
      </div>
    `;

    book.appendChild(page);
  }
});

// open cover animation
setTimeout(() => {
  cover.classList.add("turn");
}, 700);

// click controls
document.addEventListener("click", e => {
  if (e.target.classList.contains("next")) {
    e.target.closest(".page-right").classList.add("turn");
  }
  if (e.target.classList.contains("prev")) {
    e.target.closest(".page-right").classList.remove("turn");
  }
});

// 📱 mobile swipe support
let startX = 0;

document.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

document.addEventListener("touchend", e => {
  const endX = e.changedTouches[0].clientX;

  if (startX - endX > 50) {
    document.querySelector(".next")?.click();
  }

  if (endX - startX > 50) {
    document.querySelector(".prev")?.click();
  }
});

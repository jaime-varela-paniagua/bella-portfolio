// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Selected Work — every video starts open, showing Vimeo's own thumbnail
// (no autoplay). Clicking a title collapses it; the iframe is removed on close
// so playback stops, and re-added on open.
const vidItems = document.querySelectorAll(".index li.vid");

function loadEmbed(li) {
  const inner = li.querySelector(".embed-inner");
  if (inner.querySelector("iframe")) return;
  const id = li.dataset.vimeo;
  const hash = li.dataset.hash ? `&h=${li.dataset.hash}` : "";
  const title = li.querySelector(".t").textContent.trim();
  inner.innerHTML =
    `<div class="embed-frame"><iframe src="https://player.vimeo.com/video/${id}?byline=0&title=0&portrait=0${hash}" ` +
    `allow="autoplay; fullscreen; picture-in-picture" allowfullscreen loading="lazy" title="${title}"></iframe></div>`;
}

function closeItem(li) {
  li.classList.remove("open");
  li.querySelector(".row").setAttribute("aria-expanded", "false");
  li.querySelector(".embed-inner").innerHTML = "";
}

function openItem(li) {
  li.classList.add("open");
  li.querySelector(".row").setAttribute("aria-expanded", "true");
  loadEmbed(li);
}

vidItems.forEach((li) => {
  if (li.classList.contains("open")) loadEmbed(li);
  li.querySelector(".row").addEventListener("click", () => {
    li.classList.contains("open") ? closeItem(li) : openItem(li);
  });
});

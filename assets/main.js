// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Click-to-load Vimeo facades — keeps the page light until a reel is played.
document.querySelectorAll(".reel").forEach((reel) => {
  const btn = reel.querySelector(".reel-play");
  btn.addEventListener("click", () => {
    const id = reel.dataset.vimeo;
    const iframe = document.createElement("iframe");
    iframe.src =
      `https://player.vimeo.com/video/${id}?autoplay=1&portrait=0&byline=0&title=0&autopause=0`;
    iframe.setAttribute("allow", "autoplay; fullscreen; picture-in-picture");
    iframe.setAttribute("allowfullscreen", "");
    iframe.setAttribute("title", btn.getAttribute("aria-label").replace("Play ", ""));
    btn.replaceWith(iframe);
  });
});

// Selected Work — inline accordion. One open at a time; embed unfurls below the
// title; iframe is removed on close so playback stops.
const vidItems = document.querySelectorAll(".index li.vid");

function closeItem(li) {
  li.classList.remove("open");
  li.querySelector(".row").setAttribute("aria-expanded", "false");
  li.querySelector(".embed-inner").innerHTML = "";
}

function openItem(li) {
  vidItems.forEach((other) => { if (other !== li) closeItem(other); });
  li.classList.add("open");
  li.querySelector(".row").setAttribute("aria-expanded", "true");
  const inner = li.querySelector(".embed-inner");
  if (!inner.querySelector("iframe")) {
    const id = li.dataset.vimeo;
    const title = li.querySelector(".t").textContent.trim();
    inner.innerHTML =
      `<div class="embed-frame"><iframe src="https://player.vimeo.com/video/${id}?autoplay=1&byline=0&title=0&portrait=0" ` +
      `allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="${title}"></iframe></div>`;
  }
}

vidItems.forEach((li) => {
  li.querySelector(".row").addEventListener("click", () => {
    li.classList.contains("open") ? closeItem(li) : openItem(li);
  });
});

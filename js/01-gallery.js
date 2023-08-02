import { galleryItems } from "./gallery-items.js";
// Change code below this line

const list = document.querySelector("ul.gallery");
const listItems = [];

galleryItems.forEach((img) => {
  const curItem = document.createElement("li");
  curItem.classList.add("gallery__item");

  const curLink = document.createElement("a");
  curLink.setAttribute("href", img.original);
  curLink.classList.add("gallery__link");

  const curImg = document.createElement("img");
  curImg.setAttribute("src", img.preview);
  curImg.setAttribute("alt", img.description);
  curImg.setAttribute("data-source", img.original);
  curImg.classList.add("gallery__image");

  curLink.appendChild(curImg);
  curItem.appendChild(curLink);
  listItems.push(curItem);
});

list.append(...listItems);

list.addEventListener("click", (event) => {
  event.preventDefault();
  const instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}" width="800" height="600">
  `);

  instance.show();

  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
});

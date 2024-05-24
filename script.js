import explanationBoxes from "./data.js";
const imageContainer = document.querySelector(".image-container");

function createCarTags(box) {
  return `
    <div class="car-tag-container" id="${box.id}">
        <div class="car-tag-container__header">
            <button class="car-tag-container__button" >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path>
                </svg>
            </button>
            <h3 class="car-tag-container__heading">${box.heading}</h3>
        </div>
    </div>
    <div class="pop-up-container pop-up-container--hidden" >
        <h3 class="pop-up-container__heading">${box.heading}</h3>
        <p class="pop-up-container__text">${box.text}</p>
        <button type="button" class="pop-up-container__button">Close</button>
    </div>
`;
}
explanationBoxes.forEach((box) => {
  imageContainer.innerHTML += createCarTags(box);
});

const popUpContainers = document.querySelectorAll(".pop-up-container");

function createCarTagEventListeners() {
  const carTagHeaders = document.querySelectorAll(".car-tag-container__header");
  carTagHeaders.forEach((header) => {
    header.addEventListener("click", (event) => {
      const popUpContainer = event.currentTarget.parentNode.nextElementSibling;
      if (popUpContainer.classList.contains("pop-up-container--hidden")) {
        popUpContainers.forEach((popUpContainer) => {
          popUpContainer.classList.add("pop-up-container--hidden");
        });
        popUpContainer.classList.remove("pop-up-container--hidden");
      } else {
        popUpContainer.classList.add("pop-up-container--hidden");
      }
    });
  });
}
createCarTagEventListeners();

function createPopUpEventListener() {
  const popUpButtons = document.querySelectorAll(".pop-up-container__button");
  popUpButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const popUpContainer = event.currentTarget.parentNode;
      popUpContainer.classList.add("pop-up-container--hidden");
    });
  });
}
createPopUpEventListener();

const image = document.querySelector(".image");
image.addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
    popUpContainers.forEach((popUpContainer) => {
      popUpContainer.classList.add("pop-up-container--hidden");
    });
  }
});

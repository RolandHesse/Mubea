import explanationBoxes from "./data.js";
const imageContainer = document.querySelector(".image-container");

function createCarTags(box) {
    return `
    <div class="car-tag-container" id="${box.id}">
    <div class="car-tag-container__header" id="${box.id}">
        <button class="car-tag-container__button" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path>
            </svg>
        </button>
        <h3 class="car-tag-container__heading">${box.heading}</h3>
    </div>
</div>
<div class="pop-up-container" style="display: none">
<h3 class="pop-up-container__heading">${box.heading}</h3>
<p class="pop-up-container__text">${box.text}</p>
<button type="button" class="pop-up-container__button">Close</button>
</div>
`};


explanationBoxes.forEach((box) => {
imageContainer.innerHTML += createCarTags(box);
});

function createCarTagEventListeners() {
  const carTagButtons = document.querySelectorAll(".car-tag-container__button");
  
    carTagButtons.forEach((button) => {button.addEventListener("click", (event) => {
      const popUpContainer = event.currentTarget.parentNode.parentNode.nextElementSibling;
      popUpContainer.style.display = popUpContainer.style.display === "none" ? "block" : "none";
    }
    )});
}

function createPopUpEventListener() {
    const popUpButtons = document.querySelectorAll(".pop-up-container__button");

    popUpButtons.forEach((button) => {button.addEventListener("click", (event) => {
        const popUpContainer = event.currentTarget.parentNode;
        popUpContainer.style.display = popUpContainer.style.display === "none" ? "block" : "none";
    })});
};

imageContainer.addEventListener("click", (event) => {
    if (event.target !== event.currentTarget) {
        
    }
})

createCarTagEventListeners();
createPopUpEventListener();
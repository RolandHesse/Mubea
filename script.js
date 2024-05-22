import explanationBoxes from "./data.js";
const imageContainer = document.querySelector(".image-container");

function createExplanationBox(box) {
    return `
    <div class="explanation-box" id="${box.id}">
    <div class="explanation-box__header">
        <button class="explanation-box__button" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path>
            </svg>
        </button>
        <h3 class="explanation-box__heading">${box.heading}</h3>
    </div>
    <p class="explanation-box__text" style="display: none">${box.text}</p>
</div>
`};


explanationBoxes.forEach((box) => {
imageContainer.innerHTML += createExplanationBox(box);
});

function createExplanationBoxEventListeners() {
  const explanationBoxButtons = document.querySelectorAll(".explanation-box__button");
  
    explanationBoxButtons.forEach((button) => {button.addEventListener("click", (event) => {
        const explanationText = event.currentTarget.parentNode.parentNode.querySelector(".explanation-box__text");
        explanationText.style.display = explanationText.style.display === "none"  ? "block" : "none";
        const explanationBox = event.currentTarget.parentNode.parentNode;    
        explanationBox.style.zIndex = explanationBox.style.zIndex === "" ? "1000" : "";
    }
    )})
}

createExplanationBoxEventListeners();
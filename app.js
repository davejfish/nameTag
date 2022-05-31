// grab DOM elements

const nameInput = document.getElementById('nameInput');
const inputDisplay = document.getElementById('inputDisplay');

nameInput.addEventListener('input', () => {
    const name = nameInput.value;
    inputDisplay.textContent = name;
});

// set event listeners
    // get info from user input
    // use user input to update state
    // update DOM to reflect the new state

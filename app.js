// grab DOM elements

const nameInput = document.getElementById('nameInput');
const inputDisplay = document.getElementById('inputDisplay');
const pronounInput = document.getElementById('pronounInput');
const makeName = document.getElementById('nameButton');

const nametagColor = document.getElementById('color');


makeName.addEventListener('click', () => {
    const name = nameInput.value;
    const pronoun = pronounInput.value;
    inputDisplay.textContent = `${name} (${pronoun})`;
});




// set event listeners
    // get info from user input
    // use user input to update state
    // update DOM to reflect the new state

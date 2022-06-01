// grab DOM elements

const nameInput = document.getElementById('nameInput');
const inputDisplay = document.getElementById('inputDisplay');
const pronounInput = document.getElementById('pronounInput');
const makeName = document.getElementById('nameButton');

const nametagColor = document.getElementById('color');
const nametag = document.getElementById('nametag');

const image = document.getElementById('image');
const animal = document.getElementById('animal');

makeName.addEventListener('click', () => {
    const name = nameInput.value;
    const pronoun = pronounInput.value;

    if ((name === '') && (pronoun === '')) {
        inputDisplay.textContent = ``;
    } else if ((name !== '') && (pronoun === '')) {
        inputDisplay.textContent = `${name}`;
    } else {
        inputDisplay.textContent = `${name} (${pronoun})`;
    }
 
    nametag.style.backgroundColor = nametagColor.value;
    image.src = animal.value;
});

// nametagColor.addEventListener()

// set event listeners
    // get info from user input
    // use user input to update state
    // update DOM to reflect the new state


//This is the code for the random password generation
const charArray = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', ';', ':', ',', '<', '.', '>', '/', '?'];

const button = document.getElementById('button');
let text = document.getElementById('password');

function passwordGenerator() {
    let password = ''; // Reset the password variable each time the function is called
    for(let i = 0; i < 15; i++) {
        password += charArray[Math.floor(Math.random() * charArray.length)];
    }
    return password;
}

function passwordDisplay() {
    text.value = passwordGenerator(); // Set the generated password to the text input's value
}

button.addEventListener('click', passwordDisplay);


// This is the code for the rotating gear
let angle = 0;

document.getElementById('button').addEventListener('click', function() {
    angle += 720; // Increase the angle by 720 degrees
    document.querySelector('.gear').style.transform = `rotate(${angle}deg)`;
});

const generatePasswordButton = document.getElementById("generate-password-button");
const passwordDisplay = document.getElementById("password-display");

generatePasswordButton.addEventListener("click", () => {
    const password = generatePassword();
    passwordDisplay.innerText = password;
});

function generatePassword() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let password = "";
    for (let i = 0; i < 10; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}
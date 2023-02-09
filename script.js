//Recuperando o valor da variavel do DOM
const inputEl = document.querySelector("#password");

const upperCaseCheckEl = document.querySelector("#uppercase-check");
const symbolCheckEl = document.querySelector("#symbol-check");
const numberCheckEl = document.querySelector("#number-check");
const securityIndicatorBarEl = document.querySelector("#security-indicator-bar");

let passwordlength = 20

function generatePassword() {
    //Variavel para receber uma STRING semente, que servira como base para gerar as senhas.
    let chars = "abcdefghjklmnpqrstuvwxyz";

    const numericChars = "123456789"
    const symbolChars = ".+-[]*~_@#:?!()"
    const upperCaseChars = "ABCDEFGHJKLMNPQRSTUVWXYZ"

    if (upperCaseCheckEl.checked) {

        chars += upperCaseChars
    }
    if (symbolCheckEl.checked) {

        chars += symbolChars
    }
    if (numberCheckEl.checked) {

        chars += numericChars
    }




    //Variavel que vai receber a senha gerada
    let password = "";

    //LOOP Onde ira percorrer a STRING para montar a senha
    for (i = 0; i < passwordlength; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }

    //Imputando o resultado da variavel no input
    inputEl.value = password;
    calculateQualitySecurity()
    calculateFontSize()
}

function calculateQualitySecurity() {
    const percent = Math.round((passwordlength / 60) * 100 * .25
        + (upperCaseCheckEl.checked ? 15 : 0)
        + (symbolCheckEl.checked ? 35 : 0)
        + (numberCheckEl.checked ? 25 : 0)
    )

    securityIndicatorBarEl.style.width = `${percent}%`

    if (percent > 69) {
        securityIndicatorBarEl.classList.remove("critical")
        securityIndicatorBarEl.classList.remove("warning")
        securityIndicatorBarEl.classList.add("safe")
    }else if (percent > 50) {
        securityIndicatorBarEl.classList.remove("critical")
        securityIndicatorBarEl.classList.add("warning")
        securityIndicatorBarEl.classList.remove("safe")
    }else{
        securityIndicatorBarEl.classList.add("critical")
        securityIndicatorBarEl.classList.remove("warning")
        securityIndicatorBarEl.classList.remove("safe")
    }

    if (percent >= 100) {
        securityIndicatorBarEl.classList.add("completed")
    }else{
        securityIndicatorBarEl.classList.remove("completed")
    }
}

function calculateFontSize() {
    if (passwordlength > 45) {
        inputEl.classList.remove("font-sm")
        inputEl.classList.remove("font-xs")
        inputEl.classList.add("font-xxs")
    }else if (passwordlength > 32) {
        inputEl.classList.remove("font-sm")
        inputEl.classList.add("font-xs")
        inputEl.classList.remove("font-xxs")
    }else if (passwordlength > 22) {
        inputEl.classList.add("font-sm")
        inputEl.classList.remove("font-xs")
        inputEl.classList.remove("font-xxs")
    }else {
        inputEl.classList.remove("font-sm")
        inputEl.classList.remove("font-xs")
        inputEl.classList.remove("font-xxs")
    }
}

//Função para copiar a senha
function copy() {
    navigator.clipboard.writeText(inputEl.value);
}

const passwordlengthEL = document.querySelector("#password-length");
passwordlengthEL.addEventListener("input", function () {
    passwordlength = passwordlengthEL.value
    document.querySelector("#passoword-lenght-text").innerText = passwordlength
    generatePassword()
})

upperCaseCheckEl.addEventListener("click", generatePassword)
symbolCheckEl.addEventListener("click", generatePassword)
numberCheckEl.addEventListener("click", generatePassword)

document.querySelector("#renew").addEventListener("click",generatePassword)

document.querySelector("#copy-1").addEventListener("click", copy)
document.querySelector("#copy-2").addEventListener("click", copy)

generatePassword()

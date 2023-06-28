var r = document.querySelector(":root")
var btn = document.querySelector(".btn")
var btnB = document.querySelector(".btnB")

function switchToOrange() {
    r.style.setProperty("--scheme-color", "#FB770D")
    r.style.setProperty("--footer", "#9c4c03")
    r.style.setProperty("--blue", "#9c4c03")
    btn.style.display = "none"
    btnB.style.display = "block"
}

function switchToBlue() {
    r.style.setProperty("--scheme-color", "#1A2744")
    r.style.setProperty("--footer", "#455781")
    r.style.setProperty("--blue", "#45ADFF")
    btn.style.display = "block"
    btnB.style.display = "none"
}

btn.addEventListener("click", switchToOrange)
btnB.addEventListener("click", switchToBlue)
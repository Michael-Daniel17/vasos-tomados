if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        this.navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err))
    })
}

const fechaActual = new Date();
const beber = document.getElementById("beber");
const numeroVasos = document.getElementById("numero-vasos");

let vasos = parseInt(localStorage.getItem("vasos")) || 0;

numeroVasos.textContent = vasos


beber.addEventListener('click', () => {
    vasos++
    numeroVasos.textContent = vasos;
    localStorage.setItem("vasos",vasos);
})

function compararFechas () {
    let hoy = new Date().toDateString();
    let fechaGuardada = localStorage.getItem("fechaHoy");

    if (fechaGuardada !== hoy) {
        localStorage.setItem("vasos", 0);
        localStorage.setItem("fechaHoy", hoy)
    }
}

compararFechas();
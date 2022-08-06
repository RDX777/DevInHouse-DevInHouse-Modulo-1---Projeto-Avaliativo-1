function fechaModal() {
    let modal = document.getElementById("modal")
    modal.innerHTML = ""
    modal.style = "visibility: hidden"
}

function abreModal() {
    let modal = document.getElementById("modal")
    modal.style = "visibility: visible"
}

export { fechaModal , abreModal }
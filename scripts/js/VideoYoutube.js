import { fechaModal , abreModal } from "./Modal.js"

function converteLink(link) {
    let linkEmbed = link.replace("https://www.youtube.com/watch?v=", "https://www.youtube.com/embed/")
    return linkEmbed

}

function videoYoutube(item) {

    let modal = document.getElementById("modal")

    let divModalBody = document.createElement("div")
    divModalBody.classList = "modal-body-view-video" 

    let divModalHeader = document.createElement("div")
    divModalHeader.classList = "modal-header"

    let divModalTitulo = document.createElement("div")
    divModalTitulo.classList = "modal-titulo"

    let divModalOpcoes = document.createElement("div")

    let envelope = document.createElement("i")
    envelope.classList = "bi bi-envelope-paper-heart"
    divModalOpcoes.appendChild(envelope)

    let mensagemTitulo = document.createElement("label")
    mensagemTitulo.innerHTML = "Video Youtube"
    mensagemTitulo.classList = "mensagem-sistema-titulo"
    divModalOpcoes.appendChild(mensagemTitulo)

    let divModalBotaoFechar = document.createElement("div")
    divModalBotaoFechar.classList = "modal-botao-fechar"

    let botaoFecharModal = document.createElement("i")
    botaoFecharModal.classList = "bi bi-x-circle"
    botaoFecharModal.onmousedown = () => {
        fechaModal()
    }
    divModalBotaoFechar.appendChild(botaoFecharModal)

    divModalTitulo.appendChild(divModalOpcoes)
    divModalTitulo.appendChild(divModalBotaoFechar)

    divModalHeader.appendChild(divModalTitulo)

    divModalBody.appendChild(divModalHeader)

    let link = item.videoYoutube
    
    let video = document.createElement("iframe")
    video.setAttribute("width", "97%")
    video.setAttribute("height", "90%")
    video.setAttribute("src", converteLink(link))
    video.setAttribute("frameborder", "0")
    video.setAttribute("title", "YouTube video player")
    video.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture")
    video.setAttribute("allowfullscreen", "")

    divModalBody.appendChild(video)

    modal.appendChild(divModalBody)

    abreModal()
}

export { videoYoutube }
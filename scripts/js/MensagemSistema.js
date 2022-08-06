import {BancoDados} from "./classes/BancoDadosClass.js"
import { fechaModal , abreModal } from "./Modal.js"

function mensagemSistema(mensagem, id = null){
    let modal = document.getElementById("modal")

    let divModalBody = document.createElement("div")
    divModalBody.classList = "modal-body-view" 

    let divModalHeader = document.createElement("div")
    divModalHeader.classList = "modal-header"

    let divModalTitulo = document.createElement("div")
    divModalTitulo.classList = "modal-titulo"

    let divModalOpcoes = document.createElement("div")

    let envelope = document.createElement("i")
    envelope.classList = "bi bi-envelope-paper-heart"
    divModalOpcoes.appendChild(envelope)

    let mensagemTitulo = document.createElement("label")
    mensagemTitulo.innerHTML = mensagem.titulo
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

    let paragrafo = document.createElement("p")
    paragrafo.innerHTML = mensagem.corpo

    divModalBody.appendChild(paragrafo)
    

    if (id) {
        let divModalbotoes = document.createElement("div")
        divModalbotoes.classList = "div-item div-modal-botoes"

        let botaoSim = document.createElement("input")
        botaoSim.type = "button"
        botaoSim.value = "Sim"
        botaoSim.classList = "form-botao cor-fundo-verde"
        botaoSim.onmousedown = () => {
            var bd = new BancoDados()
            bd.deletaUmItem(id)
            var elemento = document.getElementById(id)
            elemento.parentNode.removeChild(elemento)
            fechaModal()
        }
        divModalbotoes.appendChild(botaoSim)
    
        let botaoNao = document.createElement("input")
        botaoNao.type = "button"
        botaoNao.value = "Não"
        botaoNao.classList = "form-botao cor-fundo-amarelo"
        botaoNao.onmousedown = () => {
            fechaModal()
        }
        divModalbotoes.appendChild(botaoNao)

        divModalBody.appendChild(divModalbotoes)

    }
    modal.appendChild(divModalBody)
    abreModal()
}

function mensagemDeleta(id){

    let body = document.getElementById("modal-body")
    let titulo = document.getElementById("mensagem-sistema-titulo")
    let corpo = document.getElementById("mensagem-sistema-corpo")
    titulo.innerText = "Deletar?"
    corpo.innerText = "Deseja deletar o item?"

    let cardI = document.createElement("div")
    cardI.classList = "card-i"

    let botaoSim = document.createElement("input")
    botaoSim.type = "button"
    botaoSim.value = "Sim"
    botaoSim.classList = "botao-confirma-sim"
    botaoSim.onmousedown = () => {
        var bd = new BancoDados()
        console.log(id)
        bd.deletaUmItem(id)
        fechaModal()
    }
    cardI.appendChild(botaoSim)

    let botaoNao = document.createElement("input")
    botaoNao.type = "button"
    botaoNao.value = "Não"
    botaoNao.classList = "botao-confirma-nao"
    botaoNao.onmousedown = () => {
        fechaModal()
    }
    cardI.appendChild(botaoNao)

    body.appendChild(cardI)

    abreModal()
}

export {mensagemSistema, mensagemDeleta}
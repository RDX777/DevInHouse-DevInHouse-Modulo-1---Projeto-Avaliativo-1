import { mensagemSistema } from "./MensagemSistema.js"
import {BancoDados} from "./classes/BancoDadosClass.js"

function limpaCard() {
    let divCard = document.getElementById("lista-cards")
    divCard.innerHTML = ""
}

function montaCards() {
    let bd = new BancoDados()
    let todosCards = bd.coletaTodosDados()
    todosCards.map(card => {
        criaCard(card)
    })
}

function atualizaCards() {
    limpaCard()
    montaCards()
}

function localizaCardPorTitulo(titulo) {
    let bd = new BancoDados()
    const id = bd.localizaTitulo(titulo)
    if (id != -1) {
        limpaCard()
        criaCard(bd.coletaUmDado(id))

    } else {
        const mensagem = {
            titulo : "Não Encontrado",
            corpo : "Verifique se digitou o titulo correto, a busca deve ser correspondente ao cadastrado!"
        }
        mensagemSistema(mensagem)
    }

}

function preencheForm(elementos) {

    let id = document.getElementById("form-id")
    id.value = elementos.id

    let titulo = document.getElementById("form-titulo")
    titulo.value = elementos.titulo

    let linguagemSkill = document.getElementById("form-linguagem-skill")
    linguagemSkill.value = elementos.linguagemSkill

    let categoria = document.getElementById("form-categoria")
    categoria.value = elementos.categoria

    let descricao = document.getElementById("form-descricao")
    descricao.value = elementos.descricao

    let videoYoutube = document.getElementById("form-video-youtube")
    videoYoutube.value = elementos.videoYoutube
    
}

function salvaCardEditado(elementoForm) {
    let bd = new BancoDados()
    bd.editaUmItem(elementoForm)
    atualizaCards()
}

function criaCard(elementoForm) {
    if(!elementoForm.id) {
        let bd = new BancoDados()
        elementoForm.id = bd.insereUmItem(elementoForm)
    }

    let divCard = document.getElementById("lista-cards")

    let card = document.createElement("div")
    card.setAttribute("class", "card")
    card.setAttribute("id", elementoForm.id)

    let titulo = document.createElement("h1")
    titulo.setAttribute("class", "div-painel-card titulo-card jcontent-center")
    titulo.innerHTML = elementoForm.titulo
    card.appendChild(titulo)

    let linguagemSkill = document.createElement("label")
    linguagemSkill.setAttribute("class", "div-painel-card-resultado jcontent-left")
    linguagemSkill.innerHTML = `<strong>Linguagem/skill:</strong>&nbsp${elementoForm.linguagemSkill}`
    card.appendChild(linguagemSkill)

    let categoria = document.createElement("label")
    categoria.setAttribute("class", "div-painel-card-resultado jcontent-left")
    categoria.innerHTML = `<strong>Categoria:</strong>&nbsp${elementoForm.categoria}`
    card.appendChild(categoria)

    let cardP = document.createElement("div")
    cardP.setAttribute("class", "card-p")
    cardP.innerHTML = elementoForm.descricao
    card.appendChild(cardP)

    let cardI = document.createElement("div")
    cardI.setAttribute("class", "card-i")
    
    let linkDeleta = document.createElement("a")
    linkDeleta.onmousedown = () => {
        const mensagem = {
            titulo : "Deletar",
            corpo : "Deseja deletar o item"
        }
        mensagemSistema(mensagem, elementoForm.id)
    }

    let deleta = document.createElement("i")
    deleta.setAttribute("class", "bi bi-trash3")
    linkDeleta.appendChild(deleta)

    cardI.appendChild(linkDeleta)

    let linkEdit = document.createElement("a")
    linkEdit.setAttribute("class", elementoForm.id)

    let edita = document.createElement("i")
    edita.setAttribute("class", "bi bi-pencil-square")
    linkEdit.appendChild(edita)
    linkEdit.onmousedown = () => {
        let bd = new BancoDados()
        bd.localizaIndice(elementoForm.id)
        const index = bd.localizaIndice(elementoForm.id)
        preencheForm(bd.coletaUmDado(index))
    }

    cardI.appendChild(linkEdit)

    if(elementoForm.videoYoutube) {
        let linkVerVideo = document.createElement("a")
        linkVerVideo.setAttribute("class", elementoForm.id)

        let verVideo = document.createElement("i")
        verVideo.setAttribute("class", "bi bi-camera-reels")
        linkVerVideo.appendChild(verVideo)

        cardI.appendChild(linkVerVideo)
    }

    card.appendChild(cardI)

    divCard.appendChild(card)

}


export { criaCard, montaCards, salvaCardEditado, atualizaCards, localizaCardPorTitulo }
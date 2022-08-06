import {salvaNovoCard, montaCards, atualizaCards, localizaCardPorTitulo} from "./CriadorCard.js"
import { estatisticas } from "./Estatisticas.js"

window.onload = () => {

    montaCards()

    estatisticas()

    let botaoSalvar = document.getElementById("form-botao-salvar")
    botaoSalvar.addEventListener("click", (e) => {
        salvaNovoCard(e)
    })

    let botaoLocaliza = document.getElementById("div-buscar-localiza")
    botaoLocaliza.addEventListener("click", () => {
        let campoLocaliza = document.getElementById("div-buscar-campo-localiza").value
        localizaCardPorTitulo(campoLocaliza)
    })

    let campoLocaliza = document.getElementById("div-buscar-campo-localiza")
    campoLocaliza.addEventListener("keydown", (e) => {
        if (e.key === 'Enter') {
            botaoLocaliza.click()
          }
    })

    let botaolimpaBusca = document.getElementById("div-buscar-cancela")
    botaolimpaBusca.addEventListener("click", () => {
        atualizaCards()
        campoLocaliza.value = ""
    })

}
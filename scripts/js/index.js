import {mensagemSistema} from "./MensagemSistema.js"
import validador from "./ValidadorCampos.js"
import {criaCard, montaCards, salvaCardEditado, atualizaCards, localizaCardPorTitulo} from "./CriadorCard.js"
import { estatisticas } from "./Estatisticas.js"

import {BancoDados} from "./classes/BancoDadosClass.js"

window.onload = () => {

    var bd = new BancoDados()
    console.log(bd.localizaTitulo("titulo"))

    montaCards()

    estatisticas()
    
    const botaoSalvar = document.getElementById("form-botao-salvar")
    botaoSalvar.addEventListener("click", (e) => {
        e.preventDefault()
        
        let form = document.getElementById("form")

        var elementos = {
            id : form["form-id"]["value"],
            titulo : form["form-titulo"]["value"],
            linguagemSkill : form["form-linguagem-skill"]["value"],
            categoria : form["form-categoria"]["value"],
            descricao : form["form-descricao"]["value"],
            videoYoutube : form["form-video-youtube"]["value"],
        }

        if(validador(elementos)) {
            if (elementos.id != "") {
                salvaCardEditado(elementos)

                let id = document.getElementById("form-id")
                id.value = ""

                var mensagem = {
                    titulo : "Editado",
                    corpo : "Dica editada e salva na base do conhecimento."
                }
                mensagemSistema(mensagem)
            } else {
                criaCard(elementos)

                var mensagem = {
                    titulo : "Sucesso",
                    corpo : "Dica cadastrada na base do conhecimento."
                }
                mensagemSistema(mensagem)
            }

            const limpar = document.getElementById("form-botao-limpa")
            limpar.click()
        }
    })

    let botaoCancelaBusca = document.getElementById("div-buscar-cancela")
    botaoCancelaBusca.addEventListener("click", () => {
        atualizaCards()
    })

    let botaoCancelalocaliza = document.getElementById("div-buscar-localiza")
    botaoCancelalocaliza.addEventListener("click", () => {
        let campoLocaliza = document.getElementById("div-buscar-campo-localiza").value
        localizaCardPorTitulo(campoLocaliza)
    })

}
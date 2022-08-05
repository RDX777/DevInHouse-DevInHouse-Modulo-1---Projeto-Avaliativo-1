import { BancoDados } from "./classes/BancoDadosClass.js"

function contaTotal() {
    let bd = new BancoDados()
    return Object.keys(bd.coletaTodosDados()).length
}

function contaFrontend() {
    let bd = new BancoDados()
    const itens = bd.coletaTodosDados()
    let quantidade = itens.filter(item => item.categoria === "FrontEnd")
    return quantidade.length
}

function contaBackend() {
    let bd = new BancoDados()
    const itens = bd.coletaTodosDados()
    let quantidade = itens.filter(item => item.categoria === "BackEnd")
    return quantidade.length
}

function contaFullStack() {
    let bd = new BancoDados()
    const itens = bd.coletaTodosDados()
    let quantidade = itens.filter(item => item.categoria === "FullStack")
    return quantidade.length
}

function contaComportamentalSoft() {
    let bd = new BancoDados()
    const itens = bd.coletaTodosDados()
    let quantidade = itens.filter(item => item.categoria === "Comportamental/Soft")
    return quantidade.length
}

function estatisticas() {
    setInterval(() => {
        let total = document.getElementById("card-total")
        total.innerHTML = contaTotal()
    }, 3000)

    setInterval(() => {
        let resultadoFrontEnd = document.getElementById("frontend-resultado")
        resultadoFrontEnd.innerHTML = contaFrontend()
    }, 3000)

    setInterval(() => {
        let resultadoBackEnd = document.getElementById("backend-resultado")
        resultadoBackEnd.innerHTML = contaBackend()
    }, 3000)

    setInterval(() => {
        let resultadoFullstack = document.getElementById("fullstack-resultado")
        resultadoFullstack.innerHTML = contaFullStack()
    }, 3000)

    setInterval(() => {
        let resultadoSoftskill = document.getElementById("softskill-resultado")
        resultadoSoftskill.innerHTML = contaComportamentalSoft()
    }, 3000)
}

export { estatisticas }
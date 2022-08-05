function validador(elementoForm) {

    var validaTitulo = true
    const erroTitulo = document.getElementById("erro-titulo")
    const titulo = elementoForm.titulo
    if(!titulo || (titulo.length < 8 || titulo.length > 64)) {
        erroTitulo.style = "display: flex;"
        validaTitulo = false
    } else {
        erroTitulo.style = "display: none;"
        validaTitulo = true
    }

    var validaLinguagemSkill = true
    const erroLinguagemSkill = document.getElementById("erro-linguagem-skill")
    const linguagemSkill = elementoForm.linguagemSkill
    if(!linguagemSkill || (linguagemSkill.length < 4 || linguagemSkill.length > 16)) {
        erroLinguagemSkill.style = "display: flex;"
        validaLinguagemSkill = false
    } else {
        erroLinguagemSkill.style = "display: none;"
        validaLinguagemSkill = true
    }

    var validaCategoria = true
    const erroCategoria = document.getElementById("erro-categoria")
    const categoria = elementoForm.categoria
    if(!categoria) {
        erroCategoria.style = "display: flex;"
        validaCategoria = false
    } else {
        erroCategoria.style = "display: none;"
        validaCategoria = true
    }

    var validaDescricao
    const erroDescricao = document.getElementById("erro-descricao")
    const descricao = elementoForm.descricao
    if(!descricao || (descricao.length < 32 || descricao.length > 512)) {
        erroDescricao.style = "display: flex;"
        validaDescricao = false
    } else {
        erroDescricao.style = "display: none;"
        validaDescricao = true
    }

    var validaVideo = true
    const erroVideo = document.getElementById("erro-video")
    const video = elementoForm.videoYoutube
    if(!verificaURL(video) && video) {
        erroVideo.style = "display: flex;"
        validaVideo = false
    } else {
        erroVideo.style = "display: none;"
        validaVideo = true
    }

    return validaTitulo && validaLinguagemSkill && validaCategoria && validaDescricao && validaVideo

}

function verificaURL(string) {
    return string.match(/(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/g);
  };

export default validador
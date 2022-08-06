class BancoDados {

    constructor(){
        this.bd = JSON.parse(localStorage.getItem("database")) ? JSON.parse(localStorage.getItem("database")) : []
    }

    coletaTodosDados(){
        return this.bd
    }

    coletaUmDado(index) {
        return this.bd[index]
    }

    salvalocalStore(itemBd){
        localStorage.setItem("database", JSON.stringify(itemBd))
    }

    atualizaBd(){
        this.bd = JSON.parse(localStorage.getItem("database"))
    }

    insereUmItem(item){
        item.id = Math.floor(Math.random() * 10000)
        this.bd.push(item)
        this.salvalocalStore(this.bd)
        this.atualizaBd()
        return item.id
    }

    editaUmItem(item){
        var index = this.localizaIndice(item.id)
        this.bd[index] = item
        this.salvalocalStore(this.bd)
        this.atualizaBd()
    }

    deletaUmItem(id){
        var index = this.localizaIndice(id)
        
        if (index != -1){
            this.bd.splice(index, 1)
            this.salvalocalStore(this.bd)
            this.atualizaBd()
        }
    }

    localizaIndice(id){
        return this.bd.findIndex(item => {
            return item.id == id
        })
    }

    localizaTitulo(titulo){
        let itemIndex = []

        itemIndex = this.bd.filter((item) => {
            let tituloBancoDados = item.titulo.toLowerCase()
            let tituloBusca = titulo.toLowerCase()

            if (tituloBancoDados.includes(tituloBusca)) {
                return item
            }
        })
        return itemIndex
    }
}

export {BancoDados}


    function teste1(leilao1){
        console.log('TESTE LEILÃO -----------')
        console.log(leilao1.apresentarProduto())
        console.log(leilao1.apresentarLances())
        console.log(leilao1.retornaData())
}

    class Leilao{  
        constructor(produto, lances){
            this.produto = produto
            this.lances = lances
            this.data = new Date()
        }
        apresentarProduto(){
            return "Produto: " + this.produto
        }
        apresentarLances(){
            let mensagem =""
            let contador = 1
            this.lances.forEach(lance => {
                mensagem += `lance ${contador} : ` + lance + "     "
                contador++
            });
            return mensagem
        }
        retornaData(){
            let date = this.data
            let day = date.getDate()
            let month = date.getMonth() + 1
            let year = date.getFullYear()
            let dataFormatada = `${day} / ${month} / ${year}`
            return dataFormatada
        }
    }

    var leilao1 = new Leilao("Televisor", [120,150,170,450,500])

    teste1(leilao1)
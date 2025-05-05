var carro = {
    "marca" : "Toyota",
    "modelo" : "Corolla",
    "placa" : "H89SR78",
    "ano" : "2002",
    "cor" : "Prata",
    "portas" : 4,
    "tanque" : 5,
    "quilometragem" : 0,
    "ligado" : "desligado",
    "ligar" : function(){
        this.ligado = "ligado"
        
        console.log("Carro ligado!")
        // return "Carro ligado!"
    },
    "desligar" : function(){
        this.ligado = "desligado"

        console.log("Carro ligado!")
        // return "Carro ligado!"
    },
    "abastecer" : function(quantidade){
        carro.tanque += quantidade;
        console.log(`Carro abastecido ${quantidade} litros!`)
    },
    "andar" : function(distancia){
        if(this.ligado == "ligado"){
            this.quilometragem += distancia
            for(var i = 0; i < distancia; i++){
                console.log("Veiculo em movimento!")       
            }
            console.log(`O carro andou ${distancia} quilometros!`)
        }
        else{
            console.log("Ligue o veículo!")
        }

    },
    "ver_nivel" : function(){
        if(this.tanque > 0){
            console.log(`Tanque possui ${this.tanque} litros de combustível`)
        }
        else{
            console.log("Tanque de combusível vazio!")
        }
    },
    "getDados" : function(){
        console.log(`Informações do veículo:\n
            Marca: ${this.marca}
            Modelo: ${this.modelo}
            Placa: ${this.placa}
            Ano de fabricação: ${this.ano}
            Cor: ${this.cor}
            Quantidade de portas: ${this.portas}
            Quilometragem: ${this.quilometragem} KM
            Combustivel no tanque: ${this.tanque}
            Status: ${this.ligado}
            `)
    }
}

// var dados = carro.getDados()

carro.getDados();

carro.abastecer(5);
carro.ver_nivel();

carro.andar(10);

carro.getDados();

carro.ligar();

carro.getDados();
carro.andar(10)

carro. desligar();

carro.getDados();
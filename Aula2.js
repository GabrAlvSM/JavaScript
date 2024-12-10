// var x = 20
// var y = 10

// var res = x > 50 ? "Verdade" : "<h1 class='Danger'>Falso</h1>"

// ---------------------------------------------------------------

// var lista = [33,444,55,67,68,90,111]

// console.log(lista.length)

// if(lista.length < 10){
//     alert("Lista de compra muito pequena, viagem ao mercado desnecessária!")
// }
// else{
//     alert("Partiu compras!")
// }

// for(var i = 0; i < lista.length; i++){
//     console.log(lista[i]);
// }

// ---------------------------------------------------------------

// console.log(pessoa.nome, pessoa.idade)

// var breja = pessoa.hobbies.tomarUma("chop!")

// console.log(breja)

// console.log(pessoa.fone)

// pessoa.fone = "97 9 9999-9999"
// console.log(pessoa.fone)

// var pes2 = {}

// pes2.nome = "Thiago"
// pes2.idade = "35"
// pes2.email = "thiago@live.com"

// console.log(pes2.nome, pes2.idade, "Professor", pes2.email)

// ---------------------------------------------------------------

var pessoa = {
    "nome" : "Gabriel",
    "sobrenome" : "Santos",
    "idade" : 23,
    "email" : "gabriel.santos@senac.com",
    "fone" : null,
    // "hobbies" : function tomarUma(v){return "Aquele ", v}
    "addFone" : function(v){
        this.fone = v
        console.log("Telefone adicionado com sucesso!", this.fone)
    },
    "getDados" : function(){
        return `${this.nome} ${this.sobrenome} tem ${this.idade} contato: ${this.email} telefone: ${this.fone}`
    }
}

var resultado = pessoa.getDados()

console.log(resultado)

pessoa.addFone("67 9 9999-9999")

console.log(pessoa.getDados())

pes3 = {
    "nome" : "Thiago",
    "hobbie" : function(value){
        // console.log("Tomar uma "+v);
        // return 0

        return this.nome + " curte " + value
    }
}

var resultado = pes3.hobbie(" Heineken ")

console.log(resultado)
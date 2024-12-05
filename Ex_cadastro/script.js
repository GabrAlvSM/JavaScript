// alert("Bem Vindo!")
// ----------------------------------------------

// let x = 10;
// let y = 10;

// var res = x + y;

// alert(res)
// ----------------------------------------------

// var x = 10;
// for(var i = 0; i < x; i++){
    // alert("Olá!")
    // console.log("Ola!");
    // document.write(`<br> Olá: ${i}`);
// }
// ----------------------------------------------

// var n1 = parseFloat(prompt("Digite N1: "));
// var n2 = parseFloat(prompt("Digite N2: "));
// var n3 = parseInt(prompt("Digite N3: "));

// var res = (n1 + n2) * n3;

// alert(`Resultado = ${res}`)
// ----------------------------------------------

// function hello(){
//     var nome = document.getElementById("nome").value;
    
//     alert(`Hello ${nome}`);
// }
// ----------------------------------------------

const formulario = document.getElementById("formulario")

console.log(formulario)


// function func1(){
//     var input_nome = document.getElementById("nome").value;
    
//     document.getElementById("texto").innerText(input_nome)


    // console.log(input_nome);
    
    // var texto_span = document.getElementById("texto").value;
    // console.log(texto_span)
    // document.write(texto_span)

// }

function entra_mouse(){
    let minhadiv = document.getElementById("cad");

    console.log(minhadiv);
    minhadiv.style.backgroundColor = 'rgb(10, 190, 10)';
}

function sai_mouse(){
    let minhadiv = document.getElementById("cad");

    console.log(minhadiv);
    minhadiv.style.backgroundColor = '';

}

function func3(){
    let minhaspan = document.getElementById("texto");
    let input_nome = document.getElementById("nome").value;

    minhaspan.innerText = input_nome;
}

function recebe(x){
    alert(x);
}

function valida_cad(event){
    event.preventDefault(); //segura o forma, nao submete o form
    const form = document.getElementById("formulario");
    
    let login = form.email.value;
    let senha = form.senha.value;
    let confirma_senha = form.confirma_senha.value;

    // alert(login);
    // alert(senha);
    // alert(confirma_senha);

    if (login.length < 6){
        alert("Digite um email válido!!");
        return false;
    }

    if(senha.length < 8){
        alert("Senha fraca! A senha deve conter pelo menos 8 caracteres!!")
        return false;
    }

    if(senha!=confirma_senha){
        alert("As senhas não batem!")
        return false;
    }

    else{
        alert("Cadastado com sucesso!")
        return true;
    }
}
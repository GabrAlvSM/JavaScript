const nome_pkm = document.getElementById('name');
const id = document.getElementById('id');
const tipos = document.getElementById('types');
const sprite = document.getElementById('sprite');


document.getElementById('pesquisar').addEventListener('click', (e) =>{ 
    let nome_pesquisa = document.getElementById("nome_busca").value;

    e.preventDefault();

    fetch('https://pokeapi.co/api/v2/pokemon/'+nome_pesquisa+'/')
    .then(
        function(resposta){
            return resposta.json();
        }
    )
    .then(
        function(json){
            console.log(json);

            nome_pkm.innerText = "Nome: "+ json.name;
            id.innerText = "id: "+ json.id;

            tipos.innerText = '';
            json.types.forEach(function(item){
                tipos.innerText += ` ${item.type.name}`;
            })

            // types.innerText = "Tipo(s): " + arrayTipos;
            sprite.src = json.sprites.front_default;
        }
    )
    // .catch(
    //     console.log("Nao deu!"),
    //     location.reload()
    // )

})


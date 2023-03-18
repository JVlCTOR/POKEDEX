(() =>{
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(res => res.json())
    .then(resposta => {
        resposta.results.forEach((pokemon) => {
            pokemonLista.innerHTML += `<option value="${pokemon.url}">${pokemon.name}</option>`
        });
    })
})()

function buscaPokemon()
{
    fetch(pokemonLista.value)
    .then(res => res.json())
    .then(pokemon => {
        let pokemonFoto = document.querySelector("#pokemon-foto img")
    pokemonFoto.setAttribute("src", pokemon.sprites.front_default)
      
    })
}
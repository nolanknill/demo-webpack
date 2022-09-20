import axios from "axios";

axios.get("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => {
        const pokemon = response.data;
        console.log(`${pokemon.species.name}'s moves include: ${pokemon.moves[0].move.name}`);
    });
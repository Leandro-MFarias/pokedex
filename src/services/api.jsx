import axios from "axios";

export async function fetchData(pageParam = 0) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=12&offset=${pageParam}`);
    const data = await response.data.results;
    const url = data.map(urls => urls.url);
    const promise = await Promise.all(url.map(pokemon => axios.get(pokemon)));
    const pokemon = promise.map(item => ({
        id: item.data.id,
        name: item.data.name,
        type: item.data.types.map(items => items.type.name).join(', '),
        sprite: item.data.sprites.other['official-artwork'].front_default,
    }))
    if (pokemon.length < 12) return undefined
    return pokemon
}

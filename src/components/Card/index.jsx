

export function Card() {
    return (
        <div>
            {
                data && data.map(pokemon => (
                    <div key={pokemon.id}>
                        <img src={pokemon.sprite} alt="" />
                        <h1>{pokemon.id} {pokemon.name}</h1>
                        <p>{pokemon.type}</p>
                        <p>{pokemon.ability}</p>
                        <p>{pokemon.move}</p>
                    </div>
                ))
            }
        </div>
    )
}
export class PokemonService {
    private static get baseUrl() {
        return process.env.POKEAPI_URL || 'empty';
    }

    static async getRandomPokemon() {
        // ID random entre 1 y 151 (Primera gen)
        const randomId = Math.floor(Math.random() * 151) + 1;

        const response = await fetch(`${this.baseUrl}/${randomId}`);
        if (!response.ok) {
            throw new Error('Error fetching pokemon from PokeAPI');
        }
        const data = await response.json();

        return {
            id: data.id,
            name: data.name,
            image: data.sprites.front_default,
            types: data.types.map((t: any) => t.type.name)
        };
    }
}

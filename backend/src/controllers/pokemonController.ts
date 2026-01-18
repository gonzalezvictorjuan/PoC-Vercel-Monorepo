import { Request, Response } from 'express';
import { PokemonService } from '../services/pokemonService';

export class PokemonController {
    static async getRandom(req: Request, res: Response) {
        try {
            const pokemon = await PokemonService.getRandomPokemon();
            res.json(pokemon);
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

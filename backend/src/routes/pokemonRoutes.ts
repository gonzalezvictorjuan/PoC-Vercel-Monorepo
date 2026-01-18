import { Router } from 'express';
import { PokemonController } from '../controllers/pokemonController';

const router = Router();

router.get('/random', PokemonController.getRandom);

export default router;

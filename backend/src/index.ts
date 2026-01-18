import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import pokemonRoutes from './routes/pokemonRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Importante para que el frontend pueda conectarse
app.use(express.json());

app.use('/api/pokemon', pokemonRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} 🚀`);
});

export default app;

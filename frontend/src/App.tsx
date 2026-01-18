import { useState, useEffect } from 'react';
import TypeBadge from './components/TypeBadge';
import './App.css';

interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: string[];
}

function App() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchPokemon = async () => {
    setLoading(true);
    try {
      // Usamos la variable de entorno
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(`${apiUrl}/random`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setPokemon(data);
    } catch (error) {
      console.error("Error fetching pokemon", error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div className="card">
      <h1>PoC Full Stack Pokemon</h1>
      <div className="card-content">
        {loading ? (
          <p>Cargando...</p>
        ) : pokemon ? (
          <>
            <h2>{pokemon.name} (#{pokemon.id})</h2>
            <img src={pokemon.image} alt={pokemon.name} width="200" />
            <div className="types" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '4px' }}>
              {pokemon.types.map(t => <TypeBadge key={t} type={t} />)}
            </div>
          </>
        ) : (
          <p>No se pudo cargar el pokemon</p>
        )}
      </div>
      <button onClick={fetchPokemon} disabled={loading}>
        ¡Nuevo Pokemon!
      </button>
    </div>
  );
}

export default App;

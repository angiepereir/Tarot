import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCardById } from '../services/TarotServices';

export default function CardDetail() {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getCardById(id).then((res) => setCard(res.data));
  }, [id]);

  if (!card) return <p className="text-center mt-10 text-gray-500">Cargando...</p>;

  return (
    <div className="px-4 pt-4 max-w-6xl mx-auto h-[calc(100vh-4rem)] overflow-hidden flex flex-col gap-4">
      
      {/* Botón volver */}
      <button
        onClick={() => navigate('/')}
        className="flex items-center text-sm text-purple-700 hover:text-purple-900 transition mb-2"
      >
        <span className="text-lg mr-1">←</span> Volver al inicio
      </button>

      <h2 className="text-xl font-bold text-purple-800">{card.arcaneName}</h2>

      <div className="flex flex-col md:flex-row gap-4 flex-grow">
        <div className="flex-1 flex gap-4">
          <img
            src={card.arcaneImage.imageSrc}
            alt={card.arcaneName}
            className="w-1/2 rounded shadow object-cover aspect-[3/5]"
          />
          <p className="text-sm text-gray-700 overflow-auto">{card.arcaneDescription}</p>
        </div>

        <div className="flex-1 flex gap-4 border-l pl-4">
          <img
            src={card.goddessImage.imageSrc}
            alt={card.goddessName}
            className="w-1/2 rounded shadow object-cover aspect-square"
          />
          <div className="text-sm text-gray-700 overflow-auto">
            <h3 className="text-md font-semibold text-indigo-700 mb-1">{card.goddessName}</h3>
            <p>{card.goddessDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

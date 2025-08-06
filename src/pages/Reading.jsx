import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllCards } from '../services/TarotServices';

export default function Reading() {
  const [cards, setCards] = useState([]);
  const [selected, setSelected] = useState([]);
  const readingRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    getAllCards().then((res) => setCards(res.data));
  }, []);

  useEffect(() => {
    if (selected.length === 3 && readingRef.current) {
      readingRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selected]);

  const handleSelect = (card) => {
    if (selected.length >= 3 || selected.includes(card)) return;
    setSelected([...selected, card]);
  };

  const resetReading = () => setSelected([]);

  const positions = ['Pasado', 'Presente', 'Futuro'];

  return (
    <div className="px-6 pt-4">
      {/* Botón volver */}
      <button
        onClick={() => navigate('/')}
        className="flex items-center text-sm text-purple-700 hover:text-purple-900 transition mb-4"
      >
        <span className="text-lg mr-1">←</span> Volver al inicio
      </button>

      <h2 className="text-2xl font-semibold mb-6 text-purple-800">Selecciona 3 cartas</h2>

      {selected.length === 3 && (
        <button
          onClick={resetReading}
          className="mb-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Reiniciar lectura
        </button>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleSelect(card)}
            className={`cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 overflow-hidden ${
              selected.includes(card) ? 'opacity-40 pointer-events-none' : ''
            }`}
          >
            <img
              src="/dorso-card.png"
              alt="Carta"
              className="w-full aspect-[3/5] object-cover"
            />
          </div>
        ))}
      </div>

      {/* SECCIÓN DE LECTURA */}
      {selected.length > 0 && (
        <div ref={readingRef} className="border-t pt-8">
          <h3 className="text-xl font-bold text-purple-800 mb-6">Tu lectura</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {selected.map((card, index) => (
              <div
                key={card.id}
                className="bg-white rounded-xl p-4 shadow-md text-center"
              >
                <h4 className="text-lg font-semibold text-purple-700 mb-2">
                  {positions[index]}
                </h4>
                <img
                  src={card.arcaneImage.imageSrc}
                  alt={card.arcaneName}
                  className="mx-auto mb-4 w-full aspect-[3/5] object-cover rounded"
                />
                <p className="font-semibold text-gray-700 mb-2">{card.arcaneName}</p>
                <p className="text-sm text-gray-600 mb-4">{card.arcaneDescription}</p>
                <h5 className="font-semibold text-indigo-700">{card.goddessName}</h5>
                <p className="text-sm text-gray-600">{card.goddessDescription}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

import { useEffect, useState } from 'react';
import { getAllCards } from '../services/TarotServices';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';

export default function Home() {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllCards().then((res) => setCards(res.data));
  }, []);

  return (
    <div className="px-6 pt-4">
      <h2 className="text-2xl font-semibold mb-6 text-purple-800">Elige una carta</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {cards.map((card) => (
          <Card
            key={card.id}
            onClick={() => navigate(`/card/${card.id}`)}
          />
        ))}
      </div>
    </div>
  );
}

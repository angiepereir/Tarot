import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCardById } from '../services/TarotServices';

export default function CardDetail() {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let mounted = true;
    getCardById(id).then((res) => {
      if (mounted) setCard(res.data);
    }).catch(() => {
      if (mounted) setCard(null);
    });
    return () => { mounted = false; };
  }, [id]);

  if (!card) return (
    <div className="min-h-screen bg-black relative flex items-center justify-center">
      {/* Fondo espacial */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-black"
        style={{
          backgroundImage: `
            radial-gradient(circle at 15% 40%, rgba(88, 28, 135, 0.1) 0%, transparent 60%),
            radial-gradient(circle at 85% 25%, rgba(67, 56, 202, 0.08) 0%, transparent 55%),
            radial-gradient(circle at 45% 85%, rgba(139, 69, 196, 0.06) 0%, transparent 50%),
            radial-gradient(circle at 5% 90%, rgba(79, 70, 229, 0.08) 0%, transparent 45%)
          `
        }}
      />

      {/* Estrellas de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white/60 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-purple-400/30 border-t-purple-400 rounded-full animate-spin mb-4"></div>
        <p className="text-center text-gray-300 text-lg">Cargando carta...</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      {/* Fondo espacial */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-black"
        style={{
          backgroundImage: `
            radial-gradient(circle at 15% 40%, rgba(88, 28, 135, 0.1) 0%, transparent 60%),
            radial-gradient(circle at 85% 25%, rgba(67, 56, 202, 0.08) 0%, transparent 55%),
            radial-gradient(circle at 45% 85%, rgba(139, 69, 196, 0.06) 0%, transparent 50%),
            radial-gradient(circle at 5% 90%, rgba(79, 70, 229, 0.08) 0%, transparent 45%)
          `
        }}
      />

      {/* Estrellas de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white/60 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Contenido scrollable */}
      <div className="relative z-10 px-4 pt-4 max-w-6xl mx-auto min-h-[calc(100vh-4rem)] overflow-y-auto pb-8">
        {/* Botón volver */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-sm text-purple-300 hover:text-purple-200 transition mb-3 px-4 py-2 bg-purple-600/20 backdrop-blur-sm rounded-lg border border-purple-400/30 hover:bg-purple-600/30 w-fit"
        >
          <span className="text-lg mr-1">←</span> Volver al inicio
        </button>

        {/* Título */}
        <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 mb-4 tracking-wide">
          ✨ {card.arcaneName}
        </h2>

        {/* Layout responsive en grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sección del Arcano */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <img
                src={card.arcaneImage.imageSrc}
                alt={card.arcaneName}
                className="w-full h-auto rounded-xl shadow-2xl object-contain md:object-cover aspect-[3/5] border-2 border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 hover:shadow-purple-500/30"
              />
            </div>
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg md:text-xl font-semibold text-purple-300 mb-3 flex items-center">
                🔮 Mensaje del Arcano
              </h3>
              <p className="text-gray-300 leading-relaxed overflow-auto md:max-h-64 custom-scrollbar">
                {card.arcaneDescription}
              </p>
            </div>
          </div>

          {/* Sección de la Diosa */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <img
                src={card.goddessImage.imageSrc}
                alt={card.goddessName}
                className="w-full h-auto rounded-xl shadow-2xl object-contain md:object-cover aspect-square border-2 border-pink-400/30 hover:border-pink-400/60 transition-all duration-300 hover:shadow-pink-500/30"
              />
            </div>
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg md:text-xl font-semibold text-pink-300 mb-3 flex items-center">
                🌙 {card.goddessName}
              </h3>
              <p className="text-gray-300 leading-relaxed overflow-auto md:max-h-64 custom-scrollbar">
                {card.goddessDescription}
              </p>
            </div>
          </div>
        </div>

        {/* Cita inferior */}
        <div className="text-center mt-6">
          <p className="text-purple-300/60 text-sm italic">
            "Cada carta es un espejo del alma, cada diosa una guía hacia tu destino"
          </p>
        </div>
      </div>

      {/* Estilos del scrollbar */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(51,65,85,.3); border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(168,85,247,.5); border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(168,85,247,.7); }
      `}</style>
    </div>
  );
}

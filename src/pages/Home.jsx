import { useEffect, useState } from 'react';
import { getAllCards } from '../services/TarotServices';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';

export default function Home() {
  const [cards, setCards] = useState([]);
  const [view, setView] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getAllCards().then((res) => setCards(res.data));
  }, []);

  // Si el usuario no ha elegido qué ver
  if (!view) {
    return (
      <div className="min-h-screen relative overflow-x-hidden">
        {/* Fondo espacial más oscuro con nebulosas sutiles */}
        <div 
          className="absolute inset-0 bg-black z-0 overflow-x-hidden"
          style={{
            backgroundImage: `
              radial-gradient(circle at 15% 40%, rgba(88, 28, 135, 0.15) 0%, transparent 60%),
              radial-gradient(circle at 85% 25%, rgba(67, 56, 202, 0.12) 0%, transparent 55%),
              radial-gradient(circle at 45% 85%, rgba(139, 69, 196, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 5% 90%, rgba(79, 70, 229, 0.1) 0%, transparent 45%)
            `
          }}
        />
        
        {/* Estrellas animadas */}
        <div className="absolute inset-0 z-10">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Contenido principal */}
        <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-x-hidden">
          {/* Título */}
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 mb-4 tracking-wide">
            🔮 Tarot STEM
          </h1>
          
          <p className="text-gray-300 mb-12 text-lg max-w-md">
            Conecta con la sabiduría del universo y descubre tu destino
          </p>

          {/* Bola de cristal 3D */}
          <div className="relative mb-16">
            {/* Sombra base */}
            <div className="absolute top-72 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-black/40 rounded-full blur-lg" />
            
            {/* Glow exterior */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/20 via-blue-400/15 to-indigo-400/20 blur-2xl opacity-60 animate-pulse scale-125" />
            
            {/* Bola principal 3D */}
            <div className="relative w-64 h-64 md:w-72 md:h-72 mx-auto">
              {/* Esfera base con múltiples capas */}
              <div 
                className="w-full h-full rounded-full relative overflow-hidden"
                style={{
                  background: `
                    radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 20%, transparent 40%),
                    radial-gradient(circle at 70% 70%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
                    linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(99, 102, 241, 0.05) 50%, rgba(139, 92, 246, 0.1) 100%)
                  `,
                  boxShadow: `
                    inset -20px -20px 60px rgba(0, 0, 0, 0.4),
                    inset 20px 20px 60px rgba(255, 255, 255, 0.1),
                    0 0 80px rgba(139, 92, 246, 0.3),
                    0 0 40px rgba(99, 102, 241, 0.2)
                  `,
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                {/* Reflejos principales */}
                <div 
                  className="absolute rounded-full"
                  style={{
                    top: '15%',
                    left: '25%',
                    width: '35%',
                    height: '35%',
                    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.2) 40%, transparent 70%)',
                    filter: 'blur(1px)'
                  }}
                />
                
                {/* Reflejo secundario */}
                <div 
                  className="absolute rounded-full"
                  style={{
                    top: '60%',
                    right: '20%',
                    width: '20%',
                    height: '20%',
                    background: 'radial-gradient(circle, rgba(147, 197, 253, 0.4) 0%, transparent 60%)',
                    filter: 'blur(2px)'
                  }}
                />
                
                {/* Cáusticas internas */}
                <div 
                  className="absolute inset-0 rounded-full opacity-30"
                  style={{
                    background: `
                      radial-gradient(ellipse 60% 40% at 40% 40%, rgba(168, 85, 247, 0.3) 0%, transparent 50%),
                      radial-gradient(ellipse 40% 60% at 60% 60%, rgba(99, 102, 241, 0.2) 0%, transparent 50%)
                    `,
                    animation: 'float 4s ease-in-out infinite alternate'
                  }}
                />
                
                {/* Distorsión de refracción */}
                <div 
                  className="absolute inset-4 rounded-full"
                  style={{
                    background: 'radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.1) 0%, transparent 30%)',
                    filter: 'blur(0.5px)'
                  }}
                />
              </div>
              
              {/* Highlight principal superior */}
              <div 
                className="absolute rounded-full"
                style={{
                  top: '8%',
                  left: '30%',
                  width: '25%',
                  height: '15%',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.3) 100%)',
                  filter: 'blur(2px)',
                  borderRadius: '50%'
                }}
              />
              
              {/* Micro reflejos*/}
              <div className="absolute top-12 left-20 w-3 h-3 bg-white/60 rounded-full blur-sm" />
              <div className="absolute bottom-16 right-24 w-2 h-2 bg-blue-200/40 rounded-full blur-sm" />
              <div className="absolute top-24 right-16 w-1 h-1 bg-purple-200/50 rounded-full" />
            </div>

            {/* Partículas mágicas orbitando */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1.5 h-1.5 bg-purple-300/60 rounded-full"
                style={{
                  left: `${50 + 45 * Math.cos((i * 45 * Math.PI) / 180)}%`,
                  top: `${50 + 45 * Math.sin((i * 45 * Math.PI) / 180)}%`,
                  animation: `orbit 8s linear infinite`,
                  animationDelay: `${i * -1}s`,
                  filter: 'blur(0.5px)'
                }}
              />
            ))}
          </div>

          <style jsx>{`
            @keyframes float {
              0%, 100% { transform: rotate(0deg) scale(1); }
              50% { transform: rotate(5deg) scale(1.05); }
            }
            @keyframes orbit {
              0% { transform: rotate(0deg) translateX(120px) rotate(0deg); }
              100% { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
            }
          `}</style>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button
              onClick={() => setView('cards')}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-medium text-lg border border-purple-400/50 backdrop-blur-sm"
            >
              <span className="relative z-10">✨ Ver todas las cartas</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </button>
            
            <button
              onClick={() => navigate('/reading')}
              className="group relative px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-medium text-lg border border-pink-400/50 backdrop-blur-sm"
            >
              <span className="relative z-10">🌙 Hacer una lectura</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </button>
          </div>

          {/* Texto inferior */}
          <p className="text-purple-300/60 mt-8 text-sm">
            "El futuro pertenece a quienes creen en la belleza de sus sueños"
          </p>
        </div>
      </div>
    );
  }

  // ver todas las cartas 
  return (
    <div className="min-h-screen relative bg-black">
      {/* Fondo espacial oscuro */}
      <div 
        className="absolute inset-0 bg-black z-0"
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
      <div className="absolute inset-0 z-10">
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

      <div className="relative z-20 px-6 pt-8 pb-16">
        {/* Botón de regreso */}
        <button
          onClick={() => setView(null)}
          className="mb-6 px-4 py-2 bg-purple-600/50 text-white rounded-lg hover:bg-purple-600/70 transition-colors backdrop-blur-sm border border-purple-400/30"
        >
          ← Volver al inicio
        </button>

        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4 tracking-wide">
            🌟 Explora el Tarot STEM
          </h2>
          <p className="text-gray-300 text-lg">
            Haz clic en una carta para descubrir su mensaje y la diosa que te guía
          </p>
        </div>

        {/* Grid de cartas con fondo oscuro */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-7xl mx-auto pb-12">
          {cards.map((card) => (
            <div
              key={card.id}
              className="transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 bg-slate-900/50 backdrop-blur-sm rounded-lg p-2 border border-slate-700/50"
            >
              <Card
                onClick={() => navigate(`/card/${card.id}`)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
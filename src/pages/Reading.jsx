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

  const positions = [
    { name: 'Pasado', icon: '🕰️', color: 'from-amber-400 to-orange-400' },
    { name: 'Presente', icon: '✨', color: 'from-purple-400 to-pink-400' },
    { name: 'Futuro', icon: '🌟', color: 'from-blue-400 to-indigo-400' }
  ];    

  return (     
    <div className="min-h-screen bg-black relative overflow-hidden">
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
      <div className="absolute inset-0">
        {[...Array(60)].map((_, i) => (
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

      <div className="relative z-10 px-6 pt-4">
        {/* Botón volver con estilo espacial */}       
        <button         
          onClick={() => navigate('/')}         
          className="flex items-center text-sm text-purple-300 hover:text-purple-200 transition mb-4 px-4 py-2 bg-purple-600/20 backdrop-blur-sm rounded-lg border border-purple-400/30 hover:bg-purple-600/30 w-fit"       
        >         
          <span className="text-lg mr-1">←</span> Volver al inicio       
        </button>        

        {/* Título principal */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 mb-2 tracking-wide">
            🔮 Lectura de Tarot
          </h2>
          <p className="text-gray-300 text-lg">
            {selected.length < 3 
              ? `Selecciona ${3 - selected.length} carta${3 - selected.length !== 1 ? 's' : ''} más para tu lectura`
              : 'Tu lectura está completa'
            }
          </p>
          
          {/* Indicador de progreso */}
          <div className="flex justify-center mt-4 gap-2">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  selected.length >= num 
                    ? 'bg-gradient-to-r from-purple-400 to-pink-400 shadow-lg shadow-purple-500/50' 
                    : 'bg-slate-700 border border-slate-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Botón reiniciar */}
        {selected.length === 3 && (         
          <div className="text-center mb-6">
            <button           
              onClick={resetReading}           
              className="px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-medium border border-red-400/50 backdrop-blur-sm"         
            >           
              🔄 Reiniciar lectura         
            </button>
          </div>       
        )}        

        {/* Grid de cartas */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10 max-w-7xl mx-auto">         
          {cards.map((card) => (           
            <div             
              key={card.id}             
              onClick={() => handleSelect(card)}             
              className={`cursor-pointer bg-slate-900/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden border-2 group ${               
                selected.includes(card) 
                  ? 'opacity-30 pointer-events-none border-purple-500/50 scale-95' 
                  : 'border-slate-700/50 hover:border-purple-400/60 hover:shadow-purple-500/30'             
              }`}           
            >             
              <div className="relative">
                <img               
                  src="/dorso-card.png"               
                  alt="Carta"               
                  className="w-full aspect-[3/5] object-cover"             
                />
                
                {/* Efecto de brillo al hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 via-transparent to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Partículas mágicas en hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-purple-300 rounded-full animate-pulse"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${10 + i * 20}%`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    />
                  ))}
                </div>
              </div>           
            </div>         
          ))}       
        </div>        

        {/* SECCIÓN DE LECTURA */}       
        {selected.length > 0 && (         
          <div ref={readingRef} className="border-t border-purple-500/30 pt-8 pb-12">           
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
                ✨ Tu Lectura del Tarot ✨
              </h3>
              <p className="text-gray-300 text-lg">
                Las cartas han hablado. Descubre lo que el universo tiene para ti.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">             
              {selected.map((card, index) => (               
                <div                 
                  key={card.id}                 
                  className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-slate-700/50 text-center transform hover:scale-[1.02] transition-all duration-300 hover:shadow-purple-500/20"               
                >                 
                  {/* Header de la posición */}
                  <div className="mb-6">
                    <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${positions[index].color} text-white font-semibold text-lg shadow-lg mb-2`}>
                      <span className="mr-2 text-xl">{positions[index].icon}</span>
                      {positions[index].name}
                    </div>
                  </div>

                  {/* Imagen de la carta */}
                  <div className="relative mb-6 group">
                    <img                   
                      src={card.arcaneImage.imageSrc}                   
                      alt={card.arcaneName}                   
                      className="mx-auto w-full max-w-48 aspect-[3/5] object-cover rounded-xl border-2 border-purple-400/30 shadow-lg group-hover:border-purple-400/60 transition-all duration-300"                 
                    />
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-400/10 via-transparent to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Contenido de la carta */}
                  <div className="space-y-4">
                    <h4 className="text-2xl font-bold text-purple-300 mb-3">
                      {card.arcaneName}
                    </h4>
                    
                    <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-600/50">
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {card.arcaneDescription}
                      </p>
                    </div>
                    
                    {/* Separador decorativo */}
                    <div className="flex items-center justify-center my-4">
                      <div className="h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent w-full max-w-32"></div>
                      <span className="mx-3 text-purple-400">🌙</span>
                      <div className="h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent w-full max-w-32"></div>
                    </div>
                    
                    <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-600/50">
                      <h5 className="font-bold text-pink-300 mb-2 text-lg">
                        ✨ {card.goddessName}
                      </h5>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {card.goddessDescription}
                      </p>
                    </div>
                  </div>               
                </div>             
              ))}           
            </div>

            {/* Mensaje final si la lectura está completa */}
            {selected.length === 3 && (
              <div className="text-center mt-12 p-6 bg-slate-900/40 backdrop-blur-sm rounded-2xl border border-purple-500/30 max-w-2xl mx-auto">
                <h4 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-3">
                  🔮 Reflexión Final
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Tu lectura revela el hilo dorado que conecta tu pasado, presente y futuro. 
                  Cada carta es una llave que abre las puertas de tu comprensión interior. 
                  Medita sobre estos mensajes y permite que la sabiduría ancestral ilumine tu camino.
                </p>
                <div className="mt-4">
                  <span className="text-purple-300/60 text-sm italic">
                    "En el silencio de las estrellas, encuentra las respuestas que buscas"
                  </span>
                </div>
              </div>
            )}
          </div>       
        )}     
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>   
  ); 
}
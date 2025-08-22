import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 z-50">
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md border-b border-purple-500/30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(88, 28, 135, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 80% 30%, rgba(67, 56, 202, 0.15) 0%, transparent 45%),
            radial-gradient(circle at 60% 80%, rgba(139, 69, 196, 0.1) 0%, transparent 40%)
          `
        }}
      />

      {/* Estrellas pequeñas de fondo */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
          🔮 Tarot STEM
        </h1>
        
        <div className="flex gap-6 text-base">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-purple-300 transition-all duration-300 hover:scale-105 ${
                isActive 
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold' 
                  : 'text-gray-200'
              }`
            }
          >
            ✨ Inicio
          </NavLink>
          <NavLink
            to="/reading"
            className={({ isActive }) =>
              `hover:text-purple-300 transition-all duration-300 hover:scale-105 ${
                isActive 
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 font-semibold' 
                  : 'text-gray-200'
              }`
            }
          >
            🌙 Lectura
          </NavLink>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
    </nav>
  );
}
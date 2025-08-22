export default function Footer() {
  return (
    <footer className="relative text-white text-center py-6 mt-10">
      <div 
        className="absolute inset-0 bg-black/95 backdrop-blur-sm border-t border-purple-500/30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 30% 20%, rgba(88, 28, 135, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 70% 60%, rgba(67, 56, 202, 0.15) 0%, transparent 45%),
            radial-gradient(circle at 20% 80%, rgba(139, 69, 196, 0.1) 0%, transparent 40%)
          `
        }}
      />

      {/* Estrellas pequeñas de fondo */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 text-base mb-2 font-medium">
          ✦ Que la sabiduría ancestral te guíe ✦
        </p>
        <p className="text-gray-300 text-sm">
          © {new Date().getFullYear()} Tarot STEM — Hecho con{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
            💜
          </span>{' '}
          por{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">
            Angie Pereira
          </span>
        </p>
      </div>

      {/* Partículas mágicas flotantes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/20 rounded-full"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
              animation: `float 6s ease-in-out infinite alternate`,
              animationDelay: `${i * 2}s`
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.2; }
          50% { transform: translateY(-10px) scale(1.2); opacity: 0.4; }
        }
      `}</style>
    </footer>
  );
}
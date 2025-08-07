import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-purple-700 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-wide">🔮 Tarot</h1>
        <div className="flex gap-6 text-base">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-yellow-300 transition-colors ${
                isActive ? 'underline font-semibold' : ''
              }`
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/reading"
            className={({ isActive }) =>
              `hover:text-yellow-300 transition-colors ${
                isActive ? 'underline font-semibold' : ''
              }`
            }
          >
            Lectura
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

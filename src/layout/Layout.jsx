import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar fijo */}
      <Navbar />

      {/* Contenido principal con espacio arriba para el navbar */}
      <main className="flex-grow pt-20 px-4 sm:px-6 max-w-7xl mx-auto w-full">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;

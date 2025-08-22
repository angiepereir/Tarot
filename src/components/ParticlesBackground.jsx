import React, { useCallback } from 'react';
import { loadSlim } from 'tsparticles-slim';
import Particles from 'react-tsparticles';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        // zIndex 0 para que quede sobre el fondo negro pero debajo del contenido
        zIndex: 0,
        pointerEvents: 'none'
      }}
      options={{
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        detectRetina: true,
        // Formal: sin interacción (además pointer-events none)
        interactivity: {
          events: {
            onClick: { enable: false, mode: 'push' },
            onHover: { enable: false, mode: 'repulse' },
            resize: true
          }
        },
        particles: {
          // Colores acordes a tu UI: purple/pink/indigo (tonos medios/suaves)
          color: {
            value: ['#a78bfa', '#c084fc', '#f472b6', '#818cf8'] // violet-400, purple-300, pink-400, indigo-400
          },
          links: {
            enable: false
          },
          move: {
            enable: true,
            direction: 'none',
            random: false,
            speed: 0.35,            // movimiento lento
            straight: false,
            outModes: { default: 'out' }
          },
          number: {
            density: { enable: true, area: 1200 },
            value: 45                // menos densidad
          },
          opacity: {
            value: { min: 0.15, max: 0.35 },
            animation: {
              enable: true,
              speed: 0.4,
              minimumValue: 0.1,
              sync: false
            }
          },
          shape: {
            type: 'circle'          // sin triángulos/estrellas (más formal)
          },
          size: {
            value: { min: 0.6, max: 2.2 },
            animation: {
              enable: true,
              speed: 0.8,
              minimumValue: 0.5,
              sync: false
            }
          },
          // Twinkle muy sutil para sensación “estelar” sin distracción
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.01,
              opacity: 0.8
            }
          },
          // Rotación desactivada para look más sobrio
          rotate: {
            value: 0,
            direction: 'clockwise',
            animation: { enable: false, speed: 0 }
          }
        }
      }}
    />
  );
};

export default ParticlesBackground;

import React, { useCallback } from 'react';
import { loadSlim } from 'tsparticles-slim';
import Particles from 'react-tsparticles';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    // Carga solo las características necesarias para mejor rendimiento
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // console.log('Partículas cargadas:', container);
  }, []);

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
        zIndex: -1,
        pointerEvents: 'none'
      }}
      options={{
        background: {
          color: {
            value: 'transparent'
          }
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push'
            },
            onHover: {
              enable: true,
              mode: 'repulse'
            },
            resize: true
          },
          modes: {
            push: {
              quantity: 4
            },
            repulse: {
              distance: 200,
              duration: 0.4
            }
          }
        },
        particles: {
          color: {
            value: ['#9333ea', '#a855f7', '#c084fc', '#e879f9', '#fbbf24', '#f59e0b']
          },
          links: {
            color: '#a855f7',
            distance: 150,
            enable: false,
            opacity: 0.3,
            width: 1
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce'
            },
            random: true,
            speed: 1.5,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 80
          },
          opacity: {
            value: { min: 0.2, max: 0.8 },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
              sync: false
            }
          },
          shape: {
            type: ['circle', 'triangle', 'star'],
            options: {
              star: {
                sides: 5
              },
              triangle: {
                sides: 3
              }
            }
          },
          size: {
            value: { min: 1, max: 5 },
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.5,
              sync: false
            }
          },
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.05,
              opacity: 1
            }
          },
          rotate: {
            value: { min: 0, max: 360 },
            direction: 'random',
            animation: {
              enable: true,
              speed: 2,
              sync: false
            }
          }
        },
        detectRetina: true
      }}
    />
  );
};

export default ParticlesBackground;
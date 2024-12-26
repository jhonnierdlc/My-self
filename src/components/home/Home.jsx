import React from "react";
import ButtonContact from "../contact/ButtonContact";

function Home() {
  return (
    <main className="bg-gray-100 text-gray-800">
      {/* Sección de Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Bienvenido</h1>
          <p className="text-lg mb-6">
            Soy un Desarrollador Frontend apasionado y graduado como Ingeniero
            de Sistemas de la Universidad Popular del Cesar.
          </p>
          <a
            href="#about-me"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Conoce Más Sobre Mí
          </a>
        </div>
      </section>

      {/* Sección Sobre Mí */}
      <section id="about-me" className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8 flex justify-center">
              <img
                src="/img/foto-personal.jpeg"
                alt="Foto personal"
                className="rounded-lg shadow-md mx-auto  md:mx-0 h-[350px]"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Sobre Mí</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Soy un desarrollador frontend apasionado por crear experiencias
                web modernas, eficientes y estéticas. Me gradué como Ingeniero
                de Sistemas en la Universidad Popular del Cesar y actualmente me
                especializo en tecnologías como React, Next.js y Tailwind CSS.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Mi misión es transformar ideas en soluciones digitales de alto
                impacto, ayudando a empresas y proyectos a alcanzar sus metas
                tecnológicas con interfaces intuitivas y atractivas.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Siempre busco aprender y mejorar, con un enfoque en la
                innovación y la colaboración para garantizar resultados que
                superen las expectativas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Habilidades */}
      <section id="skills" className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Mis Habilidades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 shadow-lg rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4">Desarrollo Frontend</h3>
              <p className="text-gray-600">
                Experto en React, Tailwind y diseño responsivo.
              </p>
            </div>
            <div className="p-6 shadow-lg rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4">Optimización Web</h3>
              <p className="text-gray-600">
                Optimización de sitios web para velocidad y escalabilidad.
              </p>
            </div>
            <div className="p-6 shadow-lg rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4">
                Resolución de Problemas
              </h3>
              <p className="text-gray-600">
                Soluciones creativas y eficientes para retos complejos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-700 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4">Trabajemos Juntos</h2>
          <p className="text-lg mb-6">
            ¿Interesado en colaborar o contratarme para tu próximo proyecto?
            Hagámoslo realidad.
          </p>
          <ButtonContact />
        </div>
      </section>
    </main>
  );
}

export default Home;

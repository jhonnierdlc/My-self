import React from "react";
import ButtonContact from "../contact/ButtonContact";

function AboutMe() {
  return (
    <section className="bg-white text-gray-900 py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <img
              src="/img/foto-personal.jpeg"
              alt="Perfil"
              className="rounded-full w-48 h-48 object-cover mx-auto shadow-lg"
            />
          </div>

          <div className="lg:w-2/3 space-y-6">
            <p className="text-lg leading-relaxed">
              Soy un desarrollador frontend con una gran pasión por crear
              experiencias web modernas, eficientes y estéticas. Me gradué como
              Ingeniero de Sistemas en la Universidad Popular del Cesar y,
              actualmente, me especializo en tecnologías como React, Next.js y
              Tailwind CSS.
            </p>
            <p className="text-lg leading-relaxed">
              Mi misión es transformar ideas en soluciones digitales de alto
              impacto, ayudando a empresas y proyectos a alcanzar sus metas
              tecnológicas mediante interfaces intuitivas y atractivas. Siempre
              estoy buscando mejorar, con un enfoque en la innovación y la
              colaboración para asegurar que los resultados superen las
              expectativas.
            </p>
            <p className="text-lg leading-relaxed">
              Además de mi experiencia técnica, tengo un fuerte enfoque en la
              resolución de problemas complejos, trabajo en equipo y gestión de
              proyectos. Me apasiona crear interfaces que no solo sean
              funcionales, sino que ofrezcan una experiencia excepcional al
              usuario.
            </p>

            <div className="mt-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Tecnologías y Herramientas
              </h3>
              <ul className="grid grid-cols-2 gap-4 text-lg text-gray-600">
                <li>React</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>JavaScript (ES6+)</li>
                <li>Node.js</li>
                <li>Git & GitHub</li>
                <li>Figma</li>
                <li>API REST</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            ¿Te gustaría trabajar juntos?
          </h3>
          <p className="text-lg text-gray-600 mb-4">
            Si tienes una idea en mente o deseas llevar tu proyecto al siguiente
            nivel, no dudes en contactarme. Estoy siempre dispuesto a explorar
            nuevas oportunidades.
          </p>
          <ButtonContact />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

import React from "react";

function Contact() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-12">
          Contáctame
        </h2>

        <div className="max-w-lg mx-auto bg-white shadow-xl rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Información de Contacto
          </h3>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <span className="text-blue-600 text-xl font-semibold">📞</span>
              <span className="text-lg text-gray-700">+57 3045467006</span>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-blue-600 text-xl font-semibold">📧</span>
              <span className="text-lg text-gray-700">
                jhonierg20@gmail.com
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-blue-600 text-xl font-semibold">🔗</span>
              <a
                href="https://www.linkedin.com/in/jhonnierdlc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-blue-600 hover:underline"
              >
                Linkedin
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-blue-600 text-xl font-semibold">📍</span>
              <span className="text-lg text-gray-700">
                Valledupar, Cesar, Colombia
              </span>
            </div>
          </div>

          <div className="mt-8 text-center">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              ¡Hablemos!
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

import React, { useState } from "react";

function FAQ() {
  const faqs = [
    {
      question: "¿Cómo puedo contactarte para un proyecto?",
      answer:
        "Puedes contactarme a través de la sección de contacto en esta página o enviándome un correo electrónico a jhonierg20@gmail.com.",
    },
    {
      question: "¿Cuáles son tus tecnologías principales?",
      answer:
        "Trabajo principalmente con React, Next.js y Tailwind CSS para el desarrollo frontend. También tengo experiencia con herramientas de backend y APIs.",
    },
    {
      question: "¿Ofreces soporte post-proyecto?",
      answer:
        "Sí, todos mis proyectos incluyen un período de soporte post-lanzamiento para resolver cualquier problema y garantizar que todo funcione correctamente.",
    },
    {
      question: "¿Puedes trabajar en proyectos internacionales?",
      answer:
        "Por supuesto, estoy abierto a colaborar con clientes de cualquier parte del mundo. Podemos coordinar reuniones virtuales para mantenernos en contacto.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Preguntas Frecuentes
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left text-gray-800 font-medium text-lg"
              >
                <span>{faq.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className={`w-6 h-6 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="mt-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;

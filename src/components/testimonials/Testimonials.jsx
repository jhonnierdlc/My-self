import React from "react";

function Testimonials() {
  const testimonials = [
    {
      name: "Juan Pérez",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-501272-1222271.jpg&fm=jpg",
      text: "El servicio fue excepcional. Gracias a su equipo, logramos superar nuestras expectativas.",
      rating: 5,
      position: "CEO, Empresa X",
    },
    {
      name: "María García",
      image:
        "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?cs=srgb&dl=pexels-hannah-nelson-390257-1065084.jpg&fm=jpg",
      text: "Excelente atención y resultados increíbles. Definitivamente lo recomiendo.",
      rating: 4,
      position: "Fundadora, Negocio Y",
    },
    {
      name: "Carlos Ramírez",
      image:
        "https://img.freepik.com/foto-gratis/worldface-hombre-espanol-fondo-blanco_53876-139733.jpg",
      text: "Muy profesional, eficiente y atento a los detalles. ¡Volvería a trabajar con ellos sin dudarlo!",
      rating: 5,
      position: "Gerente, Compañía Z",
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-xl ${
          index < rating ? "text-yellow-500" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Lo Que Dicen Nuestros Clientes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="h-24 w-24 rounded-full object-cover shadow-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                {testimonial.position}
              </p>
              <div className="flex justify-center mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

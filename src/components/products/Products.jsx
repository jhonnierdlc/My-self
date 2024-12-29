import React from "react";

function Products() {
  return (
    <section id="products" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Proyectos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/img/marketplace-comida.png"
              alt="Marketplace de comida"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Marketplace de Comida</h3>
              <p className="text-gray-600 mb-4">
                Plataforma diseñada para restaurantes, ofreciendo un menú
                digital interactivo, carrito de compras y módulo de pagos en
                línea. Ideal para mejorar la experiencia del cliente.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex items-center justify-center h-48 bg-gray-200">
              <span className="text-gray-500">Próximamente</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Proyecto en desarrollo</h3>
              <p className="text-gray-600 mb-4">
                Este espacio está reservado para un próximo proyecto que refleje
                mi experiencia y habilidades en desarrollo web.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex items-center justify-center h-48 bg-gray-200">
              <span className="text-gray-500">Próximamente</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Proyecto en desarrollo</h3>
              <p className="text-gray-600 mb-4">
                Este espacio está reservado para un próximo proyecto que refleje
                mi experiencia y habilidades en desarrollo web.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;

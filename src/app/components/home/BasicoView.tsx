"use client";

export default function BasicoView() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* CONTENEDOR PRINCIPAL: Aquí armaremos toda la vista larga */}
      <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm min-h-[50vh] flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-4">
          Cargando tu experiencia...
        </h2>
        <p className="text-gray-500 font-medium max-w-md">
          Este es el espacio listo para que empecemos a diseñar la estructura larga del Plan Básico.
        </p>
      </div>

    </div>
  );
}
import React, { useEffect, useState } from "react";

export default function Modal({ isOpen, onClose, children }) {
  const [visible, setVisible] = useState(false);

  // Activa la animación al montar
  useEffect(() => {
    if (isOpen) {
      // Permite que el DOM renderice antes de aplicar la animación
      setTimeout(() => setVisible(true), 10);
    } else {
      setVisible(false);
    }
  }, [isOpen]);

  // Si el modal no está abierto, no renderiza nada
  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50
        transition-opacity duration-500 ease-in-out ${
          visible ? "opacity-100" : "opacity-0"
        }`} // Duración de la animación de fondo
      onClick={onClose}
    >
      <div
        className={`bg-white p-6 rounded-lg relative shadow-lg max-w-md w-full
          transform transition-transform duration-500 ease-in-out ${
            visible ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`} // Duración de la animación del modal
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>

        {children}
      </div>
    </div>
  );
}

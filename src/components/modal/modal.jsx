import React from 'react';

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose} // permite cerrar al hacer clic fuera
    >
      <div
        className="bg-white p-6 rounded-lg relative shadow-lg max-w-md w-full"
        onClick={(e) => e.stopPropagation()} // evita que el clic en el contenido cierre el modal
      >
        {/* Botón de cierre */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Contenido del modal */}
        {children}
      </div>
    </div>
  );
}

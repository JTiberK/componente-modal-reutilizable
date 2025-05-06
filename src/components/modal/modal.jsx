import React, { useEffect, useState, useRef } from "react"; // Importar React y hooks necesarios

export default function Modal({ isOpen, onClose, children, className = "" }) {
  const [visible, setVisible] = useState(false);  // Estado para controlar la visibilidad del modal
  const closeButtonRef = useRef(null); // Referencia para el botón de cerrar

  // Aplica animación
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setVisible(true), 10); // Espera un poco para que la animación de entrada funcione
    } else {
      setVisible(false);
    }
  }, [isOpen]);

  // Enfocar botón al abrir
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        closeButtonRef.current?.focus(); // Enfocar el botón de cerrar
      }, 10);
    }
  }, [isOpen]); // Enfocar el botón de cerrar al abrir el modal

  // ESC para cerrar
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Manejar el evento de teclado
      if (e.key === "Escape") {
        // Si se presiona ESC
        e.preventDefault(); // Evitar el comportamiento por defecto
        onClose(); // Cerrar el modal
      }
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown); // Agregar el evento solo si el modal está abierto
    return () => window.removeEventListener("keydown", handleKeyDown); // Limpiar el evento al cerrar el modal
  }, [isOpen, onClose]);

  if (!isOpen) return null; // No renderizar el modal si no está abierto

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50    
        transition-opacity duration-500 ease-in-out ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      onClick={onClose} // Cerrar el modal al hacer clic fuera de él
    >
      <div
        role="dialog"
        aria-modal="true" // Atributo para accesibilidad
        className={`bg-white p-6 rounded-lg relative shadow-lg max-w-md w-full 
          transform transition-transform duration-500 ease-in-out
          ${
            visible ? "scale-100 opacity-100" : "scale-90 opacity-0"
          } ${className}`} // Clases para el modal
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeButtonRef} // Referencia al botón de cerrar
          aria-label="Cerrar modal" // Atributo para accesibilidad 
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl font-bold"
          onClick={onClose} // Función para cerrar el modal
          onKeyDown={(e) => {
            if (e.key === "Enter") onClose(); // Cerrar el modal al presionar Enter
          }}
        >
          &times; {/* Icono de cerrar*/}
        </button>
        {children} {/*Contenido del modal*/}
      </div>
    </div>
  );
}

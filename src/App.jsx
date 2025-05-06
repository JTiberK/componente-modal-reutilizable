import { useState } from "react";
import Modal from "./components/modal/modal.jsx";

function App() {
  const [activeModal, setActiveModal] = useState(null); // Estado para controlar qué modal está activ

  const closeModal = () => setActiveModal(null); // Función para cerrar el modal

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Modales con contenido diferente</h1>

      <div className="space-x-2">
        <button
          onClick={() => setActiveModal("simple")}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"  // Estilo del botón
        >
          Abrir Modal Simple
        </button>

        <button
          onClick={() => setActiveModal("form")}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700" // Estilo del botón
        >
          Abrir Modal con Formulario
        </button>

        <button
          onClick={() => setActiveModal("image")}
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"  // Estilo del botón
        >
          Abrir Modal con Imagen
        </button>
      </div>

      {/* Modal Simple */}
      <Modal isOpen={activeModal === "simple"} onClose={closeModal}> {/* Este modal se abrirá al hacer clic en el botón */}
        <h2 className="text-xl font-semibold mb-2">Modal Simple</h2>
        <p className="mb-4 text-gray-700">
          Este es un modal simple con texto informativo.
        </p>
        <button
          onClick={closeModal}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Aceptar
        </button>
      </Modal>

      {/* Modal con Formulario */}
      <Modal isOpen={activeModal === "form"} onClose={closeModal}>
        <h2 className="text-xl font-semibold mb-4">Formulario</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Formulario enviado"); // Aquí puedes manejar el envío del formulario
            closeModal();
          }}
          className="space-y-3"
        >
          <input
            type="text"
            placeholder="Nombre"
            className="w-full border border-gray-300 p-2 rounded" // Estilo del input
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 p-2 rounded" // Estilo del input
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"  // Estilo del botón
          >
            Enviar
          </button>
        </form>
      </Modal>

      {/* Modal con Imagen */}
      <Modal isOpen={activeModal === "image"} onClose={closeModal}> {/* Este modal se abrirá al hacer clic en el botón */}
        <h2 className="text-xl font-semibold mb-4">Imagen</h2>
        <img
          src="https://freefrontend.com/assets/img/css-modal-windows/react-modal-ui.png"
          alt="Ejemplo"
          className="rounded mb-2"
        />
        <p className="text-center text-sm text-gray-600">  {/* Estilo del pie de foto */}
          Este es un pie de foto descriptivo. 
        </p>
      </Modal>
    </div>
  );
}

export default App;

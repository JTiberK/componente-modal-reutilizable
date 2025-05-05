import { useState } from 'react';
import Modal from './components/modal/modal.jsx';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Mi App</h1>
      <button
        onClick={openModal}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Abrir Modal
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-xl font-semibold mb-2">Este es el Modal</h2>
        <p className="text-gray-700">Aquí puedes colocar cualquier contenido.</p>
      </Modal>
    </div>
  );
}

export default App;

import { useState } from 'react';

const ThankYouModal = ({ isOpen, onClose }) => {
  // State to track whether the modal is open or closed
  const [modalOpen, setModalOpen] = useState(isOpen);

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center transition-opacity ${
        modalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Modal Overlay */}
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={() => closeModal()}
        aria-hidden="true"
      ></div>

      {/* Modal Content */}
      <div className="bg-white rounded-lg p-8 max-w-sm mx-auto z-10">
        <h2 className="text-2xl font-bold text-indigo-600 mb-4">Thank You for Joining the Waitlist!</h2>
        <p className="text-gray-700">
          We are excited to have you on board! You will be among the first to know when our app launches.
        </p>
        <button
          className="mt-6 w-full px-4 py-2 text-white font-semibold bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
          onClick={() => closeModal()}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ThankYouModal;

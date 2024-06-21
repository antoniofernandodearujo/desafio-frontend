import React from 'react';
import { User } from '@/@types';

type ModalProps = {
  userToDelete: User | null;
  closeModal: () => void;
  confirmDelete: () => void;
};

export default function Modal({ userToDelete, closeModal, confirmDelete }: ModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-4">Confirmar Exclusão</h2>
        <p>Tem certeza de que deseja excluir o usuário <strong>{userToDelete?.name}</strong>?</p>
        <div className="mt-4 flex justify-end space-x-4">
          <button
            className="px-4 py-2 bg-gray-300 rounded-md"
            onClick={closeModal}
          >
            Cancelar
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-md"
            onClick={confirmDelete}
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
};


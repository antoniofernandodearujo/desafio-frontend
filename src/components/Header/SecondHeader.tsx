'use client';

import { useState } from "react";
import Image from "next/image";
import { CgMenuGridR } from "react-icons/cg";
import { FaRegCircleQuestion } from "react-icons/fa6";

export default function SecondHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null); // Estado para controlar o item selecionado

    function handleToggle() {
        setIsMenuOpen(!isMenuOpen);
    }

    // Função para selecionar um item do menu
    function handleSelectItem(index: any) {
        setSelectedItem(index);
    }

    return (
        <header className="flex justify-between items-center bg-white p-4">
            {/* First Section */}
            <div className="flex items-center gap-4">
                <Image
                    src="/Vector.png"
                    alt="Icon"
                    width={28}
                    height={28}
                />
                <h1 className="text-purple font-bold">BEM-VINDO</h1>
                <span className="text-gray-400">&#8226;</span> {/* Bullet point */}
                <h1 className="text-gray-400">Registro</h1>
            </div>

            {/* Second Section */}
            <div className="flex items-center gap-4 mr-10">
                <FaRegCircleQuestion size={24} className="text-gray-600 hover:text-gray-800 cursor-pointer" />
                <CgMenuGridR size={24} className="text-gray-600 hover:text-gray-800 cursor-pointer" />
                <span className="text-gray-400">&#8226;</span> {/* Bullet point */}
                <div className="relative flex items-center">
                    <button onClick={handleToggle} className="flex items-center justify-center bg-purple w-10 h-10 rounded-3xl hover:opacity-50">
                        <h1 className="text-white font-bold text-sm">UN</h1>
                    </button>
                    <h1 className="text-gray-600 font-semibold ml-2">Nome de usuário</h1>
                    {isMenuOpen && (
                        <div className="absolute left-8 top-10 w-48 bg-dark border rounded-lg">
                            <ul className="py-2">
                                <li className={`px-4 py-2 cursor-pointer text-white ${selectedItem === 1 ? 'bg-purple-100 pl-2 border-l-4 border-purple' : 'hover:opacity-50'}`} onClick={() => handleSelectItem(1)}>Lista de amigos</li>
                                <li className={`px-4 py-2 cursor-pointer text-white ${selectedItem === 2 ? 'bg-purple-100 pl-2 border-l-4 border-purple' : 'hover:opacity-50'}`} onClick={() => handleSelectItem(2)}>Artigos salvos</li>
                                <li className={`px-4 py-2 cursor-pointer text-white ${selectedItem === 3 ? 'bg-purple-100 pl-2 border-l-4 border-purple' : 'hover:opacity-50'}`} onClick={() => handleSelectItem(3)}>Notificações</li>
                                <li className={`px-4 py-2 cursor-pointer text-white ${selectedItem === 4 ? 'bg-purple-100 pl-2 border-l-4 border-purple' : 'hover:opacity-50'}`} onClick={() => handleSelectItem(4)}>Pre</li>
                                <li className={`px-4 py-2 cursor-pointer text-white ${selectedItem === 5 ? 'bg-purple-100 pl-2 border-l-4 border-purple' : 'hover:opacity-50'}`} onClick={() => handleSelectItem(5)}>Fechar Sessão</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

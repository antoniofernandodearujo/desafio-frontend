'use client';

import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";

type SecondHeaderProps = {
    content: 'default' | 'user' | 'new_user'; // Definindo os tipos de conteúdo possíveis
    user_name?: string; // Definindo o tipo de user_name como string
};

// Função para obter as iniciais do nome do usuário
const getInitials = (name: string): string => {
    const nameArray = name.trim().split(' ');
    if (nameArray.length === 0) return 'UN';
    if (nameArray.length === 1) return nameArray[0][0].toUpperCase();
    return (nameArray[0][0] + nameArray[1][0]).toUpperCase();
};

export default function SecondHeader({ content, user_name }: SecondHeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<number | null>(null); // Estado para controlar o item selecionado
    const router = useRouter(); // Usa o hook useRouter

    useEffect(() => {
        // Adiciona um event listener para capturar a tecla ESC pressionada
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsMenuOpen(false); // Fecha o menu ao pressionar ESC
            }
        };

        document.addEventListener('keydown', handleEscKey);

        // Remove o event listener ao desmontar o componente
        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, []); // Executa apenas uma vez durante o montagem do componente

    const handleToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    // Função para selecionar um item do menu
    const handleSelectItem = (index: number) => {
        setSelectedItem(index);
    }

    // Função para navegar para a rota /usersnew
    const handleNavigate = (rota: string) => {
        router.push(`/${rota}`);
    }

    let rightSection = null;

    // Condicional para determinar o que mostrar no lado direito com base na prop 'content'
    if (content === 'user') {
        rightSection = (
            <div className="relative flex items-center">
                <button onClick={handleToggle} className="flex items-center justify-center bg-purple w-10 h-10 rounded-3xl hover:opacity-50">
                    <h1 className="text-white font-bold text-sm">
                        {user_name ? getInitials(user_name) : 'UN'}
                    </h1>
                </button>
                <h1 className="text-gray-600 font-semibold ml-2">{user_name !== undefined ? user_name : 'Nome de Usuário'}</h1>
                {isMenuOpen && (
                    <div className="absolute riht-8 top-10 w-48 bg-dark border rounded-lg">
                        <ul className="py-2">
                            <li className={`px-4 py-2 cursor-pointer text-white ${selectedItem === 1 ? 'bg-purple-100 pl-2 border-l-4 border-purple' : 'hover:opacity-50'}`} onClick={() => handleSelectItem(1)}>Lista de amigos</li>
                            <li className={`px-4 py-2 cursor-pointer text-white ${selectedItem === 2 ? 'bg-purple-100 pl-2 border-l-4 border-purple' : 'hover:opacity-50'}`} onClick={() => handleSelectItem(2)}>Artigos salvos</li>
                            <li className={`px-4 py-2 cursor-pointer text-white ${selectedItem === 3 ? 'bg-purple-100 pl-2 border-l-4 border-purple' : 'hover:opacity-50'}`} onClick={() => handleSelectItem(3)}>Notificações</li>
                            <li className={`px-4 py-2 cursor-pointer text-white ${selectedItem === 4 ? 'bg-purple-100 pl-2 border-l-4 border-purple' : 'hover:opacity-50'}`} onClick={() => handleSelectItem(4)}>Preferências</li>
                            <li className={`px-4 py-2 cursor-pointer text-white ${selectedItem === 5 ? 'bg-purple-100 pl-2 border-l-4 border-purple' : 'hover:opacity-50'}`} onClick={() => handleSelectItem(5)}>Fechar Sessão</li>
                        </ul>
                    </div>
                )}
            </div>
        );
    } else if (content === 'new_user') {
        rightSection = (
            <div className="flex items-center gap-4 mr-10">
                <button onClick={() => handleNavigate('')} className="bg-purple hover:opacity-80 text-white font-bold py-2 px-4 rounded">
                    Visualizar Todos Usuários
                </button>
            </div>
        );
    } else {
        // Caso 'default' ou qualquer outro valor não previsto, renderize o conteúdo padrão
        rightSection = (
            <div className="flex items-center gap-4 mr-10">
                <button onClick={() => handleNavigate('usersnew')} className="bg-purple hover:opacity-80 text-white font-bold py-2 px-4 rounded">
                    Cadastra-se Aqui
                </button>
            </div>
        );
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
                    loading="lazy"
                />
                <h1 className="text-purple font-bold">BEM-VINDO</h1>
                <span className="text-gray-400">&#8226;</span> {/* Bullet point */}
                {content === 'user' && (
                    <h1 className="text-gray-400">Usuário</h1>
                )}
                {content === 'new_user' && (
                    <h1 className="text-gray-400">Registro</h1>
                )}
                {content === 'default' && (
                    <h1 className="text-gray-400">Tabela de Usuário</h1>
                )}
                
            </div>

            {/* Second Section */}
            {rightSection}
        </header>
    );
}

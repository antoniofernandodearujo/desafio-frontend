'use client';

import React, { useState } from 'react';

type User = {
  username: string;
  name: string;
  email: string;
  city: string;
  weekDays: string;
  posts: number;
  albums: number;
};

const data: User[] = [
  { username: 'Sonya64', name: 'Mildred Turner', email: 'Loraine25@hotmail.com', city: 'Abraham', weekDays: 'Todos', posts: 3, albums: 2 },
  { username: 'selena89', name: 'Troy Boehm', email: 'Agnes_Lang@hotmail.com', city: 'Bahringerbury', weekDays: 'Fim de semana', posts: 3, albums: 2 },
  { username: 'laverna58', name: 'Maureen Kemmer', email: 'Agustina.Orn@hotmail.com', city: 'Ryannmouth', weekDays: 'Segunda, Quarta', posts: 3, albums: 2 },
  { username: 'ari17', name: 'Dale Schulist', email: 'Libra.Maggio@hotmail.com', city: 'Alishastad', weekDays: 'Terça, Quinta', posts: 3, albums: 2 },
  { username: 'lue83', name: 'Calebe Mitchell', email: 'Zena.Jakubowski97@gmail.com', city: 'South Markusland', weekDays: 'Segunda, Terça', posts: 3, albums: 2 }
  // Adicione mais dados conforme necessário
];

const Table: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(5);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          className={`mx-1 px-3 py-1 border rounded-full ${i === currentPage ? 'bg-gray-400 text-white' : 'bg-white text-gray-700 border-gray-300'}`}
          onClick={() => handleChangePage(i)}
        >
          {i}
        </button>
      );
    }

    return (
      <div className="flex justify-center items-center mt-4 space-x-2">
        <button
          className="px-3 py-1 bg-white text-gray-700 border border-gray-300 rounded-full"
          onClick={() => handleChangePage(Math.max(1, currentPage - 1))}
        >
          Anterior
        </button>
        {pages}
        <button
          className="px-3 py-1 bg-white text-gray-700 border border-gray-300 rounded-full"
          onClick={() => handleChangePage(Math.min(totalPages, currentPage + 1))}
        >
          Próximo
        </button>
      </div>
    );
  };

  const renderTableRows = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = data.slice(startIndex, startIndex + itemsPerPage);

    return currentData.map(user => (
      <tr key={user.username} className="border-b text-center">
        <td className="p-4 border-b border-gray-300">{user.username}</td>
        <td className="p-4 border-b border-gray-300">{user.name}</td>
        <td className="p-4 border-b border-gray-300">{user.email}</td>
        <td className="p-4 border-b border-gray-300">{user.city}</td>
        <td className="p-4 border-b border-gray-300">{user.weekDays}</td>
        <td className="p-4 border-b border-gray-300">{user.posts}</td>
        <td className="p-4 border-b border-gray-300">{user.albums}</td>
      </tr>
    ));
  };

  return (
    <div className="overflow-x-auto flex flex-col justify-center items-center p-4">
      <div className='flex justify-start items-start'>
        <h1 className="text-2xl font-bold">Usuários</h1>
      </div>
      <table className="border-collapse bg-white" style={{ width: '60%' }}>
        <thead>
          <tr>
            <th className="border-b text-gray-500 p-4 text-center">USER</th>
            <th className="border-b text-gray-500 p-4 text-center">NOME</th>
            <th className="border-b text-gray-500 p-4 text-center">E-MAIL</th>
            <th className="border-b text-gray-500 p-4 text-center">CIDADE</th>
            <th className="border-b text-gray-500 p-4 text-center">DIAS DA SEMANA</th>
            <th className="border-b text-gray-500 p-4 text-center">POSTS</th>
            <th className="border-b text-gray-500 p-4 text-center">ÁLBUNS</th>
          </tr>
        </thead>
        <tbody>
          {renderTableRows()}
        </tbody>
      </table>
      {renderPagination()}
    </div>
  );
};

export default Table;

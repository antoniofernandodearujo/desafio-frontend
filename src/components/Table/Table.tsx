'use client';

import React, { useState } from 'react';

type User = {
  id: number;
  name: string;
  email: string;
  city: string;
  weekDays: string[];
  posts: number;
  albums: number;
};

const data: User[] = [
  // Adicione dados de exemplo aqui
  { id: 1, name: 'User 1', email: 'user1@example.com', city: 'City 1', weekDays: ['Mon', 'Tue'], posts: 10, albums: 5 },
  { id: 2, name: 'User 2', email: 'user2@example.com', city: 'City 2', weekDays: ['Wed', 'Thu'], posts: 8, albums: 3 },
  { id: 3, name: 'User 3', email: 'user3@example.com', city: 'City 3', weekDays: ['Fri', 'Sat'], posts: 12, albums: 7 },
  { id: 4, name: 'User 4', email: 'user4@example.com', city: 'City 4', weekDays: ['Sun'], posts: 5, albums: 2 },
  { id: 5, name: 'User 5', email: 'user5@example.com', city: 'City 5', weekDays: ['Mon', 'Tue', 'Wed'], posts: 20, albums: 10 },
  { id: 6, name: 'User 6', email: 'user6@example.com', city: 'City 6', weekDays: ['Thu', 'Fri'], posts: 15, albums: 8 },
  { id: 7, name: 'User 7', email: 'user7@example.com', city: 'City 7', weekDays: ['Sat', 'Sun'], posts: 7, albums: 4 },
  { id: 8, name: 'User 8', email: 'user8@example.com', city: 'City 8', weekDays: ['Mon', 'Tue'], posts: 9, albums: 6 },
  { id: 9, name: 'User 9', email: 'user9@example.com', city: 'City 9', weekDays: ['Wed', 'Thu'], posts: 11, albums: 5 },
  { id: 10, name: 'User 10', email: 'user10@example.com', city: 'City 10', weekDays: ['Fri', 'Sat'], posts: 14, albums: 9 },
    { id: 11, name: 'User 11', email: 'user11@example.com', city: 'City 11', weekDays: ['Mon', 'Tue', 'Wed'], posts: 15, albums: 7 },
    { id: 12, name: 'User 12', email: 'user12@example.com', city: 'City 12', weekDays: ['Thu', 'Fri'], posts: 9, albums: 4 },
    { id: 13, name: 'User 13', email: 'user13@example.com', city: 'City 13', weekDays: ['Sat', 'Sun'], posts: 11, albums: 6 },
    { id: 14, name: 'User 14', email: 'user14@example.com', city: 'City 14', weekDays: ['Mon', 'Tue'], posts: 13, albums: 8 },
    { id: 15, name: 'User 15', email: 'user15@example.com', city: 'City 15', weekDays: ['Wed', 'Thu'], posts: 7, albums: 5 },
    { id: 16, name: 'User 16', email: 'user16@example.com', city: 'City 16', weekDays: ['Fri', 'Sat'], posts: 10, albums: 9 },
    { id: 17, name: 'User 17', email: 'user17@example.com', city: 'City 17', weekDays: ['Sun'], posts: 4, albums: 2 },
    { id: 18, name: 'User 18', email: 'user18@example.com', city: 'City 18', weekDays: ['Mon', 'Tue', 'Wed'], posts: 18, albums: 12 },
    { id: 19, name: 'User 19', email: 'user19@example.com', city: 'City 19', weekDays: ['Thu', 'Fri'], posts: 14, albums: 7 },
    { id: 20, name: 'User 20', email: 'user20@example.com', city: 'City 20', weekDays: ['Sat', 'Sun'], posts: 9, albums: 5 },
  // ... outros dados
];

const Table: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
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
          className={`mx-1 px-2 py-1 ${i === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => handleChangePage(i)}
        >
          {i}
        </button>
      );
    }

    return (
      <div className="flex justify-center items-center mt-4">
        <button
          className="mx-1 px-2 py-1 bg-gray-200"
          onClick={() => handleChangePage(Math.max(1, currentPage - 1))}
        >
          Anterior
        </button>
        {pages}
        <button
          className="mx-1 px-2 py-1 bg-gray-200"
          onClick={() => handleChangePage(Math.min(totalPages, currentPage + 1))}
        >
          Próximo
        </button>
        <select
          className="ml-4"
          value={currentPage}
          onChange={(e) => handleChangePage(Number(e.target.value))}
        >
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <option key={page} value={page}>
              Ir para página {page}
            </option>
          ))}
        </select>
      </div>
    );
  };

  const renderTableRows = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = data.slice(startIndex, startIndex + itemsPerPage);

    return currentData.map(user => (
      <tr key={user.id} className="border-t">
        <td className="p-2">{user.id}</td>
        <td className="p-2">{user.name}</td>
        <td className="p-2">{user.email}</td>
        <td className="p-2">{user.city}</td>
        <td className="p-2">{user.weekDays.join(', ')}</td>
        <td className="p-2">{user.posts}</td>
        <td className="p-2">{user.albums}</td>
      </tr>
    ));
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-max w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border p-2">USER</th>
            <th className="border p-2">NOME</th>
            <th className="border p-2">E-MAIL</th>
            <th className="border p-2">CIDADE</th>
            <th className="border p-2">DIAS DA SEMANA</th>
            <th className="border p-2">POSTS</th>
            <th className="border p-2">ÁLBUNS</th>
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

'use client';

import React, { useState, useEffect } from 'react';
import Users from '@/service/Users';
import Posts from '@/service/Posts';
import Album from '@/service/Album';
import { User } from '@/@types';
import TableRow from './TableRow';
import Pagination from './Pagination';
import SearchBar from './SearchBar';
import Modal from './Modal';
import { mockCity, mockWeekDays, generateUsernameFromEmail } from '@/utils';

export default function Table() {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState<User | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersData = await Users.fetchUsers();

        const usersWithDetails = await Promise.all(usersData.map(async (user) => {
          const posts = await Posts.fetchPostsByUserId(user.id);
          const albums = await Album.fetchAlbumsByUserId(user.id);

          return {
            ...user,
            city: user.city || mockCity(),
            weekDays: user.weekDays || mockWeekDays(),
            posts,
            albums,
            username: generateUsernameFromEmail(user.email),
          };
        }));

        setUsers(usersWithDetails);
        setTotalPages(Math.ceil(usersWithDetails.length / itemsPerPage));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handleMouseEnter = (userId: string) => {
    setHoveredRow(userId);
  };

  const handleMouseLeave = () => {
    setHoveredRow(null);
  };

  const openModal = (user: User) => {
    setUserToDelete(user);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setUserToDelete(null);
  };

  const confirmDelete = async () => {
    if (userToDelete) {
      try {
        await Users.deleteUser(userToDelete.id);
        setUsers(users.filter(user => user.id !== userToDelete.id));
      } catch (error) {
        console.error('Error deleting user:', error);
      }
      closeModal();
    }
  };

  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredUsers.slice(startIndex, endIndex);

  return (
    <div className="overflow-x-auto flex flex-col justify-center items-center p-4">
      <div className='flex justify-start items-start w-full ml-96 mb-10'>
        <h1 className="text-2xl text-left font-bold">Usuários</h1>
      </div>
      <div className="flex justify-center items-center mb-4" style={{ width: '60%' }}>
        <SearchBar value={searchTerm} onChange={handleSearch} />
      </div>
      <table className="border-collapse bg-white" style={{ width: '60%' }}>
        <thead>
          <tr>
            <th className="border-b text-gray-500 p-4 text-center">Usuário</th>
            <th className="border-b text-gray-500 p-4 text-center">Nome</th>
            <th className="border-b text-gray-500 p-4 text-center">E-mail</th>
            <th className="border-b text-gray-500 p-4 text-center">Cidade</th>
            <th className="border-b text-gray-500 p-4 text-center">Dias da Semana</th>
            <th className="border-b text-gray-500 p-4 text-center">Posts</th>
            <th className="border-b text-gray-500 p-4 text-center">Álbuns</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((user) => (
            <TableRow
              key={user.id}
              user={user}
              hoveredRow={hoveredRow}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              openModal={openModal}
            />
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handleChangePage}
      />
      {modalOpen && (
        <Modal
          userToDelete={userToDelete}
          closeModal={closeModal}
          confirmDelete={confirmDelete}
        />
      )}
    </div>
  );
};

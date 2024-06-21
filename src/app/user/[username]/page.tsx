'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import UserApi from '@/service/Users';
import FirstHeader from '@/components/Header/FirstHeader';
import SecondHeader from '@/components/Header/SecondHeader';
import Banner from '@/components/Banner/Banner';
import ErrorSearchUser from '@/components/ErrorSearchUser/ErrorSearchUser';
import UserProfile from '@/components/UserProfile/UserProfile';

const UserProfilePage = () => {
  const pathname = usePathname();
  const username = pathname.split('/').pop();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (username) {
          console.log('Fetching user with username:', username);
          const userData = await UserApi.getUserByUsername(username as string);
          console.log('User data:', userData);
          setUser(userData);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
        setError('Erro ao carregar informações do usuário.');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [username]);


  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (error) {
    return <p>Ocorreu um erro: {error}</p>;
  }

  if (!user) {
    return (
      <div>
        <ErrorSearchUser />
      </div>
    );
  }

  return (
    <div>
      <FirstHeader />
      <SecondHeader content='user' user_name={user.user_name}/>
      <Banner />
      <UserProfile user={user} />
    </div>
  );
};

export default UserProfilePage;

import { useRouter } from 'next/navigation';



interface UserProfileProps {
  user: any;
}

export default function UserProfile({ user }: UserProfileProps) {

    const router = useRouter();

    function handleNavigate(rota: string) {
        router.push(`/${rota}`);
    }

    return(
        <div className='flex justify-center items-center mt-20'>
            <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full mx-4">
            <h1 className="text-3xl font-bold text-center mb-6">Perfil de <span className='text-purple'>{user.user_name}</span></h1>
            <div className="text-lg">
                <div className="mb-4">
                <span className="font-semibold">Nome completo: </span>{user.name}
                </div>
                <div className="mb-4">
                <span className="font-semibold">E-mail: </span>{user.email}
                </div>
                <div className="mb-4">
                <span className="font-semibold">Cidade: </span>{user.city}
                </div>
                <div className="mb-4">
                <span className="font-semibold">Dias da semana: </span>{user.week_days}
                </div>
            </div>
            <div className='flex mt-10 items-center justify-evenly flex-row'>
            <button className='bg-blue-500 hover:opacity-80 text-white font-bold py-2 px-4 rounded w-32' onClick={() => handleNavigate('/')}>Usuários</button>
            <button className='bg-green-500 hover:opacity-80 text-white font-bold py-2 px-4 rounded w-32' onClick={() => handleNavigate('usersnew')}> + Usuário</button>
          </div>
            </div>
        </div>
    )
  
}
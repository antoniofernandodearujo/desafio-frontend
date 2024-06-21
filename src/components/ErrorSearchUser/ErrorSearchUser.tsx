import FirstHeader from "../Header/FirstHeader"
import SecondHeader from "../Header/SecondHeader"
import Banner from "../Banner/Banner"
import { useRouter } from 'next/navigation';

export default function ErrorSearchUser() {

    const router = useRouter();

    function handleNavigate(rota: string) {
        router.push(`/${rota}`);
    }

    return(
      <div>
        <FirstHeader />
        <SecondHeader content='user'/>
        <Banner />

        <div className='flex mt-48 items-center justify-center flex-col w-full'>
          <h1 className='text-3xl text-purple font-semibold'>Usuário não encontrado!</h1>
          <div className='flex mt-10 items-center justify-evenly w-full flex-row'>
            <button className='bg-blue-500 hover:opacity-80 text-white font-bold py-2 px-4 rounded' onClick={() => handleNavigate('/')}>Ver todos os Usuários</button>
            <button className='bg-green-500 hover:opacity-80 text-white font-bold py-2 px-4 rounded' onClick={() => handleNavigate('usersnew')}>Registrar Novo Usuário</button>
          </div>
        </div>
      </div>
    )

    
}
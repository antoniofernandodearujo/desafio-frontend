// src/components/RegisterForm.tsx
'use client';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import 'tailwindcss/tailwind.css';

type FormValues = {
  username: string;
  fullName: string;
  email: string;
  city: string;
  weekDays: string[];
};

const schema = yup.object({
  username: yup.string().required('Nome de usuário é obrigatório'),
  fullName: yup.string().required('Nome completo é obrigatório'),
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  city: yup.string().required('Cidade é obrigatória'),
  weekDays: yup.array().of(yup.string()).min(1, 'Selecione pelo menos um dia'),
}).required();

const RegisterForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log(data);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6">Registro</h1>
      <div className="flex justify-around mb-6">
        <div className="text-center">
          <div className="text-purple-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11l-7-7m0 0l-7 7m7-7v18" /></svg>
          </div>
          <h2 className="text-purple-700 font-semibold mt-2">Precisa de ajuda?</h2>
          <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="text-center">
          <div className="text-purple-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11l-7-7m0 0l-7 7m7-7v18" /></svg>
          </div>
          <h2 className="text-purple-700 font-semibold mt-2">Por que se registrar?</h2>
          <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="text-center">
          <div className="text-purple-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11l-7-7m0 0l-7 7m7-7v18" /></svg>
          </div>
          <h2 className="text-purple-700 font-semibold mt-2">O que está acontecendo?</h2>
          <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      {/**forms */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 border rounded-xl p-6">
        <div className='flex justify-start items-start'>
          <h1 className='text-gray-400 text-md' >Registro</h1>
        </div>
        <div className='flex items-center justify-beteween flex-row gap-4' style={{ width: '100%' }}>    
          <input 
            type="text" 
            placeholder="Nome de usuário*" 
            {...register('username')}
            required
            className='w-full p-2 border-t-0 border-b-2 border-dark rounded-sm bg-gray-100 focus:outline-none'
          />
          {errors.username && <p className="text-red-600">{errors.username.message}</p>}

          <input 
            type="text" 
            placeholder="Cidade*" 
            {...register('city')}
            required
            className='w-full p-2 border-t-0 border-b-2 border-dark rounded-sm bg-gray-100 focus:outline-none'
          />
          {errors.city && <p className="text-red-600">{errors.city.message}</p>}
        </div>

        <div className='flex flex-row-reverse'>

          <div className='flex flex-col justify-center items-end w-full ml-4'>

            <div className="grid grid-cols-4 gap-6 mt-2 w-full">
                {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'].map(day => (
                  <label key={day} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value={day}
                      required
                      {...register('weekDays')}
                      className="h-5 w-5 text-purple border-gray-300 rounded checked:bg-purple checked:border-transparent focus:outline-none"
                    />
                    <span className="text-gray-700">{day}</span>
                  </label>
                ))}
            </div>
            {errors.weekDays && <p className="text-red-600">{errors.weekDays.message}</p>}

          </div>

        <div className='w-full'>

          <input 
            type="text" 
            placeholder="Nome completo*" 
            {...register('fullName')}
            required
            className='w-full p-2 border-t-0 border-b-2 border-dark rounded-sm bg-gray-100 focus:outline-none'
          />
          {errors.fullName && <p className="text-red-600">{errors.fullName.message}</p>}

          <input 
            type="email" 
            placeholder="E-mail*" 
            {...register('email')}
            required
            className='w-full mt-4 p-2 border-t-0 border-b-2 border-dark rounded-sm bg-gray-100 focus:outline-none'
          />
          {errors.email && <p className="text-red-600">{errors.email.message}</p>}
        </div>
      </div>

        

      </form>
    </div>
  );
};

export default RegisterForm;

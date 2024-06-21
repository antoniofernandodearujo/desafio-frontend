'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import InputField from './Inputs';
import registerUser from './actions';

type FormValues = {
    username: string;
    fullName: string;
    email: string;
    city: string;
    weekDays: string[];
};

export default function RegisterForm() {
    const { register, handleSubmit, formState: { errors }, setError, reset } = useForm<FormValues>();

    const [submitError, setSubmitError] = useState<string | null>(null);
    const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const processWeekDays = (weekDays: string[]) => {
        const selectedDays = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']
            .filter(day => weekDays.includes(day))
            .join(', ');

        return selectedDays;
    };

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        setIsLoading(true);

        // Processa os dias da semana para serem enviados como uma string separada por vírgulas
        const processedData = {
            ...data,
            weekDays: processWeekDays(data.weekDays),
        };

        if (!processedData.weekDays) {
            setError('weekDays', {
                type: 'manual',
                message: 'Selecione pelo menos um dia.',
            });
            setIsLoading(false);
            return;
        }

        try {
            await registerUser(processedData);
            setSubmitSuccess('Usuário registrado com sucesso!');
            setSubmitError(null);
            reset(); // Limpa os campos do formulário
        } catch (error: any) {
            if (error.message.includes('Username already exists')) {
                setSubmitError('Nome de usuário já existe. Escolha outro.');
            } else if (error.message.includes('Dados inválidos')) {
                setSubmitError('Erro ao registrar usuário: Dados inválidos.');
            } else {
                setSubmitError('Erro ao registrar usuário.');
            }
            console.error('Error registering user:', error);
            setSubmitSuccess(null);
        } finally {
            setIsLoading(false);
        }
    };

    const handleCancelClick = () => {
        reset(); // Limpa os campos do formulário
        setSubmitError(null);
        setSubmitSuccess(null);
    };

    return (
        <div className="max-w-3xl mb-10 mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center mb-6">Registro</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 border rounded-xl p-6">
                <div className='flex justify-start items-start'>
                    <h1 className='text-gray-400 text-md'>Registro</h1>
                </div>
                <div className='flex items-center justify-between flex-row gap-4' style={{ width: '100%' }}>
                    <InputField
                        type="text"
                        placeholder="Nome de usuário*"
                        register={register('username', {
                            required: 'Nome de usuário é obrigatório',
                        })}
                        error={errors.username}
                    />
                    <InputField
                        type="text"
                        placeholder="Cidade*"
                        register={register('city', {
                            required: 'Cidade é obrigatória',
                        })}
                        error={errors.city}
                    />
                </div>

                <div className='flex flex-row-reverse'>
                    <div className='flex flex-col justify-center items-end w-full ml-4'>
                        <div className="grid grid-cols-4 gap-6 mt-2 w-full">
                            {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'].map(day => (
                                <label key={day} className="flex items-center space-x-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        value={day}
                                        {...register('weekDays')}
                                        className="h-5 w-5 text-purple border-gray-300 rounded focus:ring-purple checked:bg-purple checked:border-transparent"
                                    />
                                    <span className="text-gray-700">{day}</span>
                                </label>
                            ))}
                        </div>
                        {errors.weekDays && <p className="text-red-600">{errors.weekDays.message}</p>}
                    </div>
                    <div className='w-full'>
                        <InputField
                            type="text"
                            placeholder="Nome completo*"
                            register={register('fullName', {
                                required: 'Nome completo é obrigatório',
                            })}
                            error={errors.fullName}
                        />
                        <InputField
                            type="email"
                            placeholder="E-mail*"
                            register={register('email', {
                                required: 'E-mail é obrigatório',
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: 'E-mail inválido',
                                },
                            })}
                            error={errors.email}
                        />
                    </div>
                </div>
                <div className='mt-10'>
                    <button type="submit" className="w-60 bg-purple text-white p-2 rounded-3xl hover:bg-opacity-80" disabled={isLoading}>
                        {isLoading ? 'Carregando...' : 'Registrar'}
                    </button>
                    <button type='button' className='w-48 ml-40 bg-gray-300 text-gray-500 p-2 rounded-3xl hover:bg-opacity-80' disabled={isLoading} onClick={handleCancelClick}>
                        Cancelar
                    </button>
                </div>
                {submitError && <p className="text-red-600 mt-4">{submitError}</p>}
                {submitSuccess && <p className="text-green-600 mt-4">{submitSuccess}</p>}
            </form>
        </div>
    );
};

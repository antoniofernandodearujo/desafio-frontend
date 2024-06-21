import React from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface InputFieldProps {
    type: string;
    placeholder: string;
    register: UseFormRegisterReturn;
    error?: FieldError;
    required?: boolean;
}

export default function InputField({ type, placeholder, register, error, required } : InputFieldProps) {

    return (
        <div>
            <input
                type={type}
                placeholder={placeholder}
                {...register}
                required={required}
                className='w-full p-2 border-t-0 border-b-2 border-dark rounded-sm bg-gray-100 focus:outline-none mt-4'
            />
            {error && <p className="text-red-600">{error.message}</p>}
        </div>
    );
}

import React from 'react';

interface InputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, placeholder, value, onChange, required, error }) => {
  return (
    <div className="mb-4">
      {label && <label className="block font-medium text-sm text-gray-700">{label}</label>}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 ${error ? 'border-red-500' : ''}`}
      />
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
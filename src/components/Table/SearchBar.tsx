import React from 'react';
import { RiSearchLine } from 'react-icons/ri';

type SearchBarProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchBar({ value, onChange }: SearchBarProps){
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Procurar"
        value={value}
        onChange={onChange}
        className="w-max p-2 border-t-0 border-b-2 border-dark rounded-sm bg-gray-100 focus:outline-none"
        style={{ width: 700 }} // Garante que o input ocupe 100% da largura mínima possível
      />
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <RiSearchLine className="text-gray-500" />
      </div>
    </div>
  );
};

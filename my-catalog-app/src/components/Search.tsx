import React from 'react';

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
}

export const Search: React.FC<SearchProps> = ({ value, onChange }) => {
  return (
    <div className="search">
      <input
        type="text"
        className="search__input"
        placeholder="Найти курс..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
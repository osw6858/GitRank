'use client';

import {ChangeEvent, FocusEvent, useState} from 'react';

interface AuthInputProps {
  placeholder: string;
  type: 'text' | 'password' | 'email';
  autoComplete?: 'email' | 'name';
}

export default function AuthInput({
  placeholder,
  type,
  autoComplete,
}: AuthInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const [value, setValue] = useState('');

  const handleFocus = () => setIsFocused(true);

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    setHasValue(e.target.value !== '');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setHasValue(e.target.value !== '');
  };

  return (
    <div className="w-full relative">
      <span
        className={`
          absolute transition-all duration-200 
          ${
            isFocused || hasValue
              ? isFocused
                ? 'top-1 left-3 text-xs text-button-green'
                : 'top-1 left-3 text-xs text-dark-gray-light'
              : 'top-3 left-3 text-base text-dark-gray-light'
          }
        `}
      >
        {placeholder}
      </span>
      <input
        type={type}
        autoComplete={autoComplete}
        className={`
          w-full border border-solid border-gray-300 dark:border-dark-gray-dark
          pt-5 pb-2 px-3 rounded-md
          focus:outline-none focus:border-button-green focus:border-2 dark:focus:border-button-green
        `}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        spellCheck={true}
        maxLength={50}
        dir="auto"
        onChange={handleChange}
      />
    </div>
  );
}

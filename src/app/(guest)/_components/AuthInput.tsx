'use client';

import React, {useState} from 'react';
import {FieldValues, useWatch} from 'react-hook-form';
import {AuthInputProps} from '@/types';

export default function AuthInput<T extends FieldValues>({
  label,
  placeholder,
  type,
  autoComplete,
  register,
  control,
  required,
}: AuthInputProps<T>) {
  const [isFocused, setIsFocused] = useState(false);

  const value = useWatch({
    control,
    name: label,
  });

  return (
    <>
      <label className={'hidden'}>{label}</label>
      <div className="w-full relative">
        <span
          className={`
          absolute transition-all duration-200 
          ${
            isFocused || value
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
          {...register(label, {required})}
          type={type}
          autoComplete={autoComplete}
          className={`
          w-full border border-solid border-gray-300 dark:border-dark-gray-dark
          pt-5 pb-2 px-3 rounded-md
          focus:outline-none focus:border-button-green focus:border-2 dark:focus:border-button-green
        `}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          spellCheck={true}
          maxLength={50}
          dir="auto"
        />
      </div>
    </>
  );
}

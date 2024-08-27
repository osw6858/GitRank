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
  rules,
  error,
}: AuthInputProps<T>) {
  const [isFocused, setIsFocused] = useState(false);

  const value = useWatch({
    control,
    name: label,
  });

  const getLabelClass = () => {
    if (error) return 'top-1 left-3 text-xs text-red-500';
    if (isFocused) return 'top-1 left-3 text-xs text-button-green';
    if (value) return 'top-1 left-3 text-xs text-dark-gray-light';
    return 'top-3 left-3 text-base text-dark-gray-light';
  };

  const getBorderClass = () => {
    if (error) return 'shadow-[0_0_0_2px_#EF4444]';
    if (isFocused) return 'shadow-[0_0_0_2px_#298E46]';
    return 'shadow-[0_0_0_1px_rgba(209,213,219,1)] dark:shadow-[0_0_0_1px_rgba(75,85,99,1)]';
  };

  return (
    <div className={'py-4'}>
      <label className="sr-only">{label}</label>
      <div className="w-full relative">
        <span
          className={`
            absolute transition-all duration-200 pointer-events-none
            ${getLabelClass()}
          `}
        >
          {placeholder}
        </span>
        <input
          {...register(label, {required, ...rules})}
          type={type}
          autoComplete={autoComplete}
          className={`
            w-full bg-transparent
            pt-5 pb-2 px-3 rounded-md
            focus:outline-none
            relative z-10
            ${error ? 'border-red-500' : ''}
          `}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          spellCheck={true}
          maxLength={50}
          dir="auto"
        />
        <div
          className={`
            absolute inset-0 rounded-md pointer-events-none
            transition-all duration-200
            ${getBorderClass()}
          `}
        ></div>
      </div>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

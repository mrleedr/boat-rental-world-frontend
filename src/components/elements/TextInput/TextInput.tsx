import classNames from 'classnames';
import type { FC } from 'react';
import React from 'react';

import { Typography } from '@/components/elements/Typography';

export interface TextInputProps {
  type: 'text' | 'email';
  value: string;
  handleChange: (value: string) => void;
  label?: string;
  leadingText?: string;
  placeholder: string;
  error?: string;
  helperText?: string;
  LeadingIcon?: React.ReactElement;
  TrailingIcon?: React.ReactElement;
  disabled?: boolean;
  className?: string;
}

export const TextInput: FC<TextInputProps> = ({
  type,
  value,
  handleChange,
  label,
  leadingText,
  placeholder,
  error,
  helperText,
  LeadingIcon,
  TrailingIcon,
  disabled,
  className,
}) => {
  return (
    <>
      {label ? (
        <Typography
          as="label"
          variant="md"
          customWeight="medium"
          customColor="text-gray-700 dark:text-white"
          className="mb-1.5 font-manjari"
        >
          {label}
        </Typography>
      ) : null}
      <div
        className={classNames('relative', {
          'flex items-center': leadingText,
        })}
      >
        <div className="absolute flex items-center justify-between w-full px-3 rounded-lg shadow-sm pointer-events-none h-11">
          {LeadingIcon ? (
            <LeadingIcon.type className="w-5 h-5 text-gray-500" />
          ) : (
            <div />
          )}
          {TrailingIcon ? (
            <TrailingIcon.type
              className={classNames({
                'text-gray-400': !error,
                'text-error-500': error,
              })}
            />
          ) : null}
        </div>

        {leadingText ? (
          <div
            className={classNames(
              'flex items-center font-manjari pt-1.5 text-md h-11 text-gray-500 pl-3.5 pr-3 border border-r-0 rounded-l-lg border-gray-300 dark:border-gray-500',
              {
                'bg-gray-50 dark:bg-gray-700': disabled,
                'dark:bg-gray-800': !disabled,
              }
            )}
          >
            {leadingText}
          </div>
        ) : null}

        <input
          type={type}
          value={value}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            if (!disabled) {
              handleChange(event.target.value);
            }
          }}
          placeholder={placeholder}
          aria-label="input"
          className={classNames(
            'w-full select-none text-gray-900 dark:text-white font-manjari pt-3 flex items-center text-md border h-11',
            {
              'pl-9': LeadingIcon,
              'pr-9': TrailingIcon,
              'rounded-l-0 rounded-r-lg': leadingText,
              'rounded-lg': !leadingText,
              'border-gray-300 focus:ring-2 focus:border-yellow-300 focus:ring-yellow-100':
                !error,
              'border-error-300 focus:ring-2 focus:border-error-300 focus:ring-error-100':
                error,
              'bg-white dark:bg-gray-800': !disabled,
              'bg-gray-50 dark:bg-gray-700': disabled,
            },
            className
          )}
          disabled={disabled}
        />
      </div>

      {error ? (
        <div className="mt-1.5 text-sm text-error-500">{error}</div>
      ) : null}

      {helperText ? (
        <div className="mt-1.5 text-sm text-gray-500">{helperText}</div>
      ) : null}
    </>
  );
};

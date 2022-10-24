import classNames from 'classnames';
import type { ButtonHTMLAttributes, FC } from 'react';
import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonState = 'default' | 'hover' | 'focus' | 'disabled';

const ButtonVariantClasses: Record<
  ButtonVariant,
  Record<ButtonState, string>
> = {
  primary: {
    default: classNames(
      'bg-gradient-to-r from-yellow-300 to-yellow-800 text-yellow-900 '
    ),
    hover: classNames(
      'hover:bg-gradient-to-r hover:from-yellow-800 hover:to-yellow-800'
    ),
    focus: classNames('focus:ring-2 focus:ring-yellow-500'),
    disabled: classNames('bg-yellow-300 text-yellow-800'),
  },
  secondary: {
    default: classNames('border-2 border-yellow-500 bg-white text-yellow-900'),
    hover: classNames(
      'hover:border-white hover:bg-gradient-to-r hover:from-yellow-300 hover:to-yellow-800'
    ),
    focus: '',
    disabled: classNames(
      'shadow-sm bg-primary-25 text-primary-300 dark:border-gray-300'
    ),
  },
  tertiary: {
    default: classNames('bg-white dark:bg-gray-900 text-primary-700'),
    hover: classNames(
      'hover:bg-primary-50 dark:hover:bg-white dark:hover:bg-opacity-20'
    ),
    focus: '',
    disabled: classNames('bg-white dark:bg-gray-900 text-gray-300'),
  },
};

const ButtonSizeClasses: Record<ButtonSize, string> = {
  sm: classNames('h-8 px-4 text-xs'),
  md: classNames('h-9 px-5 text-sm'),
  lg: classNames('h-10 px-6 text-md'),
};

const ButtonIconSizeClasses: Record<ButtonSize, string> = {
  sm: classNames('h-9 w-9'),
  md: classNames('h-10 w-10'),
  lg: classNames('h-11 w-11'),
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string | React.ReactElement | React.ReactNode;
  className?: string;
  variant: ButtonVariant;
  size?: ButtonSize;
  LeadingIcon?: React.ReactElement;
  TrailingIcon?: React.ReactElement;
  IconOnly?: React.ReactElement;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  variant,
  size = 'md',
  LeadingIcon,
  TrailingIcon,
  IconOnly,
  disabled,
  ...buttonProps
}) => {
  const ButtonVariantClassName = ButtonVariantClasses[variant];
  const ButtonIconSizeClassName = ButtonIconSizeClasses[size];

  return (
    <button
      {...buttonProps}
      className={classNames(
        'flex items-center rounded-full font-manjari text-center font-medium focus:outline-none whitespace-nowrap select-none',
        className,
        {
          [ButtonSizeClasses[size]]: !IconOnly,
          [classNames(ButtonIconSizeClassName, 'justify-center items-center')]:
            IconOnly,
          [classNames(
            ButtonVariantClassName.default,
            ButtonVariantClassName.hover,
            ButtonVariantClassName.focus
          )]: !disabled,
          [classNames(ButtonVariantClassName.disabled, 'cursor-not-allowed')]:
            disabled,
        }
      )}
    >
      {LeadingIcon ? (
        <LeadingIcon.type
          {...LeadingIcon.props}
          className={classNames(
            {
              'mr-2': size !== 'lg',
              'mr-3': size === 'lg',
            },
            LeadingIcon.props.className
          )}
        />
      ) : null}
      <span
        className={classNames({
          'mt-1': size === 'sm',
          'mt-1.5': size === 'md',
          'mt-[6px]': size === 'lg',
        })}
      >
        {children}
      </span>
      {IconOnly ? (
        <IconOnly.type {...IconOnly.props} size={size === 'lg' ? 24 : 20} />
      ) : null}
      {TrailingIcon ? (
        <TrailingIcon.type
          {...TrailingIcon.props}
          className={classNames({
            'ml-2': size !== 'lg',
            'ml-3': size === 'lg',
          })}
        />
      ) : null}
    </button>
  );
};

// export type ButtonProps = {
//   full?: boolean;
//   outline?: boolean;
//   className?: string;
//   children?: ReactNode;
//   onClick?: () => void;
//   [key: string]: any;
// };

// export const Button = ({
//   full,
//   outline,
//   className,
//   children,
//   ...props
// }: ButtonProps) => {
//   if (full) {
//     return (
//       <button
//         className={`my-auto flex w-full items-center
//       justify-center  rounded-full bg-gradient-to-r
//      from-yellow-300 to-yellow-800 py-1
//      pt-3 font-dmserif text-yellow-900  hover:from-yellow-800 hover:to-yellow-800 focus:outline-none ${className}`}
//         {...props}
//       >
//         {children}
//       </button>
//     );
//   }

//   if (outline) {
//     return (
//       <button
//         className={`items-center  justify-center rounded-full
//       border-2 border-yellow-500 bg-white
//       py-1 px-2 pt-2 text-yellow-900 hover:border-white hover:bg-gradient-to-r
//       hover:from-yellow-300 hover:to-yellow-800 md:px-4
//       md:pt-2 ${className}`}
//         {...props}
//       >
//         {children}
//       </button>
//     );
//   }

//   return (
//     <button
//       className={`flex  items-center justify-center
//     rounded-full bg-gradient-to-r from-yellow-300
//     to-yellow-800 py-1 px-6 pt-3  text-yellow-900 hover:from-yellow-800 hover:to-yellow-800 focus:outline-none ${className}`}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// };

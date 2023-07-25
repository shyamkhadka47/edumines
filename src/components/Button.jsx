'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Button = ({
  name = '',
  icon,
  disabled = false,
  type = 'button' | 'submit' | 'reset',
  className = '',
  kind = 'primary' |
    'primary-hovered' |
    'secondary' |
    'secondary-hovered' |
    'info' |
    'info-hovered' |
    'warning' |
    'warning-hovered' |
    'error' |
    'error-hovered' |
    'success' |
    'success-hovered' |
    'grey' |
    'grey-hovered' |
    'dark' |
    'dark-hovered',
  onClick = () => {},
  others,
}) => {
  let btnKind = '';

  switch (kind) {
    case 'primary':
      btnKind = `text-white ${
        disabled
          ? 'border-primary-200 bg-primary-200'
          : 'hover:bg-white border-primary-main bg-primary-main hover:text-primary-main hover:border-primary-main'
      }`;
      break;
    case 'primary-hovered':
      btnKind = `bg-white ${
        disabled
          ? 'border-primary-200 text-primary-200'
          : 'border-primary-main text-primary-main hover:bg-primary-main hover:text-white'
      }`;
      break;
    case 'secondary':
      btnKind = `text-white ${
        disabled
          ? 'border-secondary-200 bg-secondary-200'
          : 'hover:bg-white border-secondary-main bg-secondary-main hover:text-secondary-main hover:border-secondary-main'
      }`;
      break;
    case 'secondary-hovered':
      btnKind = `bg-white ${
        disabled
          ? 'border-secondary-200 text-secondary-200'
          : 'border-secondary-main text-secondary-main hover:bg-secondary-main hover:text-white'
      }`;
      break;
    case 'info':
      btnKind = `text-white ${
        disabled
          ? 'border-info-200 bg-info-200'
          : 'hover:bg-white border-info-main bg-info-main hover:text-info-main hover:border-info-main'
      }`;
      break;
    case 'info-hovered':
      btnKind = `bg-white ${
        disabled
          ? 'border-info-200 text-info-200'
          : 'border-info-main text-info-main hover:bg-info-main hover:text-white'
      }`;
      break;
    case 'warning':
      btnKind = `text-white ${
        disabled
          ? 'border-warning-200 bg-warning-200'
          : 'hover:bg-white border-warning-main bg-warning-main hover:text-warning-main hover:border-warning-main'
      }`;
      break;
    case 'warning-hovered':
      btnKind = `bg-white ${
        disabled
          ? 'border-warning-200 text-warning-200'
          : 'border-warning-main text-warning-main hover:bg-warning-main hover:text-white'
      }`;
      break;
    case 'error':
      btnKind = `text-white ${
        disabled
          ? 'border-error-200 bg-error-200'
          : 'hover:bg-white border-error-main bg-error-main hover:text-error-main hover:border-error-main'
      }`;
      break;
    case 'error-hovered':
      btnKind = `bg-white ${
        disabled
          ? 'border-error-200 text-error-200'
          : 'border-error-main text-error-main hover:bg-error-main hover:text-white'
      }`;
      break;
    case 'success':
      btnKind = `text-white ${
        disabled
          ? 'border-success-200 bg-success-200'
          : 'hover:bg-white border-success-main bg-success-main hover:text-success-main hover:border-success-main'
      }`;
      break;
    case 'success-hovered':
      btnKind = `bg-white ${
        disabled
          ? 'border-success-200 text-success-200'
          : 'border-success-main text-success-main hover:bg-success-main hover:text-white'
      }`;
      break;
    case 'grey':
      btnKind = `text-white ${
        disabled
          ? 'border-grey-500 bg-grey-500'
          : 'hover:bg-white border-grey-main bg-grey-main hover:text-grey-main hover:border-grey-main'
      }`;
      break;
    case 'grey-hovered':
      btnKind = `bg-white ${
        disabled
          ? 'border-grey-500 text-grey-500'
          : 'border-grey-main text-grey-main hover:bg-grey-main hover:text-white'
      }`;
      break;
    case 'dark':
      btnKind = `text-white ${
        disabled
          ? 'border-dark-700 bg-dark-700'
          : 'hover:bg-white border-dark-main bg-dark-main hover:text-dark-main hover:border-dark-main'
      }`;
      break;
    case 'dark-hovered':
      btnKind = `bg-white ${
        disabled
          ? 'border-dark-700 text-dark-700'
          : 'border-dark-main text-dark-main hover:bg-dark-main hover:text-white'
      }`;
      break;
    default:
      btnKind = `text-white ${
        disabled
          ? 'border-primary-200 bg-primary-200'
          : 'hover:bg-white border-primary-main bg-primary-main hover:text-primary-main hover:border-primary-main'
      }`;
      break;
  }

  return (
    <>
      <motion.button
        whileTap={{ scale: disabled ? 1 : 0.95 }}
        className={`flex gap-4 items-center border-2 min-w-max max-w-fit max-h-12 transition-default rounded-full py-2 px-4 ${btnKind} ${className}`}
        disabled={disabled}
        type={type || 'button'}
        onClick={onClick}
        {...others}
      >
        {name}
        {typeof icon === 'string' ? (
          <Image
            src={icon}
            alt="icon"
            height={25}
            width={25}
            draggable={false}
          />
        ) : (
          icon
        )}
      </motion.button>
    </>
  );
};

export default Button;

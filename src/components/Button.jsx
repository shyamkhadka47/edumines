'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
  name,
  icon,
  iconSize = 12,
  others,
  varient = 'primary' | 'secondary',
}) => {
  let btnVarient = '';
  switch (varient) {
    case 'primary':
      btnVarient = 'text-white  bg-green-900 border-green-900';
      break;

    case 'secondary':
      btnVarient = 'text-green-900 bg-white ';
      break;

    default:
      btnVarient = 'text-white  bg-green-900 border-green-900';

      break;
  }
  return (
    <>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 1 }}
        {...others}
        className={`px-6 shadow-md items-center py-3 m-1 rounded-md border flex gap-2 ${btnVarient}`}
      >
        <span className="uppercase font-semibold">{name}</span>
        {icon && (
          <div
            className={`flex items-center h-[${iconSize}px] w-[${iconSize}px]`}
          >
            {typeof icon === 'string' ? (
              <Image
                src={icon}
                alt={name}
                height={iconSize}
                width={iconSize}
                draggable={false}
              />
            ) : (
              icon
            )}
          </div>
        )}
      </motion.button>
    </>
  );
};

export default Button;

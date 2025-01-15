'use client';

import Image from 'next/image';
import React, { useState } from 'react';

const IconCard = ({
  icon = '',
  iconSize = '80',
  title = 'UI/UX Design Course',
  subTitle = '25 courses',
  others,
  hoovered = false,
}) => {
  const [isHovered, setIsHovered] = useState(hoovered);
  return (
    <div
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      className="justify-center rounded-lg w-full text-center sm:w-fit bg-white shadow-lg flex flex-col hover:bg-primary-main gap-2 items-center p-6 h-fit"
      {...others}
    >
      {icon && (
        <div
          style={{ height: iconSize + 'px', width: iconSize + 'px' }}
          className={`flex items-center justify-center ${
            isHovered ? 'text-white' : 'text-green-900'
          }`}
        >
          {typeof icon === 'string' ? (
            <Image
              src={icon}
              alt={title}
              height={iconSize}
              width={iconSize}
              draggable={false}
            />
          ) : (
            icon
          )}
        </div>
      )}

      <h1
        className={`${isHovered ? 'text-white' : 'text-black'} font-extrabold`}
      >
        {title}
      </h1>
      <p className="flex whitespace-nowrap text-white bg-secondary-main rounded-lg px-2 py-1">
        {subTitle}
      </p>
    </div>
  );
};

export default IconCard;

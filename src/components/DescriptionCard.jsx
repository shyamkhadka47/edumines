'use client';

import Image from 'next/image';
import React, { useState } from 'react';

const DescriptionCard = ({
  title,
  icon,
  iconSize = 70,
  description,
  others,
  varient = 'primary' | 'secondary',
  className

}) => {
  let cardVarient = '';
  switch (varient) {
    case 'primary':
      cardVarient = 'hover:bg-green-900 p-4 hover:text-white';
      break;
    case 'secondary':
      cardVarient = '!text-black p-4 [&>*]:text-black';
      break;

    default:
      cardVarient = 'hover:bg-primary-main p-4 hover:text-white';

      break;
  }

  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      {...others}
      className={`flex items-center m-1 gap-4 w-fit border shadow-md ${cardVarient}`}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      {icon && (
        <div
          style={{ height: iconSize + 'px', width: iconSize + 'px' }}
          className={`flex items-center self-start ${
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
      <div className="grid gap-3">
        <h1 className="font-extrabold text-xl">{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default DescriptionCard;

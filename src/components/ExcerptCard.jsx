import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const ExcerptCard = ({
  image,
  title = '',
  description = '',
  kind = 'primary' |
    'secondary' |
    'info' |
    'warning' |
    'error' |
    'success' |
    'grey' |
    'dark',
  uri = '',
}) => {
  let cardKind = ``;
  let descriptionKind = ``;
  switch (kind) {
    case 'primary':
      cardKind = `from-primary-100 text-primary-main`;
      descriptionKind = `text-primary-500`;
      break;
    case 'secondary':
      cardKind = `from-secondary-100 text-secondary-main`;
      descriptionKind = `text-secondary-500`;
      break;
    case 'info':
      cardKind = `from-info-100 text-info-main`;
      descriptionKind = `text-info-500`;
      break;
    case 'warning':
      cardKind = `from-warning-100 text-warning-main`;
      descriptionKind = `text-warning-500`;
      break;
    case 'error':
      cardKind = `from-error-100 text-error-main`;
      descriptionKind = `text-error-500`;
      break;
    case 'success':
      cardKind = `from-success-100 text-success-main`;
      descriptionKind = `text-success-500`;
      break;
    case 'grey':
      cardKind = `from-grey-500 text-grey-main`;
      descriptionKind = `text-grey-800`;
      break;
    case 'dark':
      cardKind = `from-dark-700 text-dark-main`;
      descriptionKind = `text-black`;
      break;
    default:
      cardKind = `from-primary-100 text-primary-main`;
      descriptionKind = `text-primary-500`;
      break;
  }
  const [showDescription, setShowDescription] = React.useState(false);

  return (
    <>
      <motion.a
        className={`relative cursor-pointer transition-default overflow-hidden h-80 max-w-lg shadow-lg rounded-2xl m-4`}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.9 }}
        href={uri}
        onMouseEnter={() => setShowDescription(true)}
        onMouseLeave={() => setShowDescription(false)}
      >
        {typeof image === 'string' ? (
          <Image
            src={image}
            alt={title || 'cover image'}
            fill
            draggable={false}
          />
        ) : (
          image
        )}
        <div
          className={`absolute bottom-0 w-full grid px-4 gap-2 py-8 bg-gradient-to-t ${cardKind}`}
        >
          <h1 className="text-3xl font-bold">{title}</h1>
          <p
            style={{
              maxHeight: showDescription ? '7rem' : '0rem',
            }}
            className={`text-xl transition-default overflow-clip w-full px-2 ${descriptionKind}`}
          >
            {description}
          </p>
        </div>
      </motion.a>
    </>
  );
};

export default ExcerptCard;

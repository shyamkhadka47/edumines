import React from 'react';
import Image from 'next/image';
import { MdKeyboardArrowRight } from 'react-icons/md';

const BackgroundCard = ({
  className = '',
  others,
  image,
  title = '',
  description = '',
  excerpt = '',
  links = [
    {
      title: '',
      uri: '',
    },
  ],
  justify = 'justify-start' | 'justify-center' | 'justify-end' | '',
  kind = 'primary' |
    'secondary' |
    'info' |
    'warning' |
    'error' |
    'success' |
    'grey' |
    'dark',
}) => {
  let cardKind = '';
  let cardTitleKind = '';
  let cardDescriptionKind = '';
  let cardExcerptKind = '';
  switch (kind) {
    case 'primary':
      cardKind = `hover:bg-primary-100`;
      cardTitleKind = 'text-primary-400';
      cardDescriptionKind = 'text-primary-400';
      cardExcerptKind = 'text-primary-400';
      break;
    case 'secondary':
      cardKind = `hover:bg-secondary-100`;
      cardTitleKind = 'text-secondary-400';
      cardDescriptionKind = 'text-secondary-400';
      cardExcerptKind = 'text-secondary-400';
      break;
    case 'info':
      cardKind = `hover:bg-info-100`;
      cardTitleKind = 'text-info-400';
      cardDescriptionKind = 'text-info-400';
      cardExcerptKind = 'text-info-400';
      break;
    case 'warning':
      cardKind = `hover:bg-warning-100`;
      cardTitleKind = 'text-warning-400';
      cardDescriptionKind = 'text-warning-400';
      cardExcerptKind = 'text-warning-400';
      break;
    case 'error':
      cardKind = `hover:bg-error-100`;
      cardTitleKind = 'text-error-400';
      cardDescriptionKind = 'text-error-400';
      cardExcerptKind = 'text-error-400';
      break;
    case 'success':
      cardKind = `hover:bg-success-100`;
      cardTitleKind = 'text-success-400';
      cardDescriptionKind = 'text-success-400';
      cardExcerptKind = 'text-success-400';
      break;
    case 'grey':
      cardKind = `hover:bg-grey-400`;
      cardTitleKind = 'text-grey-700';
      cardDescriptionKind = 'text-grey-700';
      cardExcerptKind = 'text-grey-700';
      break;
    case 'dark':
      cardKind = `hover:bg-dark-500`;
      cardTitleKind = 'text-primary-900';
      cardDescriptionKind = 'text-primary-900';
      cardExcerptKind = 'text-primary-900';
      break;
    default:
      cardKind = `hover:bg-primary-100`;
      cardTitleKind = 'text-primary-400';
      cardDescriptionKind = 'text-primary-400';
      cardExcerptKind = 'text-primary-400';
      break;
  }

  return (
    <>
      <section
        style={{ minHeight: '30rem' }}
        className={`shadow-md flex rounded-lg bg-grey-200 items-center overflow-hidden max-h-max py-20 min-w-full relative ${className}`}
        {...others}
      >
        {image && typeof image == 'string' ? (
          <Image src={image} alt="image" fill draggable={false} />
        ) : (
          image
        )}
        <div className={`flex w-full ${justify || 'justify-center'}`}>
          <div
            className={`div max-w-xl flex flex-col gap-6 ${cardKind} hover:bg-opacity-80 z-10 p-4 transition-default hover:shadow-lg rounded-2xl`}
          >
            <div className="grid text-center gap-4 z-10">
              {title && (
                <h1 className={`font-bold ${cardTitleKind} text-3xl`}>
                  {title}
                </h1>
              )}
              {description && (
                <p className={`font-semibold ${cardDescriptionKind} text-lg`}>
                  {description}
                </p>
              )}
              {excerpt && (
                <p className={`text-lg ${cardExcerptKind}`}>{excerpt}</p>
              )}
            </div>
            {links && (
              <ul className="flex gap-10 font-bold text-secondary-main z-10 justify-center">
                {links?.map((link, i) => {
                  return (
                    <a
                      className="flex hover:underline transition-default px-2 items-center"
                      key={i}
                      href={link.uri}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <li className="text-lg">{link.title}</li>
                      <MdKeyboardArrowRight size={25} />
                    </a>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default BackgroundCard;

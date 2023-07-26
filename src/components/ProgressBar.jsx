import React from 'react';

const ProgressBar = ({
  className = '',
  title = '',
  percentage = '',
  kind = 'primary' |
    'secondary' |
    'info' |
    'warning' |
    'error' |
    'success' |
    'grey' |
    'dark',
}) => {
  let barKind = ``;
  let progressKind = ``;
  let textKind = ``;
  switch (kind) {
    case 'primary':
      barKind = `bg-primary-100`;
      progressKind = `bg-primary-main`;
      textKind = 'text-primary-main';
      break;
    case 'secondary':
      barKind = `bg-secondary-100`;
      progressKind = `bg-secondary-main`;
      textKind = 'text-secondary-main';
      break;
    case 'info':
      barKind = `bg-info-100`;
      progressKind = `bg-info-main`;
      textKind = 'text-info-main';
      break;
    case 'warning':
      barKind = `bg-warning-100`;
      progressKind = `bg-warning-main`;
      textKind = 'text-warning-main';
      break;
    case 'error':
      barKind = `bg-error-100`;
      progressKind = `bg-error-main`;
      textKind = 'text-error-main';
      break;
    case 'success':
      barKind = `bg-success-100`;
      progressKind = `bg-success-main`;
      textKind = 'text-success-main';
      break;
    case 'grey':
      barKind = `bg-grey-300`;
      progressKind = `bg-grey-main`;
      textKind = 'text-grey-main';
      break;
    case 'dark':
      barKind = `bg-dark-500`;
      progressKind = `bg-dark-main`;
      textKind = 'text-dark-main';
      break;
    default:
      barKind = `bg-primary-100`;
      progressKind = `bg-primary-main`;
      textKind = 'text-primary-main';
      break;
  }
  return (
    <>
      <section className={`grid gap-2 p-1 w-full ${className}`}>
        <div className="flex text-lg gap-2">
          <h1 className="font-semibold">{title}</h1>
          {' - '}
          <p className={textKind}>{Math.min(percentage || 0, 100)}%</p>
        </div>
        <div className={`flex w-full rounded h-2 ${barKind}`}>
          <span
            className={`flex rounded h-full ${progressKind}`}
            style={{ width: `${Math.min(percentage || 0, 100)}%` }}
          ></span>
        </div>
      </section>
    </>
  );
};

export default ProgressBar;

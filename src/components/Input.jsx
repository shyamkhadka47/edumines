'use client';

import React from 'react';

const Input = ({
  type = React.HTMLInputTypeAttribute,
  className = '',
  name = '',
  placeholder = '',
  required = false,
  disabled = false,
  Icon = '',
  title = '',
  others,
  defaultValue = '',
  onChange = () => {},
  errMessage = '',
  register,
  inputClassName = '',
  errClassName = '',
  titleClassName = '',
}) => {
  return (
    <>
      <div
        className={`flex p-2 w-full min-w-max items-center gap-6 ${className}`}
        {...others}
      >
        {Icon}
        <div className="grid w-full">
          <label
            htmlFor={name}
            className={`uppercase font-medium w-full text-xl ${titleClassName}`}
          >
            {title}
            {/* {required && (
              <span className="text-error-main text-base align-top"> *</span>
            )} */}
          </label>
          <input
            id={name}
            {...(register
              ? { ...register(name, { required: required }) }
              : null)}
            type={type}
            name={name}
            required={required}
            disabled={disabled}
            placeholder={placeholder}
            defaultValue={defaultValue}
            onChange={onChange}
            className={`flex border-b-2 pr-4 w-full text-lg h-8 ${inputClassName}`}
          />
          <span
            className={` text-red-400 w-full ${errClassName}`}
            style={{ minHeight: '1.5rem' }}
          >
            {errMessage}
          </span>
        </div>
      </div>
    </>
  );
};

export default Input;

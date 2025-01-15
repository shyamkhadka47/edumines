import React from 'react';
import { UseFormRegister } from 'react-hook-form';

const Textarea = ({
  className = '',
  name = '',
  placeholder = '',
  required = false,
  disabled = false,
  Icon,
  title = '',
  others,
  defaultValue = '',
  onChange = () => {},
  errMessage = '',
  register,
  textareaClassName = '',
  errClassName = '',
  titleClassName = '',
  rows = 3,
  cols = 1,
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
          </label>
          <textarea
            id={name}
            {...(register
              ? { ...register(name, { required: required }) }
              : null)}
            name={name}
            required={required}
            disabled={disabled}
            placeholder={placeholder}
            defaultValue={defaultValue}
            onChange={onChange}
            cols={cols}
            rows={rows}
            className={`flex border-b-2 pr-4 w-full text-lg ${textareaClassName}`}
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

export default Textarea;

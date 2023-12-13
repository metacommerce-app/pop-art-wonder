import React, { InputHTMLAttributes } from 'react';
export type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ children, ...props }) => {
  return (
    <div className={`block w-full h-fit text-black ${props.className}`}>
      <input {...props} className={`block w-full h-fit bg-white text-black rounded-md border-2 py-2 px-1 placeholder:text-zinc-400 focus:outline-0 sm:text-base sm:leading-6`}/>
      {children}
    </div>
  );
};


export default Input;

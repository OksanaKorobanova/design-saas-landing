import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type TagProps = HTMLAttributes<HTMLDivElement>;

const Tag = ({ className, children, ...otherProps }: TagProps) => {
  return (
    <div
      className={twMerge(
        'inline-flex border border-lime-400 gap-2 text-lime-400 px-3 py-1 rounded-full uppercase items-center',
        className
      )}
      {...otherProps}>
      <span>&#10038;</span>
      <span className='text-sm'>{children}</span>
    </div>
  );
};

export default Tag;

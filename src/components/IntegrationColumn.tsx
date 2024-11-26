import { type IntegrationsType } from '@/sections/Integrations';
import Image from 'next/image';
import React from 'react';
import { twMerge } from 'tailwind-merge';

type IntegrationColumnProps = {
  integrations: IntegrationsType;
  className?: string;
};

const IntegrationColumn = ({
  integrations,
  className,
}: IntegrationColumnProps) => {
  return (
    <div className={twMerge('flex flex-col gap-4 pb-4', className)}>
      {integrations.map(({ name, icon, description }) => (
        <div
          key={name}
          className='bg-neutral-900 border border-white/10 rounded-3xl p-6'>
          <div className='flex justify-center'>
            <Image src={icon} alt={name} className='size-24' />
          </div>
          <h3 className='text-3xl text-center mt-6'>{name}</h3>
          <p className='text-center text-white/50 mt-2'>{description}</p>
        </div>
      ))}
    </div>
  );
};

export default IntegrationColumn;

import Image from 'next/image';
import React from 'react';
import { cn } from '@/lib/utils';

interface HomeCardProps {
  className?: string;
  img: string;
  title: string;
  description: string;
  handleClick?: () => void;
}

const HomeCard = ({ className, img, title, description, handleClick }: HomeCardProps) => {
  return (
    <section  className={cn(
      'bg-orange-1 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer',
      className
    )} onClick={()=>{handleClick}}  >
      <div className='flex-center grassmorphism size-12 rounded-[10px]'>
        <img src={img} alt='meeting' className='w-6 h-6 '  height={27} width={27}/>

      </div>
      <div className='flex flex-col gap-2 '>
      <h2 className='text-2xl font-bold'> {title} </h2>
      <p className='text-lg font-normal'>{description}</p>

      </div>  
     </section>

  );
}


export default HomeCard;

'use client'
import React from 'react';
import { sideBarLinks } from '../../../Constans';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const sidebar = () => {
  const pathname = usePathname()
  return (
    <section className='sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-800 p-6 pt-20 text-white max-sm:hidden lg:w-[264px]'>
      <div className='flex flex-  flex-col gap-6'>
{ sideBarLinks.map((link)=>{
  const isActive = pathname===link.route ;
  // || pathname.startsWith(link.route)
  function cn(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }
  return (
    <Link  
    href={link.route} 
    key={link.label}
    className={cn('flex gap-4 items-center p-4 rounded-lg justyfy-start', isActive ? 'bg-blue-400' : '')}
    >
   <Image src={link.imgUrl} alt={link.label} width={24} height={24}/>
   <p className='text-lg font-semibold max-lg:hidden'>{link.label}</p>
    </Link>
  )
})}
      </div>
      
      
    </section>
  );
}

export default sidebar;

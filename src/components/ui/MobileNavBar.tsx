'use client'
import React from 'react';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image';
import Link from 'next/link';
import { sideBarLinks } from '../../../Constans';
import { usePathname } from 'next/navigation';

const MobileNavBar = () => {
    const pathname = usePathname();
  return (
    <section className='w-full flex-between max-w-[264px]'>
      <Sheet>
  <SheetTrigger asChild>
    <Image src='/icons/hamburger.svg' alt='humburger logo' width={36} height={36} className='cursor-pointer sm:hidden'/>
  </SheetTrigger>
  <SheetContent side='left' className='w-full max-w-[264px] bg-black text-white'>
  <Link href='/' className='flex items-center gap-1'>
<Image src="/icons/logo.svg" alt="logo " 
width={32}
height={32}
className='max-sm:size-10'
/>
<p className='text-[26px] font-extrabold text-white '>VCall</p>

       </Link>
       <div className='flex flex-col h-[calc(100vh-72px)] justify-between overflow-y-auto'>

        <SheetClose asChild>
            <section className='flex flex-col gap-6 pt-16 text-white'>
            { sideBarLinks.map((link)=>{
  const isActive = pathname===link.route ;
//   || pathname.startsWith(link.route)
  function cn(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }
  return (
    <SheetClose asChild key={link.route}>
    <Link  
    href={link.route} 
    key={link.label}
    className={cn('flex gap-4 items-center p-4 rounded-lg w-full max-w-60', isActive ? 'bg-blue-400' : '')}
    >
   <Image src={link.imgUrl} alt={link.label} width={20} height={20}/>
   <p className='font-semibold '>{link.label}</p>
    </Link>
    </SheetClose>
  )
})}

            </section>
            </SheetClose>
       </div>
  </SheetContent>
</Sheet>
    </section>
  );
}

export default MobileNavBar;

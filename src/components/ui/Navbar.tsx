'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MobileNavBar from './MobileNavBar';
import { SignedIn, UserButton } from '@clerk/nextjs';

const navbar = () => {
  return (
    <>
      <nav className='flex justify-between w-full fixed z-50 px-6 py-4 lg:px-10 bg-gray-800 text-white'>
      <div className='flex items-center gap-2'>
      <Link href='/' className='flex flex-between items-center gap-1'>
<Image src="/icons/logo.svg" alt="logo " 
width={32}
height={32}
className='max-sm:size-10'
/>
<p className='text-[26px] font-extrabold text-white max-sm:hidden'>VCall</p>

       </Link>
      </div>
       <div className='flex flex-between gap-5'>
{/* clerk user management */}
<SignedIn>
              <UserButton />
            </SignedIn>
<MobileNavBar/>

       </div>
      
      </nav>
    </>
  );
}

export default navbar;

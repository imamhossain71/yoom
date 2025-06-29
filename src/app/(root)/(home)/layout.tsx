import React, { Children, ReactNode } from 'react';
import Navbar from '@/components/ui/Navbar';// Adjusted the path to match the correct location and casing
//import { Sidebar } from 'lucide-react';
import Sidebar from '@/components/ui/SideBar';
// import './globals.css';

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className='relative bg-zinc-900'>
        <Navbar />

        

        <div className='flex'>
<Sidebar/>
<section className=' flex main-h-screen flex-1 flex-col px-6 pb-6 pt-20 max-md:pb-14 sm:px-14'>
    <div className='w-full'>
    {children}
    </div>
    </section>
        </div>
      
    </main>
  );
}

export default HomeLayout;

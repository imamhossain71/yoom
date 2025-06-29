// import MeetingListPage from '@/components/ui/MeetingList';
import MeetingListPage from '@/components/ui/MeetingList';
import React from 'react';

const Home = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  const formattedTime = currentDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
  
  return (
    <section className='flex size-full flex-col gap-10 text-white'>
     <div className='h-[300px] w-full rounded-[20px] bg-[url("/images/hero-background.png")] bg-cover bg-center'>
<div className='flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11'>
<h2 className='glassmorphism max-w-[270px] py-2 text-center text-base font-normal rounded '>Upcomming Meeting at: 12:30 PM</h2>
<div className='flex flex-col gap-2'>
  <h1 className='text-4xl font-extrabold lg:text-7xl'>
    {formattedTime}
  </h1>
  <p className='text-lg font-medium text-syk-1 lg:2xl'>{formattedDate}</p>

</div>
</div>
     </div>
     <MeetingListPage />
     
    </section>
  );
}

export default Home;

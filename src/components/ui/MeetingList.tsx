'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import HomeCard from './HomeCard';
// Adjust the import path as necessary



const MeetingListPage = () => {
  const router = useRouter(); // Add useRouter hook to define router

const MeetingTypeList = () => {
  const [meetingTypeList, setMeetingTypeList] = useState<'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeetin' | undefined>();

  // Example usage or return statement
  return (
    <div>
      <p>Meeting Type: {meetingTypeList}</p>
    </div>
  );
};
  function setMeetingState(arg0: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <section className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4'>
      <HomeCard
        img='/icons/add-meeting.svg'
        title='New Meeting'
        description='Start an Instant Meeting'
        handleClick={() => setMeetingState('isJoiningMeeting')}
        className='bg-orange-400 hover:bg-orange-500 transition-colors duration-300 ease-in-out'
      />
      <HomeCard
        img='/icons/schedule.svg'
        title='Schedule Meeting'
        description='Plan Your Meeting'
        handleClick={() => setMeetingState('isScheduleMeeting')}
        className='bg-blue-400 hover:bg-blue-500 transition-colors duration-300 ease-in-out'
      />
      <HomeCard
        img='/icons/recordings.svg'
        title='View Recordings'
        description='Access Your Meeting Recordings'
        handleClick={() => router.push('/recordings')}
        className='bg-purple-400 hover:bg-purple-500 transition-colors duration-300 ease-in-out'
      />
      <HomeCard
        img='/icons/join-meeting.svg'
        title='Join Meeting'
        description='Join an Existing Meeting'
        handleClick={() => setMeetingState('isJoiningMeeting')}
        className='bg-yellow-400 hover:bg-yellow-500 transition-colors duration-300 ease-in-out'
      />
    </section>
  );
};

export default MeetingListPage;

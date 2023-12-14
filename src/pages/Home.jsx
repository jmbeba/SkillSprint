import CourseList from '@/components/CourseList'
import React from 'react'
import { useState } from 'react';
import { Loader2 } from 'lucide-react';

const Home = () => {
 const [isLoading, setIsLoading] = useState(false);

  return (
    <div className='pb-10'>
      {isLoading ? (
        <div className='w-full h-screen flex flex-col items-center justify-center'>
          <Loader2 size={48} className='animate-spin'/>
          <span className='mt-4 text-[28px]'>Hang tight. Loading courses</span>
        </div>
      ) : (
        <CourseList />
      )}
    </div>
  );
}

export default Home
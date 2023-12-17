import CourseList from '@/components/CourseList'
import React from 'react'
import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { useEffect } from 'react';
import { BASE_URL } from '@/utils';

const Home = () => {
 const [isLoading, setIsLoading] = useState(false);
 const [courses, setCourses] = useState([]);

 useEffect(() => {
   const fetchCourses = () => {
    setIsLoading(true)
     fetch(`${BASE_URL}/courses`)
       .then((res) => res.json())
       .then((courses) => {
        setCourses(courses);
        setIsLoading(false)
       })
       .catch((err) => console.log(err));
   };

   fetchCourses();
 }, []);

  return (
    <div className='pb-10'>
      {isLoading ? (
        <div className='w-full h-screen flex flex-col items-center justify-center'>
          <Loader2 size={48} className='animate-spin'/>
          <span className='mt-4 text-[28px]'>Hang tight. Loading courses</span>
        </div>
      ) : (
        <CourseList courses={courses}/>
      )}
    </div>
  );
}

export default Home
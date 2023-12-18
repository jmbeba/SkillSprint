import CourseList from "@/components/CourseList";
import React from "react";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { BASE_URL } from "@/utils";
import SearchBar from "@/components/SearchBar";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCourses = () => {
      setIsLoading(true);
      fetch(`${BASE_URL}/courses`)
        .then((res) => res.json())
        .then((courses) => {
          setCourses(courses);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    };

    fetchCourses();
  }, []);

  const renderedCourses = courses.filter(({title}) => {
    if(!search) return true;

    return title.includes(search);
  })

  return (
    <div className="pb-10">
      {isLoading ? (
        <div className="w-full h-screen flex flex-col items-center justify-center">
          <Loader2 size={48} className="animate-spin" />
          <span className="mt-4 text-[28px]">Hang tight. Loading courses</span>
        </div>
      ) : (
        <div>
          <SearchBar setSearch={setSearch}/>
          <CourseList courses={renderedCourses} />
        </div>
      )}
    </div>
  );
};

export default Home;

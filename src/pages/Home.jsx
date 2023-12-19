import CourseList from "@/components/CourseList";
import React from "react";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { BASE_URL } from "@/utils";
import SearchBar from "@/components/SearchBar";
import FilterBar from "@/components/FilterBar";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [courses, setCourses] = useState([
    {
      id: 41,
      category: "Engineering",
      start_date: "2024-01-08T00:00:00",
      created_at: null,
      title: "Fundamentals of Engineering 202",
      description:
        "Discover effective tools businesses use to thrive in the digital era.This course covers the fundamentals of Principles of Engineering 101.Explore the evolving landscape of Principles of Engineering 101.",
      image:
        "https://images.unsplash.com/photo-1664575601711-67110e027b9b?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      end_date: "2024-04-06T00:00:00",
      students: [],
    },
  ]);
  const [search, setSearch] = useState("");

  const [selectedCategories, setSelectedCategories] = useState([])

  console.log(selectedCategories)

  // useEffect(() => {
  //   const fetchCourses = () => {
  //     setIsLoading(true);
  //     fetch(`${BASE_URL}/courses`)
  //       .then((res) => res.json())
  //       .then((courses) => {
  //         setCourses(courses);
  //         setIsLoading(false);
  //       })
  //       .catch((err) => console.log(err));
  //   };

  //   fetchCourses();
  // }, []);

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
          <div className="mt-5 mx-14 flex items-center justify-between">
            <SearchBar setSearch={setSearch} />
            <FilterBar selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />
          </div>
          <CourseList courses={renderedCourses} />
        </div>
      )}
    </div>
  );
};

export default Home;

import { usePagination } from "@mantine/hooks";
import { ChevronLeft, ChevronRight, Ghost } from "lucide-react";
import CourseCard from "./CourseCard";
import { Button } from "./ui/button";
import { useEffect } from "react";
import { BASE_URL } from "@/utils";
import { useState } from "react";

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = () => {
      fetch(`${BASE_URL}/courses`)
        .then((res) => res.json())
        .then((courses) => setCourses(courses))
        .catch((err) => console.log(err));
    };

    fetchCourses();
  }, []);

  const totalPages = Math.ceil(courses.length / 9);

  const limit = 9;

  const pagination = usePagination({
    total: totalPages,
    initialPage: 1,
  });

  const startIndex = (pagination.active - 1) * limit;
  const endIndex = pagination.active * limit;

  if (courses.length === 0) {
    return (
      <div className="mt-20 w-full flex flex-col items-center">
        <Ghost className="w-12 h-12"/>
        <h1 className="text-[28px] font-semibold">
          Sorry. Seems like the course list is empty.
        </h1>
      </div>
    );
  }

  return (
    <>
      <div className="mt-10 w-full flex justify-center">
        <div className=" grid grid-cols-3 gap-10">
          {courses.slice(startIndex, endIndex).map((course) => (
            <CourseCard {...course}/>
          ))}
        </div>
      </div>
      <div className="mt-10 w-full flex items-center justify-center gap-2">
        <Button
          onClick={() => pagination.previous()}
          variant="outline"
          size="icon"
          disabled={pagination.active === 1}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        {pagination.range.map((page) => (
          <Button
            onClick={() => pagination.setPage(page)}
            variant={`${pagination.active === page ? "default" : "outline"}`}
            size="icon"
            disabled={page === "dots"}
          >
            {page === "dots" ? "..." : page}
          </Button>
        ))}
        <Button
          onClick={() => pagination.next()}
          variant="outline"
          disabled={pagination.active === totalPages}
          size="icon"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
};

export default CourseList;

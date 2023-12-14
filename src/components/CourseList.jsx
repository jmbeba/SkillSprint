import { usePagination } from "@mantine/hooks";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CourseCard from "./CourseCard";
import { Button } from "./ui/button";

const CourseList = () => {
  const mockCourses = new Array(12).fill(1);
  const totalPages = Math.ceil(mockCourses.length / 9);

  const limit = 9;
  
  const pagination = usePagination({
    total: totalPages,
    initialPage: 1,
  });

  const startIndex = (pagination.active - 1) * limit;
  const endIndex = pagination.active * limit;

  return (
    <>
      <div className="mt-10 w-full flex justify-center">
        <div className=" grid grid-cols-3 gap-10">
          {mockCourses.slice(startIndex, endIndex).map((_, index) => (
            <CourseCard />
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

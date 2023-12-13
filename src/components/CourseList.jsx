import CourseCard from "./CourseCard";

const CourseList = () => {
  return (
    <div className="mt-10 w-full flex justify-center">
      <div className=" grid grid-cols-3 gap-10">
        {new Array(12).fill(1).map((_, index) => (
          <CourseCard />
        ))}
      </div>
    </div>
  );
};

export default CourseList;

import CourseList from "@/components/CourseList";
import FilterBar from "@/components/FilterBar";
import SearchBar from "@/components/SearchBar";
import { Badge } from "@/components/ui/badge";
import { BASE_URL } from "@/utils";
import { Loader2, X } from "lucide-react";
import { useEffect, useState } from "react";

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
  const [sortBy, setSortBy] = useState("default");

  const [selectedCategories, setSelectedCategories] = useState([]);


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

  const renderedCourses = courses.filter(({ title, category }) => {
    const categoryMatch =
      selectedCategories.length > 0
        ? selectedCategories.includes(category)
        : true;

    const searchMatch = search ? title.includes(search) : true;

    return categoryMatch && searchMatch;
  });

  renderedCourses.sort((a, b) => {
    if (sortBy === "default") return true;

    if (sortBy === "a-z") {
      return a.title > b.title ? 1 : -1;
    }

    if (sortBy === "z-a") {
      return a.title < b.title ? 1 : -1;
    }
  });

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
            <FilterBar
              sortBy={sortBy}
              setSortBy={setSortBy}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
            />
          </div>
          {selectedCategories.length > 0 && (
            <div className="mx-14 mt-7 flex items-center">
              Filtered by:
              <div className="ml-4 flex items-center gap-2">
                {selectedCategories.map((category) => (
                  <Badge className="h-7 flex items-center gap-4 hover:bg-primary ">
                    <span>{category}</span>
                    <X
                      size={14}
                      className="hover:bg-secondary/40 rounded-full cursor-pointer"
                      onClick={() => {
                        const filteredCategories = selectedCategories.filter(
                          (cat) => category !== cat
                        );

                        setSelectedCategories(filteredCategories);
                      }}
                    />
                  </Badge>
                ))}
              </div>
            </div>
          )}
          <CourseList courses={renderedCourses} />
        </div>
      )}
    </div>
  );
};

export default Home;

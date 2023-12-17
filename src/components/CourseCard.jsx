import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock3 } from "lucide-react";
import { Button } from "./ui/button";

import { differenceInCalendarDays, differenceInCalendarWeeks } from "date-fns";
import { Link } from "react-router-dom";
import BookModal from "./BookModal";

const CourseCard = ({ id, title, description, category, start_date, end_date }) => {
  const start = new Date(start_date);
  const end = new Date(end_date);

  let courseDuration = `${differenceInCalendarWeeks(end, start)} weeks`;

  if(courseDuration == '0 weeks'){
    courseDuration = `${differenceInCalendarDays(end, start)} days`;
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <div className="h-[200px]">
          <AspectRatio>
            <img
              className="rounded-[0.125rem]"
              src="https://images.unsplash.com/photo-1664575601711-67110e027b9b?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="card-image"
            />
          </AspectRatio>
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Badge variant={"secondary"}>{category}</Badge>
        <p className="mt-4 flex items-center gap-3">
          <Clock3 size={18} /> <span>{courseDuration}</span>
        </p>
      </CardContent>
      <CardFooter>
        <BookModal courseId={id} courseName={title}/>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;

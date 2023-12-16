import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Clock3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import { Link } from "react-router-dom";
import { differenceInCalendarWeeks, intervalToDuration } from "date-fns";

const CourseCard = ({title, description, category, start_date, end_date}) => {
  const start = new Date(start_date)
  const end = new Date(end_date)

  const courseDuration = differenceInCalendarWeeks(end, start)

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
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Badge variant={"secondary"}>{category}</Badge>
        <p className="mt-4 flex items-center gap-3">
          <Clock3 size={18} /> <span>{courseDuration} weeks</span>
        </p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="default">
          <Link to={"/courses/id"}>See more details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;



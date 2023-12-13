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

const CourseCard = () => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Business negotiation 101</CardTitle>
        <CardDescription>
          Business Negotiation 101 is an introductory course designed to equip
          students with the fundamental skills and strategies necessary to excel
          in the art of negotiation within a business context.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Badge variant={'secondary'}>Business</Badge>
        <p className="mt-4 flex items-center gap-3">
          <Clock3 size={18} /> <span>5 weeks</span>
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="default">See more details</Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;

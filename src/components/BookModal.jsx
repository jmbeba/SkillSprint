import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { BASE_URL } from "@/utils";
import { useNavigate } from "react-router-dom";
import { useToast } from "./ui/use-toast";

const BookModal = ({ courseId, courseName }) => {
  const navigate = useNavigate();
  const {toast} = useToast();

  const initialData = {
    name: "",
    phone: "",
  };

  const [formData, setFormData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleForm = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const data = {
      ...formData,
      course_id: courseId,
      enrollment_date: new Date(),
    };


    fetch(`${BASE_URL}/enrollments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message) {
            toast({
                title:"Enrollment successful",
                description:res.message
            })
        } else {
             toast({
               title: "Enrollment unsuccessful",
               description: res.detail,
               variant: "destructive",
             });
        }

        setIsLoading(false);
      })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        }); 
      });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Enroll now</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="pt-5">Enroll for {courseName}</DialogTitle>
          <DialogDescription>
            Enter your details and click on the enroll button
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleForm} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              placeholder="John Doe"
              className="col-span-3"
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Phone
            </Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              placeholder="0712345678"
              className="col-span-3"
              onChange={handleChange}
              required
            />
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                ""
              )}
              {isLoading ? "Enrolling for course..." : "Enroll"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookModal;

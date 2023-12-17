import React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "./ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { BASE_URL } from "@/utils";
import { useEffect } from "react";
import { useToast } from "./ui/use-toast";

const courseCategories = [
  "Business",
  "Computer Science",
  "Food & Nutrition",
  "Education",
];

const courseSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: "Title must be at least 2 characters",
    })
    .max(50, {
      message: "Title must be not more than 50 characters",
    }),
  image: z.string().url({
    message: "The image url must be valid",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters",
  }),
  category: z.enum(courseCategories),
  dateRange: z.object({
    to: z.date(),
    from: z.date(),
  }),
});

const CreateCourseForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const createCourseForm = useForm({
    resolver: zodResolver(courseSchema),
    defaultValues: {
      title: "",
      description: "",
      image: "",
      category:""
    },
  });

  const { isSubmitSuccessful } = createCourseForm.formState;
  const reset = createCourseForm.reset;

  const onSubmit = ({ title, description, category, image, dateRange }) => {
    setIsLoading(true);
    fetch(`${BASE_URL}/courses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        category,
        image,
        start_date: dateRange.from,
        end_date: dateRange.to,
      }),
    })
      .then((res) => {
        setIsLoading(false);
         toast({
           title: "Course creation successfull",
           description: "Your course has been added to the course list",
         });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div className="flex flex-col gap-4 pt-[10rem] pb-10">
      <h1 className="font-bold text-[36px]">Create course form</h1>
      <Form {...createCourseForm}>
        <form
          className="w-[350px] space-y-4"
          onSubmit={createCourseForm.handleSubmit(onSubmit)}
        >
          <FormField
            control={createCourseForm.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Business 101" {...field} />
                </FormControl>
                <FormDescription>
                  This is the name of the course.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={createCourseForm.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe the course"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This is the description of the course.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={createCourseForm.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image</FormLabel>
                <FormControl>
                  <Input placeholder="https://unsplash.com" {...field} />
                </FormControl>
                <FormDescription>This is the url of the image.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={createCourseForm.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {courseCategories.map((category) => (
                      <SelectItem value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>Choose a category in the list</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={createCourseForm.control}
            name="dateRange"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Course duration</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id="date"
                      variant={"outline"}
                      className={cn(
                        "w-[300px] justify-start text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {field.value?.from ? (
                        field.value.to ? (
                          <>
                            {format(field.value.from, "LLL dd, y")} -{" "}
                            {format(field.value.to, "LLL dd, y")}
                          </>
                        ) : (
                          format(field.value.from, "LLL dd, y")
                        )
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      initialFocus
                      mode="range"
                      defaultMonth={field.value?.from}
                      selected={field.value}
                      onSelect={field.onChange}
                      numberOfMonths={2}
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  This range is used to calculate the course duration
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : ""}
            {isLoading ? "Creating course..." : "Create"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateCourseForm;

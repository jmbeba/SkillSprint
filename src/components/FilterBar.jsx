import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Filter } from "lucide-react";
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

const FilterBar = ({ setSelectedCategories, selectedCategories }) => {
  const sortOptions = [
    {
      value: "default",
      name: "Default",
    },
    {
      value: "a-z",
      name: "Name (A-Z)",
    },
    {
      value: "z-a",
      name: "Name (Z-A)",
    },
  ];

  const courseCategories = [
    "Business",
    "Computer Science",
    "Data Science",
    "Engineering",
    "Mathematics",
    "Physics",
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="secondary">
          <Filter />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filter and sort courses</SheetTitle>
          <SheetDescription>Set filters for available courses</SheetDescription>
        </SheetHeader>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Sort</AccordionTrigger>
            <AccordionContent>
              <RadioGroup className="ml-5" defaultValue={sortOptions[0].value}>
                {sortOptions.map(({ value, name }) => (
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value={value} id={value} />
                    <Label htmlFor={value}>{name}</Label>
                  </div>
                ))}
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Category </AccordionTrigger>
            <AccordionContent>
              {courseCategories.map((category) => (
                <div className="flex items-center space-x-2 mt-2">
                  <Checkbox
                    className="h-5 w-5 rounded-full"
                    id={category}
                    onClick={() => {
                      if (selectedCategories.includes(category)) {
                        const newSelectedCategories = selectedCategories.filter(
                          (cat) => cat !== category
                        );

                        setSelectedCategories(newSelectedCategories);
                      } else {
                        setSelectedCategories([
                          ...selectedCategories,
                          category,
                        ]);
                      }
                    }}
                  />
                  <label
                    htmlFor={category}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {category}
                  </label>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </SheetContent>
    </Sheet>
  );
};

export default FilterBar;

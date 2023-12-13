import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { FaArrowRightLong } from "react-icons/fa6";
import { ModeToggle } from "@/components/ModeToggle";

const Navbar = () => {
  return (
    <div className="py-4 border-b border-zinc-200 flex items-center justify-between">
      <Logo />
      <NavLinks />
      <div className="flex items-center gap-10">
        <ModeToggle />
        <Button className="flex items-center gap-4">
          <p>See your courses</p>
          <FaArrowRightLong />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;

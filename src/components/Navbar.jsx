import { ModeToggle } from "@/components/ModeToggle";
import { UserCircle } from "lucide-react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="py-4 px-5 border-b border-zinc-200 flex items-center justify-between">
      <Logo />
      <NavLinks />
      <div className="flex items-center gap-10">
        <ModeToggle />
        <Button variant='outline' size='icon'>
          <UserCircle/>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;

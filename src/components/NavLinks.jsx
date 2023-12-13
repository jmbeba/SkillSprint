import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
  const location = useLocation();

  const links = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "Create Course",
      link: "/create-course",
    },
  ];

  return (
    <div className="flex items-center gap-4">
      <NavigationMenu>
        <NavigationMenuList>
          {links.map(({text, link}) => (
            <NavigationMenuItem>
              <Link to={link}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {text}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavLinks;

import React from "react";
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
      {links.map(({ text, link }) => (
        <Link
          className={`relative after:absolute after:content-[''] after:bottom-[-2px] after:left-0 after:bg-black after:w-full after:h-[2px] ${
            link !== location.pathname ? "after:hidden" : ""
          }`}
          to={link}
        >
          {text}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;

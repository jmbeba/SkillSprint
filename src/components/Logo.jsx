import React from "react";
import { FaBook } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={'/'} className="flex items-center gap-4 font-semibold">
      <FaBook size={28} />
      <span>SkillSprint</span>
    </Link>
  );
};

export default Logo;

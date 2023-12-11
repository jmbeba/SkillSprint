import React from 'react'
import Logo from '../components/Logo';
import NavLinks from '../components/NavLinks';
import BookmarkImage from '../components/BookmarkImage';

const Navbar = () => {
  return (
    <div className="py-4 border-b border-zinc-200 flex items-center justify-between">
      <Logo />
      <NavLinks/>
      <div className='flex items-center gap-2'>
        <p>See your courses</p>
        <BookmarkImage/>
      </div>
    </div>
  );
}

export default Navbar
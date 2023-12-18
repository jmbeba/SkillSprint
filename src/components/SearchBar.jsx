import React from 'react'
import { Input } from './ui/input'
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="mt-5 max-w-xl ml-14 border rounded-md border-input flex items-center">
      <Input className=" border-none" placeholder="Search courses" />
      <div className="border-l border-l-input px-2">
        <Search className=" h-10 w-6" />
      </div>
    </div>
  );
}

export default SearchBar
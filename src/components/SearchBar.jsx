import React from 'react'
import { Input } from './ui/input'
import { Search } from 'lucide-react';

const SearchBar = ({setSearch}) => {
  return (
    <div className="w-[32rem] border rounded-md border-input flex items-center">
      <Input onChange={(e) => setSearch(e.target.value) } className=" border-none rounded-r-none" placeholder="Search courses" />
      <div className="border-l border-l-input px-2">
        <Search className=" h-10 w-6" />
      </div>
    </div>
  );
}

export default SearchBar
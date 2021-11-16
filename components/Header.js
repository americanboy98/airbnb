import React, { useState } from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/dist/client/router";

function Header( {placeholder } ) {
  const [searchInput, setSearchInput] = useState("");
  const [number, setNumber] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const router = useRouter();
  const handleSelect = (range) => {
    setStartDate(range.selection.startDate);
    setEndDate(range.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("")
  }

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        number
      }
    })
  }
 
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left section in header */}
      <div className="relative">
        <img
          onClick={() => router.push("/")}
          src="https://links.papareact.com/qd3"
          className="w-28 md:w-32 cursor-pointer"
        />
      </div>
      {/* middle section in header === search */}
      <div className="flex items-center md:border-2 rounded-full px-5 py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="bg-transparent outline-none flex-grow text-sm text-gray-600"
          type="text"
          placeholder={placeholder || "Start your search"}
        />
        <SearchIcon onClick={search} className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer hover:bg-red-300" />
      </div>
      {/* right section in header */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex border rounded-full p-2 space-x-2">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-5">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#fd5b61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              value={number}
              min="1"
              max="10"
              onChange={(e) => setNumber(e.target.value)}
              className="w-20 pl-2 text-lg text-red-500 outline-none"
              type="number"
            />
          </div>
          <div className='flex'>
            <button onClick={resetInput} className="flex-grow text-gray-500">Cancel</button>
            <button onClick={search} className="flex-grow text-red-500">Search</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;

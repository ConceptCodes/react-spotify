import Image from "next/image";
import { MusicNoteIcon, SearchIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { BellIcon } from '@heroicons/react/outline'

export default function Navbar() {
  return (
    <header className="flex sticky top-0 bg-white z-10 justify-between border-b-2 p-2 px-10">
      <div className="flex space-x-4">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center bg-green-600 rounded-full w-12 h-12">
            <MusicNoteIcon className="text-white h-6" />
          </div>
          <h1 className="text-green-600 text-xl capitalize font-medium">
            spotify
          </h1>
        </div>
        <div className="flex items-center space-x-3">
          <SearchIcon className="text-gray-300 h-6" />
          <h2 className="text-gray-300 capitalize">search songs...</h2>
        </div>
      </div>
      <div className="flex space-x-5 items-center">
          <BellIcon className="h-5 text-gray-300" />
          <div className="flex items-center space-x-2">
              <Image className="rounded-full" src="https://via.placeholder.com/25" width={25} height={25} />
              <h1>USERNAME</h1>
              <ChevronDownIcon className="h-5" />
          </div>
      </div>
    </header>
  );
}

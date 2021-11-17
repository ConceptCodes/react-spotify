import { HeartIcon } from "@heroicons/react/outline";
import { PlayIcon } from "@heroicons/react/solid";

export default function queue() {
  return (
    <figure className="flex flex-col w-1/2 px-10 py-2">
      <h1 className="text-lg text-gray-600">Playlist Name</h1>
      <ul className="overscroll-auto overflow-y-auto">
        {[...Array(6)].map((x,index) => (
          <li key={index} className="group flex items-center justify-between p-2 hover:bg-white">
            <div className="flex items-center justify-center space-y-5 space-x-3">
              <h1 className="group-hover:text-green-600 text-gray-500">0{index}.</h1>
              <div className="rounded-full flex h-12 w-12 items-center justify-center text-xl bg-gray-400 text-white group-hover:bg-green-600">
                B
              </div>
              <div className="flex flex-col">
                <h1 className="group-hover:text-green-600 text-xl">Song title</h1>
                <p className="group-hover:text-green-600 text-sm text-gray-500">author name</p>
              </div>
            </div>
            <div className="flex space-x-10">
              <HeartIcon className="text-gray-600 h-5 group-hover:text-green-600" />
              <PlayIcon className="text-gray-600 h-5 group-hover:text-green-600" />
            </div>
          </li>
        ))}
      </ul>
    </figure>
  );
}

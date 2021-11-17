import { HeartIcon } from "@heroicons/react/outline";
import { PlayIcon } from "@heroicons/react/solid";

export default function queue() {
  return (
    <figure className="flex flex-col px-10 py-2">
      <h1 className="text-lg text-gray-600">Playlist Name</h1>
      <ul className="overscroll-auto overflow-y-auto">
        {[...Array(6)].map((x,index) => (
          <li key={index} className="group cursor-pointer flex items-center justify-between p-2 hover:bg-white dark:hover:bg-gray-700">
            <div className="flex items-center justify-center space-y-5 space-x-3">
              <h1 className="hidden-mobile queue-hover dark:group-hover:text-white text-gray-500">0{index}.</h1>
              <div className="rounded-full flex h-12 w-12 items-center justify-center text-xl bg-gray-400 text-white group-hover:bg-green-600 dark:group-hover:bg-lime-600">
                B
              </div>
              <div className="flex flex-col">
                <h1 className=" text-xl dark:text-lime-600 dark:group-hover:text-white">Song title</h1>
                <p className="queue-hover queue-dark-hover text-sm text-gray-500">author name</p>
              </div>
            </div>
            <div className="flex space-x-10">
              <HeartIcon className="text-gray-600 h-5 queue-hover queue-dark-hover" />
              <PlayIcon className="text-gray-600 h-5 queue-hover queue-dark-hover" />
            </div>
          </li>
        ))}
      </ul>
    </figure>
  );
}

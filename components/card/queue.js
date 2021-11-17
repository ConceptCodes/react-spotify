import { PlayIcon, HeartIcon } from "@heroicons/react/solid";

export default function queue() {
  return (
    <figure className="flex lg:w-1/2 flex-col px-5 md:px-10 py-2 lg:border-l-4 border-gray-300 dark:border-gray-700">
      <h1 className="text-lg text-gray-600">Playlist Name</h1>
      <ul className="overscroll-auto overflow-y-auto space-y-3">
        {[...Array(6)].map((x,index) => (
          <li key={index} className="group cursor-pointer filter  drop-shadow-lg flex items-center justify-between p-2 hover:bg-white dark:hover:bg-gray-700">
            <div className="flex items-center justify-center space-x-3">
              <div className="rounded-full flex h-12 w-12 items-center justify-center text-xl bg-gray-400 text-white group-hover:bg-green-600 dark:group-hover:bg-lime-600">
                B
              </div>
              <div className="flex flex-col">
                <h1 className=" text-xl dark:text-lime-600 dark:group-hover:text-white">Song title</h1>
                <p className="queue-hover text-sm text-gray-500">author name</p>
              </div>
            </div>
            <div className="flex space-x-10">
              <HeartIcon className="text-gray-600 h-5 dark:focus:text-lime-600" />
              <PlayIcon className="text-gray-600 h-5 queue-hover" />
            </div>
          </li>
        ))}
      </ul>
    </figure>
  );
}

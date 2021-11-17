import Image from 'next/image'
import { PlayIcon } from '@heroicons/react/solid'

export default function album({ album }) {
    const { title, num_of_songs } = album
    return (
        <figure className="h-[200px] w-[100px] flex flex-col flex-grow-0 cursor-pointer filter drop-shadow-md">
            {/* <div className="rounded-full h-16 w-16 transform translate-x-36 translate-y-[275px]">
                <PlayIcon className="text-green-500" />
            </div> */}
            <img src="https://via.placeholder.com/200" className="rounded-t-xl" width="300" height="100" />
            <article className="bg-white p-3 py-5 rounded-b-xl">
                <h1>{title}</h1>
                <p className="text-gray-400">{num_of_songs} Songs</p>
            </article>
        </figure>
    )
}

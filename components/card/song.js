import Image from 'next/image'
import { PlayIcon } from '@heroicons/react/outline'

export default function song() {
    return (
        <article className="flex flex-col items-center justify-center xl:flex-row p-10 xl:space-x-10 border-b-4 lg:border-b-0 dark:border-gray-700">
            <div className="max-h-xl hidden-mobile">
                <Image className="rounded-xl" src="https://via.placeholder.com/200" width={250} height={250} alt="image title" />
            </div>
            <div className="flex flex-col items-center md:items-start  space-y-4">
                <h1 className="text-2xl dark:text-white capitalize">song title</h1>
                <h2 className="text-md capitalize text-gray-400">By ARTIST - <span className="dark:text-lime-600">YEAR</span></h2>
                <p className="text-md capitalize text-gray-800">NUM songs</p>
                <div className="flex space-x-4">
                    <button className="flex items-center bg-green-600 dark:bg-lime-600 text-white rounded-full py-2 px-6 capitalize">
                        <PlayIcon className="h-5 mr-4 text-white" />
                        play all</button>
                    <button className="border-green-600 text-green-600 dark:border-lime-600 dark:text-lime-600 border-4 rounded-full py-2 px-10 capitalize">follow</button>
                </div>
            </div>
        </article>
    )
}

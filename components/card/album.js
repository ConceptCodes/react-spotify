import Image from 'next/image'

export default function album({ album }) {
    const { title, num_of_songs } = album
    return (
        <figure className="max-w-lg cursor-pointer">
            <Image src="https://via.placeholder.com/200" className="rounded-t-xl" width={300} height={200} />
            <article className="bg-white p-3 rounded-b-xl">
                <h1>{title}</h1>
                <p className="text-gray-400">{num_of_songs} Songs</p>
            </article>
        </figure>
    )
}

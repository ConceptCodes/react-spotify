import Image from 'next/image'

export default function album({ album }) {
    const { title, num_of_songs } = album
    return (
        <figure className="max-w-md">
            <Image src="https://via.placeholder.com/200" className="rounded-t-xl" width={250} height={100} />
            <article className="bg-white p-3 rounded-b-xl">
                <h1>{title}</h1>
                <p className="text-gray-400">{num_of_songs} Songs</p>
            </article>
        </figure>
    )
}

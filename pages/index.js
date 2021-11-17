import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import AlbumCard from '../components/card/album'
import SongCard from "../components/card/song";
import QueueCard from "../components/card/queue";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const tabs = ['albums', 'playlist', 'artist', 'genres']

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Spotify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="bg-gray-100">
        <div className="flex h-[400px]">
          <SongCard />
          <QueueCard />
        </div>
        <article className="flex border-t-4 px-10 py-10 flex-col space-y-10">
          <div className="flex justify-between">
            <div>
              <ul className="flex space-x-10">
                {
                  tabs.map((x, index) => <li key={index} className="font-medium text-gray-400 hover:text-black uppercase hover:border-b-4 hover:border-black">{x}</li>)
                }
              </ul>
            </div>
            <div className="flex space-x-3">
              <div className="flex items-center justify-center bg-green-600 w-7 h-7 rounded-full">
                <ChevronLeftIcon className="text-white h-5" />
              </div>
              <div className="flex items-center justify-center bg-green-600 w-7 h-7 rounded-full">
                <ChevronRightIcon className="text-white h-5" />
              </div>
            </div>
          </div>
          <section className="grid grid-cols-4 gap-5">
            <AlbumCard album={{title: 'album mode', num_of_songs: 20}} />
            <AlbumCard album={{title: 'another album', num_of_songs: 20}} />
            <AlbumCard album={{title: 'title 4', num_of_songs: 20}} />
            <AlbumCard album={{title: 'title 3', num_of_songs: 20}} />
            <AlbumCard album={{title: 'title 1', num_of_songs: 20}} />
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}

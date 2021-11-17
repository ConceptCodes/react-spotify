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
    <div className="bg-gray-200 dark:bg-gray-800">
      <Head>
        <title>Spotify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="">
        <div className="flex flex-col xl:flex-row">
          <SongCard />
          <QueueCard />
        </div>
        <article className="flex border-t-4 border-gray-300 space-y-10 px-10 py-10 flex-col">
          <div className="flex justify-between">
            <ul className="flex space-x-10">
              {
                tabs.map((x, index) => <button key={index} className="tab-btn">{x}</button>)
              }
            </ul>
            <div className="mobile-md space-x-3">
              <button className="flex items-center justify-center bg-green-600 w-7 h-7 rounded-full">
                <ChevronLeftIcon className="text-white h-5" />
              </button>
              <button className="mobile-md items-center justify-center bg-green-600 w-7 h-7 rounded-full">
                <ChevronRightIcon className="text-white h-5" />
              </button>
            </div>
          </div>
          <section className="flex flex-row overscroll-auto overflow-x-auto gap-5">
            <AlbumCard album={{title: 'album mode', num_of_songs: 20}} />
            <AlbumCard album={{title: 'another album', num_of_songs: 20}} />
            <AlbumCard album={{title: 'title 4', num_of_songs: 20}} />
            <AlbumCard album={{title: 'title 3', num_of_songs: 20}} />
            <AlbumCard album={{title: 'title 1', num_of_songs: 20}} />
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

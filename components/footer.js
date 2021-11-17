
import {
  FastForwardIcon,
  RewindIcon,
  PlayIcon,
  RefreshIcon,
  ExternalLinkIcon,
} from "@heroicons/react/solid";
import { SpeakerphoneIcon } from "@heroicons/react/outline";

export default function footer() {
  return (
    <footer className="flex sticky bottom-0 filter drop-shadow-2xl z-60 px-10 items-center justify-between bg-white dark:bg-gray-900 h-24">
      <div className="mobile-md space-x-3">
        <img src="https://via.placeholder.com/50" width="50" height="50" />
        <div className="flex flex-col">
          <h1 className="dark:text-white">Song title</h1>
          <p className="text-gray-400 dark:text-lime-600">Artist</p>
        </div>
      </div>
      <div className="flex flex-grow items-center justify-center space-x-4">
        <RefreshIcon className="footer-icon-btn" />
        <RewindIcon className="footer-icon-btn" />
        <PlayIcon className="h-16 hover:text-green-200 text-green-600 dark:text-lime-600" />
        <FastForwardIcon className="footer-icon-btn" />
        <ExternalLinkIcon className="footer-icon-btn" />
      </div>
      <div className="flex">
        <SpeakerphoneIcon className="mobile-md text-gray-400 min-x-3xl h-5" />
        <div class="bg-gray-200 dark:bg-black rounded-full overflow-hidden">
      <div class="bg-lime-500 dark:bg-lime-400 w-1/2 h-1.5" role="progressbar" aria-valuenow="1456" aria-valuemin="0" aria-valuemax="4550"></div>
    </div>
      </div>
    </footer>
  );
}

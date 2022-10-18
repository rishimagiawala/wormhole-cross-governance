import { wormhole } from '../../../public/wormhole.jpg'
export default function NavBar1() {
  return (
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div class="flex flex-wrap justify-between items-center mx-auto">
        <a href="https://wormhole.com/" class="flex items-center">
          <img src='https://pbs.twimg.com/profile_images/1535292066397409280/r-5azuJ__400x400.jpg ' class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Wormhole</span>
        </a>

        <div class=" w-full md:block md:w-auto" id="navbar-default">
          <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" class="text-base block py-2 pr-4 pl-3 text-gray rounded">Home</a>
            </li>
            <li>
              <a href="#" class="text-base block py-2 pr-4 pl-3 text-gray-700 rounded">About</a>
            </li>
            <li>
              <a href="#" class="text-base block py-2 pr-4 pl-3 text-gray-700 rounded">Services</a>
            </li>
            <li>
              <a href="#" class="text-base block py-2 pr-4 pl-3 text-gray-700 rounded">Pricing</a>
            </li>
            <li>

              <button class="block bg-wormhole-purple hover:bg-wormhole-purple/75 text-white font-bold py-2 px-4 rounded">
                Connect Wallet
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
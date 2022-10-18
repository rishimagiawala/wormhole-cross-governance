import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import DaoDetails from '../components/daoComponents/DaoDetails'
import NavBar1 from '../components/UIComponents/NavBars/NavBar1'
export default function Home() {
  return (
    <div>
      <NavBar1 />
      <header class="bg-white">
        <div class="flex flex-wrap justify-between mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900">View DAOs</h1>
          <div class='flex flex-row'>
            <div class='mr-3'>
              <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-wormhole-purple dark:focus:border-wormhole-purple" placeholder="Search" required />
            </div>
            <button class="block bg-wormhole-blue hover:bg-wormhole-purple/75 text-white font-bold py-2 px-4 rounded text-center inline-flex items-center">


              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="mr-2 -ml-1 w-5 h-5" viewBox="0 0 24 24" fill="white" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              Create DAO

            </button>
          </div>
        </div>
      </header>
      <main>
        <div class="mx-auto py-6 sm:px-6 lg:px-8">

          <div class="px-4 py-2 sm:px-0">
            <div class="h-96 rounded-lg border-4 border-dashed border-gray-200"></div>
          </div>

        </div>
      </main>
    </div>
  )
}

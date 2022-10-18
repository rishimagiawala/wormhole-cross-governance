import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import DaoDetails from '../components/daoComponents/DaoDetails'
import NavBar1 from '../components/UIComponents/NavBars/NavBar1'
export default function Home() {
  return (
   <div>
    <NavBar1/>
    <div>
      <p>
        This will be the hero sections
      </p>
    </div>
    </div>
  )
}

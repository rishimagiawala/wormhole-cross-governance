import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import DaoDetails from './components/dao/DaoDetails'
export default function Home() {
  return (
   <div>
    <DaoDetails/>
    </div>
  )
}

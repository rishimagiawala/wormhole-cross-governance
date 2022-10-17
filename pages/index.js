import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getRealms, getAllProposals } from '@solana/spl-governance'
import { Connection, PublicKey } from '@solana/web3.js'

const programId = new PublicKey('GovER5Lthms3bLBqWub97yVrMmEogzX7xNjdXpPPCVZw');
const connection = new Connection('http://realms-realms-c335.mainnet.rpcpool.com/258d3727-bb96-409d-abea-0b1b4c48af29/','recent')

//request daos and store them in a constant
let test = async () => {
  const realms = await getRealms(connection, programId);
  console.log(realms[1].pubkey);

  //request proposals from a specific dao
  let testProposals = async () => {
    const proposals = await getAllProposals(connection, programId, realms[1422].pubkey);
    console.log(proposals);
  }
  testProposals();
}
test();

export default function Home() {
  return (
    <div>
      placeholder
    </div>
  )
}

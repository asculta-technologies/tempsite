import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/utils.module.css'
import Header from '../../components/Header.js';

export default function Technology() {
  return (
    <>
      <Head>
        <title>Asculta | Technology</title>
      </Head>
      <main className={styles.main}>

       <Header/>

        <div className={styles.center}>

            <h1>Technology</h1>

            <img className={styles.image} src="/images/Solution.png"/>

            <div className={styles.technology}>

              <h2>Patented Tech from Princeton University</h2>

              <h2>Tech Funded by the US Department of Energy</h2>

              <h2>20+ years experience in Plasma Physics</h2>
              
            </div>

        </div>
      </main>
    </>
  )
}

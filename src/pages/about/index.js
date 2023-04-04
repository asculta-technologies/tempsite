import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/utils.module.css'
import Header from '../../components/Header.js';

export default function About() {
  return (
    <>
      <Head>
        <title>Asculta | About</title>
      </Head>
      <main className={styles.main}>

      <Header/>

        <div className={styles.page}>
          <div className={styles.stack}>

            <div className={styles.center}>
              <img className={styles.logo} src='/images/Asculta1.png'/>
            </div>

            <div className={styles.center}>
              <h1>About</h1>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

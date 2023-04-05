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

        <div className={styles.page}>
          <div className={styles.stack}>

            <div className={styles.center}>
              <h1>Technology</h1>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

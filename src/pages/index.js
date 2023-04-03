import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/utils.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Asculta</title>
      </Head>
      <main className={styles.main}>

        <div className={styles.about}>

          <div className={styles.center}>
            <img className={styles.logo} src='/images/Asculta1.png'/>
          </div>

          <div className={styles.center}>
            <h1>Ensuring Structural Peace-of-Mind</h1>
          </div>

          <div className={styles.description}>

              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis cursus consequat. Vestibulum vitae iaculis mauris. Maecenas id sem semper, bibendum nunc sed, euismod orci. Vestibulum id consectetur massa, molestie egestas magna. Phasellus interdum ante eget lectus dictum accumsan. Mauris a tristique leo, non cursus augue. Proin scelerisque neque id elit mattis elementum. Quisque laoreet hendrerit nunc et eleifend. Integer quis sodales tellus, eu pretium justo. Suspendisse interdum tristique risus, et semper lacus efficitur id.
              </p>

              <h1>Our Team</h1>

              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis cursus consequat. Vestibulum vitae iaculis mauris. Maecenas id sem semper, bibendum nunc sed, euismod orci. Vestibulum id consectetur massa, molestie egestas magna. Phasellus interdum ante eget lectus dictum accumsan. Mauris a tristique leo, non cursus augue. Proin scelerisque neque id elit mattis elementum. Quisque laoreet hendrerit nunc et eleifend. Integer quis sodales tellus, eu pretium justo. Suspendisse interdum tristique risus, et semper lacus efficitur id.
              </p>

              <h1>Contact Us</h1>

              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis cursus consequat. Vestibulum vitae iaculis mauris. Maecenas id sem semper, bibendum nunc sed, euismod orci. Vestibulum id consectetur massa, molestie egestas magna. Phasellus interdum ante eget lectus dictum accumsan. Mauris a tristique leo, non cursus augue. Proin scelerisque neque id elit mattis elementum. Quisque laoreet hendrerit nunc et eleifend. Integer quis sodales tellus, eu pretium justo. Suspendisse interdum tristique risus, et semper lacus efficitur id.    
              </p>
          </div>
        </div>
      </main>
    </>
  )
}

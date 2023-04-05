import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/utils.module.css'
import Header from '../components/Header.js';

export default function Home() {
  return (
    <>
      <Head>
        <title>Asculta</title>
      </Head>
      <main className={styles.main}>

      <Header/>

        <div className={styles.page}>
          <div className={styles.stack}>

            <div className={styles.center}>
              <img className={styles.logo} src='/images/Asculta1.png'/>
            </div>

            <div className={styles.center}>
              <h1>Ensuring Structural Peace-of-Mind</h1>
            </div>

            <div className={styles.description}>

                <p>
                {/* Asculta Technologies produces ultrasonic plasma acoustic emissions sensors, which are highly sensitive microphones that detect structural damage in infrastructure before material failure by listening to the sounds emitted when microcracks (on the order of 5µm) form. With our patented technology and software, our sensors characterize structural damage in high-temperature and high-radiation applications, including nuclear fission and fusion reactors, chemical refineries, and other extreme environments. The conventional SHM market is highly mature and monopolized by a few large competitors, leading the industry to become stagnant in innovation. Due to a lack of competitors, the SHM market as a whole is stuck in the past and discouraged to modernize. The most popular sensors use piezoelectric crystals, which degenerate rapidly in extreme environments. Comparatively, our sensors are much cheaper, wirelessly capable, have higher signal quality, higher durability, and are made solely with the client's needs in mind. The most specific pain point which we are targeting is the ability to perform SHM in high-radiation and high-temperature environments.  In both nuclear fission reactors and nuclear fusion tokamak reactors, no sensor exists that can withstand radiation for longer than on the order of 10 minutes. Our solution has already been tested to be fully operational within -73° to 400° (higher and lower temperatures are possible, but these are the highest and lowest temperatures tested), and can resist up to 2.5MRad of radiation (250x lethal amount), allowing sensors closer to the core of a reactor than ever before. In addition, our higher signal quality allows for us to transmit the entire waveform of an acoustic emission. Some industries that we would like to enter are the Structural Health Monitoring (SHM), Nuclear Energy, and Civilian Infrastructure. */}
                </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

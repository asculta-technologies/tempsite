import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/utils.module.css'
import Header from '../components/Header.js';
import Bullet from '@/components/Bullet.js';

export default function Home() {
  return (
    <>
      <Head>
        <title>Asculta</title>
      </Head>
      <main>

        <Header />

        <div className={styles.center}>

          <img className={styles.logo} src='/images/Asculta1.png' />

          <div className={styles.description}>
            <h3>
              Asculta Technologies produces ultrasonic plasma acoustic emissions sensors, which are highly sensitive microphones detecting structural damage in infrastructure before material failure. With our patented technology and software, our sensors characterize structural damage for high-temperature and high-radiation applications, extending the lifetime of nuclear fission and fusion reactors, chemical refineries, and other infrastructure in extreme environments.
              </h3>
            <br /><br />
          </div>

          <Bullet
            number="1"
            headline="Long lifetime and low maintenance costs"
            desc="Standard sensors last 1 week in high-radiation environments.  Asculta’s sensors last instead on the order of years, allowing decreased maintenance costs."
          />

          <Bullet
            number="2"
            headline="Modern cloud-based software"
            desc="Current software only can detect damage, not characterize it.  Our sensor is the only kind on the market that can produce the data needed to characterize damage, which our AI-enabled software then performs."
          />

          <Bullet
            number="3"
            headline="Full coverage"
            desc="Industry standard only covers 16% of the necessary range to detect all structural damage, while our sensor covers 100% of the required range."
          />

          <div className={styles.awards}>
            <h1>Princeton Pitch 2023</h1>
            <h2>Finalist</h2>

            <h1>Carnegie Mellon University Venture Challenge 2023</h1>
            <h2>Finalist</h2>
          </div>

        </div>
      </main>
    </>
  )
}

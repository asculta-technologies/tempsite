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
              <h1>Meet Our Team</h1>
            </div>

            <h1>Founders</h1>

            <div className={styles.adaptive}>
              <div className={styles.bio}>
                <img className={styles.portrait} src='/images/Matthew.jpg'/>
                <h2>Matthew Banaag</h2>
                <p>
                  CEO, Systems Engineer
                  <br/><br/>
                  <i>Electrical & Computer Engineering @ Princeton University</i>
                  <br/><br/>
                  [EMAIL]
                </p>
              </div>
              <div className={styles.bio}>
                <img className={styles.portrait} src='/images/Yiying.jpg'/>
                <h2>Yiying Zhang</h2>
                <p>
                  CTO, Electrical Engineer
                  <br/><br/>
                  <i>Electrical & Computer Engineering @ Princeton University</i>
                  <br/><br/>
                  yiying.zhang@princeton.edu
                </p>
              </div>
              <div className={styles.bio}>
                <img className={styles.portrait} src='/images/Xabier.jpg'/>
                <h2>Xabier Sardina</h2>
                <p>
                  Head of Business 
                  <br/><br/>
                  <i>Economics @ Princeton University</i>
                  <br/><br/>
                  [EMAIL]
                </p>
              </div>
              <div className={styles.bio}>
                <img className={styles.portrait} src='/images/Xuan.jpg'/>
                <h2>Xuan Lin</h2>
                <p>
                  Head of Marketing
                  <br/><br/>
                  <i>Computer Science @ Princeton University</i>
                  <br/><br/>
                  [EMAIL]
                </p>
              </div>
            </div>

            <br/><h1>Scientific Advisor</h1><br/>
            <div className={styles.adaptive}>
              <img className={styles.portrait} src='/images/Johan.jpg'/>
              <div className={styles.bio2}>
                <h2>Johan Carlsson</h2>
                <p>Corporate Fellow & Patent Inventor</p>
                <ul>
                  <li>PhD, Fusion Plasma Physics @ KTH Royal Institute of Technology</li>
                  <li>MSc, Engineering Physics @ Lund University</li>
                  <li>20+ years of experience in computational plasma physics</li>
                  <li>Published 30+ papers in peer-reviewed journals</li>
                  <li>PI for DoE FES, NE and ASCR SBIR projects with funding totaling over $2M</li>
                  <li>Inventor of Asculta Technologies’ ultrasonic plasma acoustic emissions transducer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

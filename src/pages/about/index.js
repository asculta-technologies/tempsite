import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/utils.module.css'
import Header from '../../components/Header.js';
import Portrait from '../../components/Portrait.js';

export default function About() {
  return (
    <>
      <Head>
        <title>Asculta | About</title>
      </Head>
      <main className={styles.main}>

      <Header/>

        <div className={styles.stack}>

            <h1>Meet Our Team</h1>

            <h1>Founders</h1>

            <div className={styles.adaptive}>

              <Portrait 
                name='Matthew Banaag'
                image='/images/Matthew.jpg'
                title='CEO, Systems & Software Engineer'
                major='Electrical & Computer Engineering @ Princeton University'
                email='matthew.banaag@princeton.edu'
              />

              <Portrait 
                name='Yiying Zhang'
                image='/images/Yiying.jpg'
                title='CTO, Electrical Engineer'
                major='Electrical & Computer Engineering @ Princeton University'
                email='yiying.zhang@princeton.edu'
              />

              <Portrait 
                name='Xabier Sardina'
                image='/images/Xabier.jpg'
                title='Head of Business'
                major='Economics @ Princeton University'
                email='xsardina@princeton.edu'
              />

              <Portrait
                name='Xuan Lin'
                image='images/Xuan.jpg'
                title='Head of Marketing'
                major='Computer Science @ Princeton University'
                email='xuan.lin@princeton.edu'
              />

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
      </main>
    </>
  )
}

import React from 'react'
import { default as NextLink } from 'next/link'
import { Link } from 'react-router-dom';
import styles from '../styles/utils.module.css'

export default function Header({ props }) {
  return(
    
    <header className={styles.navbar}>

      <div className={styles.navlogo}>  
        <NextLink href="/">
          <img src='/images/Asculta4.png'/>
        </NextLink>
      </div>
      
      <div className={styles.navright}>

        <NextLink href="/about">
          <p>About</p>
        </NextLink> 

        <NextLink href="/technology">
          <p>Technology</p>
        </NextLink>

      </div>

    </header>
  )
}
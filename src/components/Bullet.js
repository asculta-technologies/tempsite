import React from 'react'
import styles from '../styles/utils.module.css'

const bullet = ({ number, headline, desc }) => {
  return (
    <div className={styles.bullet}>
      <h1>{number}</h1>
      <div>
        <h2>{headline}</h2>
        <h3>{desc}</h3>
      </div>
    </div>
  )
}

export default bullet;
import React from 'react'
import styles from '../styles/utils.module.css'

const portrait = ({ name, image, title, major, email }) => {
  return (
    <div className={styles.bio}>
      <img className={styles.portrait} src={image}/>
      <h2>{name}</h2>
      <p>
        {title}
        <br/><br/>
        <i>{major}</i>
        <br/><br/>
        <a className={styles.link} href={`mailto:${email}`}>{email}</a>
      </p>
    </div>
  )
}

export default portrait;
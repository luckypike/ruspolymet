import React from 'react'
import styles from './Header.module.css'

import Intro from './Video/Intro.mp4'
import Poster from './Video/Poster.jpg'

export default function Header () {
  return (
    <div className={styles.container}>
      <video playsInline autoPlay loop muted poster={Poster}>
        <source src={Intro} type="video/mp4" />
      </video>

      <div className={styles.text}>
        <h1>
          Вместе — сильнее!
        </h1>
      </div>
    </div>
  )
}

import React from 'react'

import styles from './Header.module.css'

import Intro from './Video/Intro.mp4'

export default function Header () {
  return (
    <div>
      <div className={styles.container}>
        <video playsInline autoPlay loop muted>
          <source src={Intro} type="video/mp4" />
        </video>

        <div className={styles.text}>
          <h1>
            Вместе — сильнее!
          </h1>
        </div>
      </div>
    </div>
  )
}

import React from 'react'

import styles from './Header.module.css'

export default function Header () {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1>
            Вместе — сильнее!
          </h1>
        </div>
      </div>
    </div>
  )
}

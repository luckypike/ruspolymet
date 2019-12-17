import React from 'react'
import classNames from 'classnames'

import Photo from './Zvm.jpg'

import styles from './Interview.module.css'

export default function Zvm () {
  return (
    <div className={classNames(styles.root, styles.right)}>
      <div className={styles.photo} style={{ backgroundImage: `url(${Photo})` }} />

      <div className={styles.text}>
        <div className={styles.quote}>Наша цель — занять 15-20% российского рынка титана</div>
        <div className={styles.who}>Евгений Амелин, директор ООО «Завод вакуумной металлургии»</div>
        <button className={styles.more}>Читать интервью</button>
      </div>
    </div>
  )
}

import React from 'react'

import Photo from './Maxim.jpg'

import styles from './Interview.module.css'

export default function Maxim () {
  return (
    <div className={styles.root}>
      <div className={styles.photo} style={{ backgroundImage: `url(${Photo})` }} />

      <div className={styles.text}>
        <div className={styles.quote}>Мы знаем, как развиваться</div>
        <div className={styles.who}>Максим Клочай, генеральный директор металлургического металлообрабатывающего предприятия ПАО «Русполимет»</div>
        <button className={styles.more}>Читать интервью</button>
      </div>
    </div>
  )
}

import React from 'react'

import styles from './Interview.module.css'

export default function Vlz () {
  return (
    <div className={styles.root}>
      <div className={styles.photo}>

      </div>

      <div className={styles.text}>
        <div className={styles.quote}>Мы выйдем на новые рубежи</div>
        <div className={styles.who}>Юрий Бобков, генеральный директор Выксунского литейного завода</div>
        <button className={styles.more}>Читать интервью</button>
      </div>
    </div>
  )
}

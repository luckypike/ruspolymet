import React from 'react'
import classNames from 'classnames'

import styles from './Interview.module.css'

export default function Victor () {
  return (
    <div className={classNames(styles.root, styles.right)}>
      <div className={styles.photo}>

      </div>

      <div className={styles.text}>
        <div className={styles.quote}>Мы хотим изменить технологический уклад в отечественном машиностроении</div>
        <div className={styles.who}>Виктор Клочай, председатель совета директоров ПАО «Русполимет»</div>
        <button className={styles.more}>Читать интервью</button>
      </div>
    </div>
  )
}

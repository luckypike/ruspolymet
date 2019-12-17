import React from 'react'
import classNames from 'classnames'

import Photo from './Grankom.jpg'

import styles from './Interview.module.css'

export default function Grankom () {
  return (
    <div className={classNames(styles.root, styles.right)}>
      <div className={styles.photo} style={{ backgroundImage: `url(${Photo})` }} />

      <div className={styles.text}>
        <div className={styles.quote}>Гранком может конкурировать с иностранными производителями</div>
        <div className={styles.who}>Артем Максимов, директор ООО «Гранком»</div>
        <button className={styles.more}>Читать интервью</button>
      </div>
    </div>
  )
}

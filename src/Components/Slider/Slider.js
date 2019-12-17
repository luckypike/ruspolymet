import React, { useState, useEffect, useRef } from 'react'
import Siema from 'siema'
import classNames from 'classnames'

import styles from './Slider.module.css'

import Vlz1 from './Images/Vlz1.jpg'
import Vlz from './Images/Vlz.jpg'
import Grankom from './Images/Grankom.jpg'
import Zvm2 from './Images/Zvm2.jpg'
import Rus1 from './Images/Rus1.jpg'
import Rus2 from './Images/Rus2.jpg'
import Rus3 from './Images/Rus3.jpg'
import Rus4 from './Images/Rus4.jpg'

export default function Slider () {
  const sliderRef = useRef()
  const mountRef = useRef()

  useEffect(() => {
    sliderRef.current = new Siema({
      selector: mountRef.current,
      loop: true,
      onChange: () => {
        setCurrent(sliderRef.current.currentSlide)
      }
    })
  }, [])

  const [current, setCurrent] = useState(0)

  console.log(current)

  return (
    <div className={styles.slider}>
      <div ref={mountRef} className={styles.images}>
        <div className={styles.image} style={{ backgroundImage: `url(${Vlz1})` }} />
        <div className={styles.image} style={{ backgroundImage: `url(${Vlz})` }} />
        <div className={styles.image} style={{ backgroundImage: `url(${Grankom})` }} />
        <div className={styles.image} style={{ backgroundImage: `url(${Zvm2})` }} />
        <div className={styles.image} style={{ backgroundImage: `url(${Rus1})` }} />
        <div className={styles.image} style={{ backgroundImage: `url(${Rus2})` }} />
        <div className={styles.image} style={{ backgroundImage: `url(${Rus3})` }} />
        <div className={styles.image} style={{ backgroundImage: `url(${Rus4})` }} />
      </div>

      <div className={styles.navs}>
        <div className={classNames(styles.nav, { [styles.active]: current === 0 })} onClick={() => sliderRef.current.goTo(0)}>1</div>
        <div className={classNames(styles.nav, { [styles.active]: current === 1 })} onClick={() => sliderRef.current.goTo(1)}>2</div>
        <div className={classNames(styles.nav, { [styles.active]: current === 2 })} onClick={() => sliderRef.current.goTo(2)}>3</div>
        <div className={classNames(styles.nav, { [styles.active]: current === 3 })} onClick={() => sliderRef.current.goTo(3)}>4</div>
        <div className={classNames(styles.nav, { [styles.active]: current === 4 })} onClick={() => sliderRef.current.goTo(4)}>5</div>
        <div className={classNames(styles.nav, { [styles.active]: current === 5 })} onClick={() => sliderRef.current.goTo(5)}>6</div>
        <div className={classNames(styles.nav, { [styles.active]: current === 6 })} onClick={() => sliderRef.current.goTo(6)}>7</div>
        <div className={classNames(styles.nav, { [styles.active]: current === 7 })} onClick={() => sliderRef.current.goTo(7)}>8</div>
      </div>
    </div>
  )
}

import React, { useState, useRef } from 'react'
import AnimateHeight from 'react-animate-height'

import Photo from './Vlz.jpg'

import styles from './Interview.module.css'

export default function Vlz () {
  const [height, setHeight] = useState(0)
  const mount = useRef()

  function scrollIntoView () {
    mount.current.scrollIntoView({ behavior: 'smooth' })

    setHeight(height === 0 ? 'auto' : 0)
  }

  return (
    <>
      <div className={styles.root}>
        <div ref={mount} className={styles.photo} style={{ backgroundImage: `url(${Photo})` }} />

        <div className={styles.text}>
          <div className={styles.quote}>Мы выйдем на новые рубежи</div>
          <div className={styles.who}>Юрий Бобков, генеральный директор Выксунского литейного завода</div>
          <button
            className={styles.more}
            onClick={scrollIntoView}
          >
            Читать интервью
          </button>
        </div>
      </div>

      <AnimateHeight height={height} duration={700}>
        <div className={styles.interview} easing="ease-in-out">
          <p className={styles.vstup}>
            О гибкости небольших металлургических предприятий и умении соответствовать потребностям заказчика, рассказывает генеральный директор Выксунского литейного завода, Юрий Бобков.
          </p>

          <p className={styles.q}>
            — Юрий Владимирович, заканчивается 2019 год. Каким он выдался для вашего предприятия?
          </p>

          <p className={styles.a}>
            — В 2019 году мы разработали ряд новых отливок, которые успешно внедряем в производство. Их потребителями являются ПАО «Российские железные дороги» (РЖД), предприятия нефтяной и газовой отраслей. Также в уходящем году мы запустили опытное производство корпусов поглощающих аппаратов АПМК и РТ130 (устройства применяются в сцепном устройстве вагонов для их защиты от продольных нагрузок), предназначенных для РЖД. Сейчас мы дорабатываем их и в ближайшее время запустим в серию. РЖД уже много лет остается одним из наших основных заказчиков. Внутри группы предприятий мы поставляем продукцию на «Русполимет» и «Дробмаш».
          </p>

          <p className={styles.q}>
            — В 2018 году вашему предприятию удалось увеличить производительность труда почти на 70%. На 2019 год ставилась задача увеличить ее еще на 20%. Удалось ли реализовать эти планы?
          </p>

          <p className={styles.a}>
            — Мы стремимся достичь этих показателей. Это возможно при условии, что на предприятии будет проведен второй этап модернизации производства, инвестиции в который должны составить порядка 130 млн руб. Бизнес-план этого проекта находится на технической экспертизе. Его согласование должно быть завершено к концу 2019 года. После того, как экспертиза будет закончена, можно будет говорить о выходе на новые объемы производства. Мы должны будем увеличить выпуск продукции примерно на 40% и производительность труда на 30%. Вырастет квалификация работников и заработная плата. Но самое главное, что по итогам модернизации предприятие получит возможность внедрять в работу самые современные технические решения.
          </p>

          <p className={styles.q}>
            — Планируете ли вы на новом этапе модернизации использовать меры государственной поддержки?
          </p>

          <p className={styles.a}>
            — Первый этап модернизации мы проводили за счет собственных оборотных средств. На втором этапе мы рассматриваем несколько направлений привлечения инвестиций. Одним из них может стать получение займа от Фонда развития промышленности, другим — привлечение банковских кредитов. Пока не буду называть банки, с которыми мы ведем переговоры, но можно сказать, что интерес к нашему предприятию большой. И то, что завод входит в группу «Русполимет», дает преимущество при общении с финансовыми организациями. Рассматриваются и другие варианты получения господдержки, но заем ФРП или привлечение банковской ссуды являются основными.
          </p>

          <p className={styles.q}>
            — Ранее вы говорили, что ведете переговоры «Росатомом» о закупке отливок Выксунского литейного завода вместо испанских. Чем они завершились?
          </p>

          <p className={styles.a}>
            — Нам удалось договориться, и сейчас мы адаптируем и корректируем европейские технологии и стандарты под наши. После того, как эта работа будет закончена, мы сможем не только поставлять отливки «Росатому», но и предлагать ее на европейском рынке. Также мы начали сотрудничество Муромским машиностроительным заводом. Предприятие выполняет крупный государственный заказ по созданию оборудования для новой обсерватории в Бурятии, и наши отливки будут в составе установленного на этом объекте оборудования.
          </p>

          <p className={styles.q}>
            — Какие еще внешние поставки вы начали в 2019 году?
          </p>

          <p className={styles.a}>
            — Мы договорились о сотрудничестве с Белорусским автомобильным заводом («БелАЗ»). Поставлена опытная партия отливок, которая успешно прошла входной контроль и допущена к использованию. Сейчас эти детали находятся в сборочном цеху и ждут установки на грузовики «БелАЗ». После этого начнется опытная эксплуатация. В итоге мы получим окончательную резолюцию о возможности использования нашей продукции на этом предприятии.
          </p>

          <p className={styles.q}>
            — Рассматриваете ли вы рынки Азиатско-Тихоокеанского региона?
          </p>

          <p className={styles.a}>
            — Это очень перспективный регион с точки зрения возможных поставок, особенно Китай. Интерес к нашей продукции был заметен и во время прошедшей в Москве выставки «Металл-Экспо». В том числе со стороны китайских и японских делегаций. Мы ведем переговоры с рядом предприятий из Азии и понимаем, что наши отливки подходят для них по качеству и техническим условиям. По цене, думаю, тоже договоримся.
          </p>

          <p className={styles.q}>
            — Какие планы у завода на 2020 год?
          </p>

          <p className={styles.a}>
            — При условии, что наши планы по проведению модернизации производства с привлечением средств ФРП или банка начнут воплощаться, мы готовы увеличить производство литья еще на 25-30%. Будем закупать и менять оборудование. Только после этого можно будет говорить о новых целях и задачах, как технических, так и производственных. Сейчас на нашем предприятии переходный этап, но мы можем с уверенностью говорить, что выйдем на новые рубежи.
          </p>
        </div>
      </AnimateHeight>
    </>
  )
}

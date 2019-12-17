import React, { useState, useRef } from 'react'
import classNames from 'classnames'
import AnimateHeight from 'react-animate-height'

import Photo from './Zvm.jpg'

import styles from './Interview.module.css'

export default function Zvm () {
  const [height, setHeight] = useState(0)
  const mountRef = useRef()

  function handleScroll () {
    mountRef.current.scrollIntoView({ behavior: 'smooth' })

    setHeight(height === 0 ? 'auto' : 0)
  }

  return (
    <>
      <div className={classNames(styles.root, styles.right)}>
        <div ref={mountRef} className={styles.photo} style={{ backgroundImage: `url(${Photo})` }} />

        <div className={styles.text}>
          <div className={styles.quote}>Наша цель — занять 15-20% российского рынка титана</div>
          <div className={styles.who}>Евгений Амелин, директор ООО «Завод вакуумной металлургии»</div>
          <button
            className={styles.more}
            onClick={handleScroll}
          >
            Читать интервью
          </button>
        </div>
      </div>

      <AnimateHeight height={height} duration={700}>
        <div className={styles.interview} easing="ease-in-out">
          <p className={styles.vstup}>
            Почему нижегородские производители титана пока предпочитают ориентироваться на потребности российских заказчиков и в чем преимущества их продукции перед иностранными производителями, рассказывает директор ООО «Завод вакуумной металлургии» Евгений Амелин.
          </p>

          <p className={styles.q}>
            — Евгений Алексеевич, 2019 год стал первым полноценным годом работы для вашего предприятия. С какими результатами вы его заканчиваете?
          </p>

          <p className={styles.a}>
            — В 2018 году, когда мы впервые вышли на международную выставку «Металл-Экспо», на нашем заводе были выплавлены первые титановые слитки. Сейчас мы выходим на тот объем производства, который позволит нам стать вторым в России предприятием по выпуску титана. Перед нами стояла цель выйти на безубыточность, и мы ее достигли за год. Мало кому удается получить подобный результат за такое короткое время. На 2020 год перед нами поставлена задача полностью загрузить производство исходя из максимальной рентабельности. После этого мы поймем, стоит ли расширяться и ставить новое оборудование.
          </p>

          <p className={styles.q}>
            — Какой именно цифры в производстве титана вы хотите достичь?
          </p>

          <p className={styles.a}>
            — «Завод вакуумной металлургии» может производить до 2 тыс. т титана в год. Но в этом вопросе большое значение имеет номенклатура сплавов. У нас нет задачи разогнать производство до максимальных показателей по выпуску, мы хотим в полной мере удовлетворить потребности наших заказчиков. Например, чтобы выпустить такой объем сложнолегированных сплавов для авиации, которые мы намерены сделать нашей основной продукцией, придется перекомпоновать и перенастроить оборудование, что займет много времени и отразится на объемах производства. По этой продукции для нас хорошим показателем будет выпуск 1200-1300 т титана в год.
          </p>

          <p className={styles.q}>
            — При запуске «Завода вакуумной металлургии» говорилось, что основным потребителем вашей продукции будет «Русполимет». Изменились ли за минувший год приоритеты, появились ли новые заказчики?
          </p>

          <p className={styles.a}>
            — «Русполимет», конечно, для нас ключевой потребитель, но и другие заказчики тоже интересуют. К началу 2020 года соотношение поставок продукции на «Русполимет» и сторонним потребителям будет 50 на 50. Сейчас конъюнктура рынка такова, что мы продадим все, что сможем произвести. Спрос на титан на внутреннем рынке достаточно велик, мы сейчас выбираем наиболее выгодные проекты с оглядкой на текущие возможности производства. Проблем со сбытом нет, гораздо сложнее вывести предприятие на стабильный высокий уровень производства.
          </p>

          <p className={styles.q}>
            — Какую долю российского рынка титана вы планируете занять и рассматриваете ли возможность выхода за границу?
          </p>

          <p className={styles.a}>
            — Наша цель — занять порядка 15-20% рынка. Думаю, что мы выйдем на такие показатели к концу 2020 года. Из-за рубежа предложения тоже поступают. Мы не исключаем экспортных поставок в будущем, определенные наработки уже существуют. В первую очередь среди внешних рынков нам интересна Западная Европа, поступают предложения из Германии и Италии. В США, Китае, Японии есть свои производители. Но мы хотим двигаться поступательно и решить в первую очередь стратегические задачи на российском рынке, а потом можно заняться и экспортом.
          </p>

          <p className={styles.q}>
            — С кем приходится конкурировать?
          </p>

          <p className={styles.a}>
            — На рынке производителей титана с небольшими объемами выпуска основными конкурентами для нас являются «Ступинская титановая компания», а также импортеры китайского металла и металла с постсоветского пространства. Такого гиганта, как ВСМПО-Ависма, я не могу назвать конкурентом, слишком разные весовые категории, хотя мы сталкиваемся с ними на тендерах, и они уже нас заметили.<br />
            Перед небольшими производителями мы имеем конкурентные преимущества, в том числе за счет имеющихся у нас ноу-хау, например возможностей по переработке широкого спектра титанового лома, и уровня технологической оснащенности.
          </p>

          <p className={styles.q}>
            — Почему рынок титана так активно растет?
          </p>

          <p className={styles.a}>
            — Свойства титана — его невосприимчивость к агрессивным средам и температурам и легкость — привлекают производителей из самых разных отраслей, и количество продукции, где титаном заменяют другие металлы, растет. Сейчас его применяют в авиастроении, двигателестроении и производстве бытовой техники. Но титан — металл, который тяжело производить и обрабатывать. С этим связано небольшое количество стран, где он производится. Россия в этом вопросе является не просто производителем, она — один из ключевых разработчиков и носителей этой технологии.
          </p>

          <p className={styles.q}>
            — Каким образом предприятие участвует в программах господдержки?
          </p>

          <p className={styles.a}>
            — Мы получили заем Фонда развития промышленности, который использовали для покупки и ввода в эксплуатацию основных агрегатов. В итоге мы располагаем самым современным оборудованием, какое только есть в Европе.
          </p>
        </div>
      </AnimateHeight>
    </>
  )
}

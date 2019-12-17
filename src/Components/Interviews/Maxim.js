import React, { useState } from 'react'
import AnimateHeight from 'react-animate-height'

import Photo from './Maxim.jpg'

import styles from './Interview.module.css'

export default function Maxim () {
  const [height, setHeight] = useState(0)

  return (
    <>
      <div className={styles.root}>
        <div className={styles.photo} style={{ backgroundImage: `url(${Photo})` }} />

        <div className={styles.text}>
          <div className={styles.quote}>Мы знаем, как развиваться</div>
          <div className={styles.who}>Максим Клочай, генеральный директор металлургического металлообрабатывающего предприятия ПАО «Русполимет»</div>
          <button
            className={styles.more}
            onClick={() => setHeight(height === 0 ? 'auto' : 0)}
          >
            Читать интервью
          </button>
        </div>
      </div>

      <AnimateHeight height={height} duration={700}>
        <div className={styles.interview} easing="ease-in-out">
          <p className={styles.vstup}>
            Как из завода, основанного в XIX веке, сделать современное предприятие-экспортер, рассказывает генеральный директор единственного в России и СНГ специализированного производителя кольцевых заготовок и дисков ответственного назначения ПАО «Русполимет» Максим Клочай.
          </p>

          <p className={styles.q}>
            — Максим Викторович, с какими результатами ПАО «Русполимет» заканчивает 2019 год?
          </p>

          <p className={styles.a}>
            — Все задачи, которые были поставлены перед предприятием по объемам производства и отгрузки, будут перевыполнены. Если в 2018 году выручка ПАО «Русполимет» составляла 10,3 млрд руб., то в текущем году мы перешагнем за плановые 12,5 млрд руб. В 2018 году, чтобы увеличить производство на 15%, предприятие бралось практически за любой заказ, в 2019-м у нас появилась возможность браться только за интересные проекты. Основная цель — перейти на долгосрочные контракты, минимум на годовые. Конечно, разовые заказы мы продолжим брать, чтобы дозагрузить оборудование. Производство сейчас настраивается таким образом, чтобы все мощности были загружены равномерно в течение года. Перед отделом продаж поставлена задача найти заказы, за счет которых можно дозагрузить оборудование в моменты вынужденного простоя, например, прессы открытой ковки и механической обработки паковок круглой формы. Возможно, маржинальность такой продукции не очень высока, но для загрузки производства это необходимо.
          </p>

          <p className={styles.q}>
            — «Русполимет» известен как производитель кольцевой заготовки для авиастроения, но в 2018 году завод начал наращивать мощности глубокой переработки. На каком этапе сейчас находится этот проект?
          </p>

          <p className={styles.a}>
            — Этот проект был задуман для того, чтобы производители авиационных двигателей, получали от нас не кольцо-полуфабрикат, который требует обработки, а готовую деталь. Планируется, что заказчиками готовых авиационных колец будут российские и иностранные компании. Для реализации проекта мы подготовили отдельное помещение, куда перенесли станки для чистовой механической обработки. Еще три обрабатывающих комплекса «Русполимет» закупит в ближайшее время. Производство начнется в 2020 году.
          </p>

          <p className={styles.q}>
            — Одним из крупнейших заказчиков «Русполимета» является госкорпорация «Росатом». Как развивается ваше сотрудничество?
          </p>

          <p className={styles.a}>
            — По контракту с «Росатомом» мы работаем для проектов, которые компания реализует в России и за рубежом. Сейчас активно строится первая в Турции АЭС «Аккую». Для этого проекта мы поставляли кольцевые заготовки и задвижки. Также «Русполимет» поставляет продукцию всем предприятиям «Атомэнергомаша» — машиностроительного дивизиона госкорпорации «Росатом». (хорошо бы уточнить какую именно продукцию)
          </p>

          <p className={styles.q}>
            —Кроме «Росатома» строительством АЭС занимаются и зарубежные компании. Пробовали ли вы развивать сотрудничество с ними?
          </p>

          <p className={styles.a}>
            — Пока мы поставили цель на зарубежных рынках расширить сотрудничество с авиационными предприятиями. Это наши постоянные заказчики, мы уже достаточно давно с ними сотрудничаем. В работе с Pratt & Whitney (американский производитель авиационных двигателей) и Honeywell (американская корпорация, производящаяаэрокосмическое оборудование, электронные системы управления и автоматизации) стоит задача увеличить объемы поставок. Еще одним партнером в этом направлении может стать компания Safran Aircraft Engines (французский производитель авиационных двигателей), контракт с которой находится в стадии согласования. Это один из крупнейших производителей авиадвигателей в мире. Также в качестве партнеров рассматриваются ряд корейских компаний. Восток вообще очень перспективное направление, но все сразу не охватить.
          </p>

          <p className={styles.q}>
            — Каково соотношение российских и зарубежных контрактов в портфеле компании?
          </p>

          <p className={styles.a}>
            — За 2019 год поставки на экспорт выросли примерно в два раза. В общем объеме выручки экспорт поднялся с 10% до 17-20%. К 2024 году стоит задача увеличить этот показатель до 30%, и я считаю ее вполне выполнимой.
          </p>

          <p className={styles.q}>
            — Участвует ли «Русполимет» в программах господдержки?
          </p>

          <p className={styles.a}>
            — Мы не просто участвуем в программах господдержки, а даже стали одним из первых нижегородских предприятий, на которых было апробировано внедрение системы «Бережливые технологии». В рамках этой программы государство выделяет субсидии на обучение персонала. Только за 2019 год более 2 тыс. сотрудников «Русполимета» прошли обучение, освоив смежные профессии, или повысили квалификацию. Для «Русполимета» это рекорд. <br />
            Также внедрение бережливых технологий позволило на некоторых агрегатах и участках снизить уровень незавершенного производства и сократить производственный цикл. Например, время изготовления колец для иностранного заказчика сократилось со 102 до 60 дней, и в перспективе срок может уменьшиться до 50 дней. <br />
            Одним из элементов бережливых технологий стала перестановка оборудования внутри цехов, чтобы сократить время передачи детали с одного станка на другой. Перенести прессы и станы действительно сложно и затратно, а механообрабатывающие станки перенести с места на место гораздо проще, это мы и сделали. Каждый станок нужно было не просто передвинуть, а подготовить под него фундамент, соблюсти целый ряд условий. Инвестиции в этот процесс составили 17 млн руб., но за последние полгода мы уже окупили эти затраты. Бережливые технологии полностью доказали свою эффективность.
          </p>

          <p className={styles.q}>
            — Использует ли компания современные электронные технологии для повышения эффективности работы?
          </p>

          <p className={styles.a}>
            — Да, уже десять месяцев мы используем систему SAP — это программный комплекс для управления предприятиями от материальных потоков до производства. На старте были определенные сложности, почти все службы работали в круглосуточном режиме,ыявились проблемы и подводные камни, о которых мы не догадывались. На протяжении всего года мы постепенно решали множество задач, и настройка системы все еще продолжается. Пока мы установили только блоки, связанные с планированием производства и управлением персоналом, внедрили электронный документооборот, оцифровали процесс согласования договоров, приказов, спецификаций. В дальнейшем будут установлены блоки, связанные с ремонтом оборудования и продажами. Думаю, работа продолжится еще два года. Именно тогда и можно будет максимально точно оценить эффект от внедрения SAP. Пока же можно говорить только о первых изменениях. Например, благодаря внедрению электронного документооборота заметно сократились сроки прохождения документов, процесс стал прозрачнее.
          </p>

          <p className={styles.q}>
            — Наотраслевой выставке «Металл-Экспо» было пописано соглашение между «Русполиметом» и ФГКП «Центральный научно-исследовательский институт черной металлургии им. И.П. Бардина». В чем суть этого документа?
          </p>

          <p className={styles.a}>
            — В рамках заключенного соглашения сторонынамерены создать единый научный центр и совместно заниматься инновационными разработками в сфере металлургии. Мы собираемся работать в порошковой металлургии и разрабатывать новые сплавы. Для этого будут использоваться имеющаяся у института научная база и наработки «Русполимета», которые тоже достаточно обширны. «Русполимет» готов стать промышленной площадкой, на которой будут не только создаваться и испытываться новые виды продукции, но и в дальнейшем может быть налажено их промышленное производство. Это дает компании определенное преимущество: после того, как новый продукт будет создан, во всей технической документации на него, во всех ТУ будет указано, что это продукция проверенного производителя. Это даст определенные конкурентные преимущества, пока выпуск нового вида продукции не будет освоен другими металлургическими предприятиями.
          </p>

          <p className={styles.q}>
            — Что в планах «Русполимета» на 2020 год?
          </p>

          <p className={styles.a}>
            — Главная цель — рост производства. Надеюсь, что он составит 10-15% к результатам 2019 года. Это должно произойти как раз за счет сокращение циклов производства и освобождения мощностей. Мы знаем, как развиваться и производить больше продукции на тех мощностях, что у нас есть. А переход на долгосрочные контракты позволит «Русполимету» точнее спланировать цикл и справиться с увеличением объемов выпуска продукции.
          </p>
        </div>
      </AnimateHeight>
    </>
  )
}

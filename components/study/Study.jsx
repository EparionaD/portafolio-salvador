'use client';

import { Icon } from '@iconify/react';
import style from './study.module.scss';

const Study = () => {
  return (
    <div className={style.study}>
      <div className={style.study__items}>
        <div className={style.study__item}>
          <Icon
            icon='fluent:clipboard-bullet-list-ltr-20-regular'
            className={style.study__icon}
          />
          <h1 className={style.study__title}>Study type</h1>
          <p className={style.study__paragraph}>Unmoderated usability study</p>
        </div>
        <div className={style.study__item}>
          <Icon
            icon='fluent:location-12-filled'
            className={style.study__icon}
          />
          <h1 className={style.study__title}>Location</h1>
          <p className={style.study__paragraph}>Lima,Peru. Remote</p>
        </div>
        <div className={style.study__item}>
          <Icon
            icon='fluent:people-audience-24-filled'
            className={style.study__icon}
          />
          <h1 className={style.study__title}>Participants</h1>
          <p className={style.study__paragraph}>4 participants</p>
        </div>
        <div className={style.study__item}>
          <Icon
            icon='material-symbols:nest-clock-farsight-analog'
            className={style.study__icon}
          />
          <h1 className={style.study__title}>Length</h1>
          <p className={style.study__paragraph}>30 to 60 minutes</p>
        </div>
      </div>
      <div>
        <p>These were the main findings uncovered by the usability study:</p>
      </div>
      <div className={style.study__texts}>
        <div className={style.study__text}>
          <div className={style.study__number}>1</div>
          <h1 className={style.study__title1}>Graphics</h1>
          <p className={style.study__paragraph1}>
            Users want better graphics and stats about pregnancy and babies.
          </p>
        </div>
        <div className={style.study__text}>
          <div className={style.study__number}>2</div>
          <h1 className={style.study__title1}>Forum</h1>
          <p className={style.study__paragraph1}>
            This section needs to improve visual aspect.
          </p>
        </div>
        <div className={style.study__text}>
          <div className={style.study__number}>3</div>
          <h1 className={style.study__title1}>Searching</h1>
          <p className={style.study__paragraph1}>
            Users want more detail in searching tool like filters to improve
            results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Study;

'use client';

import { Icon } from '@iconify/react';
import style from './studylike.module.scss';

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
      <div className={style.study__container}>
        <div className={style.study__texts}>
          <h1 className={style.study__title1}>ROUND 1 FINDINGS</h1>
          <div className={style.study__text}>
            <div className={style.study__number}>1</div>
            <p className={style.study__paragraph1}>
              Users want to order food quickly
            </p>
          </div>
          <div className={style.study__text}>
            <div className={style.study__number}>2</div>
            <p className={style.study__paragraph1}>
              Users want to improve payment process.
            </p>
          </div>
          <div className={style.study__text}>
            <div className={style.study__number}>3</div>
            <p className={style.study__paragraph1}>
              Users doesn&lsquo;t know what to do after finish the order.
            </p>
          </div>
        </div>
        <div className={`${style.study__texts} ${style.study__texts__start}`}>
          <h1 className={style.study__title1}>ROUND 2 FINDINGS</h1>
          <div className={style.study__text}>
            <div className={style.study__number}>1</div>
            <p className={style.study__paragraph1}>
              The payment process is easy, but doesn&lsquo;t seems safety.
            </p>
          </div>
          <div className={style.study__text}>
            <div className={style.study__number}>2</div>
            <p className={style.study__paragraph1}>
              Users want to the option to choose more than one unit of meals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Study;

'use client';

import { Icon } from '@iconify/react';
import style from './hero.module.scss';

const Hero = ({ title, summary, img }) => {
  return (
    <div className={style.hero} style={{ backgroundImage: `url('${img}')` }}>
      <div className={style.hero__container}>
        <h1 className={style.hero__title}>
          <Icon className={style.hero__icon} icon='icons8:babys-room' /> {title}
        </h1>

        <p className={style.hero__summary}>{summary}</p>
      </div>
      {/* <img src={img} alt={title} className={style.hero__img} /> */}
    </div>
  );
};

export default Hero;

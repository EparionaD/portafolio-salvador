'use client';

import { Icon } from '@iconify/react';
import style from './hero.module.scss';

const Hero = ({ title, summary, img, img1 }) => {
  const screenWidth = window.screen.width;

  return (
    <div
      className={style.hero}
      style={{ backgroundImage: `url('${screenWidth >= 992 ? img : img1}')` }}
    >
      <div className={style.hero__container}>
        <h1 className={style.hero__title}>
          <Icon className={style.hero__icon} icon='icons8:babys-room' /> {title}
        </h1>

        <p className={style.hero__summary}>{summary}</p>
      </div>
      {/* <Image src={} /> */}

      {/* <img src={img} alt={title} className={style.hero__img} /> */}
    </div>
  );
};

export default Hero;

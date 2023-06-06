'use client';

import { Icon } from '@iconify/react';
import style from './take2.module.scss';
import Image from 'next/image';

const Take = () => {
  return (
    <div className={style.forward}>
      <h4 className={style.forward__title}>TAKEAWAYS</h4>
      <div className={style.forward__container}>
        <Image
          src='https://res.cloudinary.com/eparionad/image/upload/v1686083377/porfolioSalvador/Captura_desde_2023-06-06_15-29-14_mnsci3.png'
          width={469}
          height={776}
          alt='Like Home'
          className={style.forward__image}
        />
        <div className={style.take}>
          <div>
            <div className={style.take__hero}>
              <Icon
                icon='mdi:tooltip-check-outline'
                className={style.take__icon}
              />
              <h1 className={style.take__title}>Impacts</h1>
            </div>
            <p>
              The users think Like Home app is really easy to use and they can
              order food quickly. One quote from peer feedback: “Select meals is
              easy. That is what you want to in an delivery app.”
            </p>
          </div>
          <div>
            <div className={style.take__hero}>
              <Icon
                icon='material-symbols:menu-book-outline-rounded'
                className={style.take__icon}
              />
              <h1 className={style.take__title}>What I learned</h1>
            </div>
            <p>
              While designing the Like Home app, I learned the importance of
              usability studies. The user feedback is a powerful resource to
              improve your designs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Take;

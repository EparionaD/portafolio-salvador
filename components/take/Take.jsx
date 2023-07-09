'use client';

import { Icon } from '@iconify/react';
import style from './take.module.scss';
import Image from 'next/image';

const Take = () => {
  return (
    <div className={style.forward}>
      <h4 className={style.forward__title}>TAKEAWAYS</h4>
      <div className={style.forward__container}>
        <Image
          src='https://res.cloudinary.com/eparionad/image/upload/v1688868929/porfolioSalvador/parentHood/movil_cb9qck.png'
          width={511}
          height={848}
          alt='Takeaways'
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
            <p className={style.take__text}>
              Users shared that the app is useful and think this could actually
              help to first time parents. One quote from peer feedback was that
              “you can easily search for information about pregnancy and raising
              babies in Parenthood app, it’s simple and satisfactory.”
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
            <p className={style.take__text}>
              I learned that even small details (like a search filter or a tone
              colour) can do a big difference in the user experience. Through
              the design process the user feedback was determinant to find
              improve oportunities and come up with solutions that were both
              feasible and useful.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Take;

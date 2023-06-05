'use client';

import { Icon } from '@iconify/react';
import style from './take1.module.scss';
import Image from 'next/image';

const Take = () => {
  return (
    <div className={style.forward}>
      <h4 className={style.forward__title}>TAKEAWAYS</h4>
      <div className={style.forward__container}>
        <Image
          src='https://res.cloudinary.com/eparionad/image/upload/v1685915742/porfolioSalvador/andes_bus_as9oqk.png'
          width={563}
          height={294}
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
            <p>
              Our target users shared that the design was easy to navigate and
              the buying process was quick enough. The sequential flow was
              improved with a guide bar.
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
              I learned that small details can have a huge impact on the user
              experience. Add elements like a guide bar, icons or images help to
              the users in the navigation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Take;

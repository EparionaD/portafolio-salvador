'use client';

import { useRouter } from 'next/navigation';

import style from './card.module.scss';

const Card = ({ project }) => {
  const router = useRouter();

  return (
    <div
      className={`${style.card}`}
      style={{ backgroundImage: `url(${project.fondo})` }}
    >
      {/* <h4 className={style.card__title}>{project.title}</h4> */}
      <div
        className={style.card__effect}
        onClick={() => {
          router.push(`/${project.slug}`);
        }}
      >
        <h4 className={style.card__subtitle}>{project.subtitle}</h4>
        <p>{project.summary}</p>
      </div>
    </div>
  );
};

export default Card;

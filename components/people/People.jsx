import Image from 'next/image';
import style from './people.module.scss';

const People = ({ peoples }) => {
  return (
    <div className={style.people}>
      {peoples.map((people) => (
        <div className={style.people__card} key={people.name}>
          <Image
            src={people.image}
            width={640}
            height={960}
            className={style.people__image}
            alt='Nombre'
          />
          <div className={style.people__container}>
            <h3 className={style.people__name}>{people.name}</h3>
            <h4 className={style.people__job}>{people.job}</h4>
            <p className={style.people__description}>{people.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default People;

import Image from 'next/image';

import { IoMdMail } from 'react-icons/io';
import { BsLinkedin } from 'react-icons/bs';

import style from './page.module.scss';
import data from '../data/projects.json';
import Card from '@/components/card/Card';

const IndexPage = () => {
  const projects = data.data;
  return (
    <main>
      <section className={style.index}>
        <div className={style.index__container}>
          <div>
            <h1 className={style.index__title}>Salvador Pariona</h1>
            <p className={style.index__subtitle}>user experience designer</p>
          </div>
          <div className={style.index__text}>
            Creating digital experiences that make a positive impact on peoples
            lives, through user research, design thinking, and a passion for
            innovation.
          </div>
          <div className={style.index__social}>
            <a href='mailto:sdjpariona@gmail.com' target='_blank'>
              <IoMdMail className={style.index__icon} />
            </a>
            <a
              href='https://www.linkedin.com/in/salvador-pariona-d%C3%ADaz-08372653/'
              target='_blank'
            >
              <BsLinkedin className={style.index__icon} />
            </a>
          </div>
        </div>
        <div className={style.index__image}>
          <Image
            src='https://res.cloudinary.com/eparionad/image/upload/v1683252576/porfolioSalvador/339151952_163502496629315_2817647897500916235_n_esxlns.jpg'
            width={720}
            height={960}
            alt='Salvador Pariona'
            className={style.index__img}
          />
        </div>
      </section>
      <section className={style.projects}>
        <h1 className={style.projects__title}>UX Projects</h1>
        <div className={style.projects__container}>
          {projects.map((project) => (
            <Card project={project} key={project.slug} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default IndexPage;

import Image from 'next/image';
import Link from 'next/link';

import { IoMdMail } from 'react-icons/io';
import { BsLinkedin } from 'react-icons/bs';
import style from './page.module.scss';

const AboutPage = () => {
  return (
    <main className={style.about}>
      <div>
        <h1 className={style.about__title}>Hello!</h1>
        <div className={style.about__container}>
          <section className={style.about__content}>
            <article>
              My name is Salvador Pariona and I’m a communicator graduated from
              the Universidad Nacional Mayor de San Marcos (UNMSM) - Lima, Peru.
            </article>
            <article>
              As a UX designer, I am passionate about crafting experiences that
              not only look beautiful but also solve real problems for real
              people. My approach to design is centered on empathy and
              collaboration, working closely with cross-functional teams to
              deliver solutions that meet business objectives while also
              delighting users.
            </article>
            <article>
              My design philosophy is guided by a deep understanding of user
              behavior and psychology, and I constantly strive to stay
              up-to-date with the latest design trends and tools. I am dedicated
              to creating products that are not only usable and functional but
              also enjoyable and memorable.
            </article>
          </section>
          <div className={style.image}>
            <Image
              src='https://res.cloudinary.com/eparionad/image/upload/v1683252576/porfolioSalvador/339151952_163502496629315_2817647897500916235_n_esxlns.jpg'
              width={720}
              height={960}
              alt='Salvador Pariona'
              className={style.image__img}
            />
          </div>
        </div>
      </div>
      <div className={style.button}>
        <Link className={style.button__link} href='#'>
          My resume
        </Link>
      </div>
      <div className={style.contact}>
        <h3 className={style.contact__title}>Contact</h3>
        <div className={style.contact__container}>
          <IoMdMail className={style.contact__icon} />
          <a
            href='mailto:sdjpariona@gmail.com'
            target='_blank'
            className={style.contact__link}
          >
            sdjpariona@gmail.com
          </a>
        </div>
        <div className={style.contact__container}>
          <BsLinkedin className={style.contact__icon} />
          <a
            href='https://www.linkedin.com/in/salvador-pariona-d%C3%ADaz-08372653/'
            target='_blank'
            className={style.contact__link}
          >
            salvadorpariona
          </a>
        </div>
      </div>
      <div className={style.footer}>
        <span className={style.footer__title}>Powered by</span>
        <Image
          src='https://res.cloudinary.com/eparionad/image/upload/v1683253844/porfolioSalvador/logo_arcoiris_POSITIVO_rfigly.png'
          width={4553}
          height={1103}
          alt='Arco Iris Comunicación Integral'
          className={style.footer__logo}
        />
      </div>
    </main>
  );
};

export default AboutPage;

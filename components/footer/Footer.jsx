'use client';

import Image from 'next/image';
import style from './footer.module.scss';
import Link from 'next/link';

import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <div className={style.footer}>
      <h1 className={style.footer__title}>LET'S CONECT</h1>
      <p className={style.footer__paragraph}>
        Thank you for your time reviewing my work on the Parenthood app!
      </p>
      <p className={style.footer__paragraph}>
        If you’d like to see more or would like to get in touch, my contact
        information is provided below.
      </p>
      <div className={style.footer__contacts}>
        <div className={style.footer__contact}>
          <Icon className={style.footer__icon} icon='ic:baseline-mail' />
          <Link href='mailto:sdjpariona@gmail.com'>sdjpariona@gmail.com</Link>
        </div>
        <div className={style.footer__contact}>
          <Icon className={style.footer__icon} icon='mdi:linkedin' />
          <Link
            href='https://www.linkedin.com/in/salvador-pariona-08372653'
            target='_blank'
          >
            salvadorpariona
          </Link>
        </div>
      </div>
      <div className={style.footer__container}>
        <p>Powered by</p>
        <Image
          src='https://res.cloudinary.com/eparionad/image/upload/v1685850212/porfolioSalvador/logo_arcoiris_POSITIVO_wsdbym.png'
          width={4553}
          height={1103}
          alt='logo arcoiris'
          className={style.footer__logo}
        />
      </div>
    </div>
  );
};

export default Footer;

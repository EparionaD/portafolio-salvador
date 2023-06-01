'use client';

import Link from 'next/link';
import Image from 'next/image';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import style from './navigation.module.scss';
import logo from '../../assets/logo.png';
import flag from '../../assets/spain.svg';
import { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={style.menu} id='nav'>
      <Link
        href='/'
        className={style.menu__logo}
        onClick={() => setIsOpen(false)}
      >
        <Image
          src={logo}
          width={66}
          height={59}
          className={style.menu__img}
          alt='Logo'
        />
      </Link>
      <ul className={`${style.menu__container} ${isOpen && style.isActive}`}>
        <a href='#' className={style.translate}>
          Spanish
          <Image src={flag} className={style.translate__icon} alt='Spanish' />
        </a>
        <div className={style.menu__links}>
          <li onClick={() => setIsOpen(false)}>
            <Link href='/work' className={style.menu__link}>
              work
            </Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link href='/about' className={style.menu__link}>
              about me
            </Link>
          </li>
        </div>
      </ul>
      <div
        className={`${style.menu__hamburger} ${isOpen && style.isActive}`}
        onClick={() => setIsOpen(true)}
      >
        <AiOutlineMenu className={style.menu__icon} />
      </div>
      <div
        className={`${style.menu__close} ${isOpen && style.isActive}`}
        onClick={() => setIsOpen(false)}
      >
        <AiOutlineClose className={style.menu__icon} />
      </div>
    </nav>
  );
};

export default Navigation;

import { Montserrat, Actor } from 'next/font/google';

export const monserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '600', '800', '900'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-monserrat',
  display: 'optional',
});
export const actor = Actor({
  weight: ['400'],
  subsets: ['latin'],
  style: ['normal'],
  variable: '--font-actor',
  display: 'optional',
});

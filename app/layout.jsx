import Navigation from '@/components/navigation/Navigation';
import './globals.css';

import { monserrat, actor } from '@/services/googlefonts.services.js';

import style from './page.module.scss';

export const metadata = {
  title: 'Salvador Pariona',
  description: 'User experience designer',
};

export default function RootLayout({ children }) {
  return (
    <html lang='es-PE'>
      <body className={`${monserrat.variable} ${actor.variable} ${style.main}`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}

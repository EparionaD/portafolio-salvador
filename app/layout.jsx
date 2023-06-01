import Navigation from '@/components/navigation/Navigation';
import './globals.css';

import style from './page.module.scss';

export const metadata = {
  title: 'Salvador Pariona',
  description: 'User experience designer',
};

export default function RootLayout({ children }) {
  return (
    <html lang='es-PE'>
      <body className={`${style.fonts} ${style.main}`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}

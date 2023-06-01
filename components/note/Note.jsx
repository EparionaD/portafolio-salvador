'use client';

import { Icon } from '@iconify/react';
import style from './note.module.scss';

const Note = ({ notes, color }) => {
  return (
    <div className={style.note__container}>
      {notes.map((note) => (
        <div
          className={`${style.note}`}
          key={note.title}
          style={{ backgroundColor: `#${color}` }}
        >
          <Icon className={style.note__icon} icon={`${note.icon}`} />
          <h1 className={style.note__title}>{note.title}</h1>
          <p className={style.note__paragraph}>{note.paragraph}</p>
        </div>
      ))}
    </div>
  );
};

export default Note;

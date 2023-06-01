import style from './notecolor.module.scss';

const NoteColor = ({ points, color }) => {
  return (
    <div className={style.note__container}>
      {points.map((point) => (
        <div
          className={style.note}
          key={point.title}
          style={{ backgroundColor: `#${color}` }}
        >
          <h2 className={style.note__title}>{point.title}</h2>
          <p className={style.note__paragraph}>{point.paragraph}</p>
        </div>
      ))}
    </div>
  );
};

export default NoteColor;

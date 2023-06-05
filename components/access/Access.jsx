import style from './access.module.scss';

const Access = ({ steps, color }) => {
  console.log(steps);
  return (
    <div className={style.step}>
      <h1 className={style.step__title}>ACCESIBILITY CONSIDERATIONS</h1>
      <div className={style.step__container}>
        {steps.map((step) => (
          <div className={style.step__items}>
            <div
              className={style.step__num}
              style={{ backgroundColor: `#${color}` }}
            >
              {step.number}
            </div>
            <p className={style.step__paragraph}>{step.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Access;

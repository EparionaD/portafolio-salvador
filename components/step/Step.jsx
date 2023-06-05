import style from './step.module.scss';

const Step = ({ steps }) => {
  return (
    <div className={style.step}>
      <h1 className={style.step__title}>NEXT STEPS</h1>
      <div className={style.step__container}>
        {steps.map((step) => (
          <div className={style.step__items}>
            <div className={style.step__num}>{step.number}</div>
            <p className={style.step__paragraph}>{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step;

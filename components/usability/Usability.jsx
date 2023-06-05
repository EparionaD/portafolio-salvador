import style from './usability.module.scss';

const Usuability = () => {
  return (
    <div className={style.usuability}>
      <div className={style.usuability__container}>
        <div className={style.usuability__items}>
          <h5 className={style.usuability__title}>Study type</h5>
          <p className={style.usuability__paragraph}>
            Unmoderated usuability study
          </p>
        </div>
        <div className={style.usuability__items}>
          <h5 className={style.usuability__title}>Location</h5>
          <p className={style.usuability__paragraph}>Lima, Perú. Remote</p>
        </div>
        <div className={style.usuability__items}>
          <h5 className={style.usuability__title}>Participants</h5>
          <p className={style.usuability__paragraph}>4 participants</p>
        </div>
        <div className={style.usuability__items}>
          <h5 className={style.usuability__title}>Length</h5>
          <p className={style.usuability__paragraph}>30 to 60 minutes</p>
        </div>
      </div>
      <div className={style.usuability__hero}>
        <p>These were the main findings uncovered by the usuability study:</p>
      </div>
      <div className={style.usuability__containercircle}>
        <div className={style.usuability__circles}>
          <h5 className={style.usuability__title}>Graphics</h5>
          <p className={style.usuability__paragraph}>
            Users want better graphics and stats about pregnancy and babies.
          </p>
        </div>
        <div className={style.usuability__circles}>
          <h5 className={style.usuability__title}>Forum</h5>
          <p className={style.usuability__paragraph}>
            This section needs to improve visual aspect.
          </p>
        </div>
        <div className={style.usuability__circles}>
          <h5 className={style.usuability__title}>Searching</h5>
          <p className={style.usuability__paragraph}>
            Users want more detail in searching tool like filters to improve
            results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Usuability;

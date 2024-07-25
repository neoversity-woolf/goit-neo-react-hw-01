import css from './Statistic.module.css';

const Statistic = ({ stats }) => {
  const userStats = Object.entries(stats);

  return (
    <ul className={css.stats}>
      {userStats.map((userStat, idx) => {
        const [title, value] = userStat;
        return (
          <li key={idx}>
            <span className={css.label}>{title}</span>
            <span className={css.quantity}>{value}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default Statistic;

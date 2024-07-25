import css from './TransactionsDetail.module.css';

const TransactionsDetail = ({ details }) => {
  const createTableContentMarkup = ({ id, type, amount, currency }) => {
    return (
      <tr key={id} className={css.tr}>
        <td className={css.td}>{type}</td>
        <td className={css.td}>{amount}</td>
        <td className={css.td}>{currency}</td>
      </tr>
    );
  };

  return <>{details.map(createTableContentMarkup)}</>;
};

export default TransactionsDetail;

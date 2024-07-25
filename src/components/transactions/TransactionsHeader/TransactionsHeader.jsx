import css from './TransactionsHeader.module.css';

const TransactionsHeader = () => {
  const tableHeaderItems = ['Type', 'Amount', 'Currency'];

  const createTableHeaderMarkup = (item, idx) => {
    return (
      <th key={idx} className={css.th}>
        {item}
      </th>
    );
  };

  return <tr>{tableHeaderItems.map(createTableHeaderMarkup)}</tr>;
};

export default TransactionsHeader;

import css from './TransactionHeader.module.css';

const TransactionHeader = () => {
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

export default TransactionHeader;

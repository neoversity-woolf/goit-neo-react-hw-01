import { TransactionHeader, TransactionDetail } from '@components/transactions';

import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead>
        <TransactionHeader />
      </thead>

      <tbody>
        <TransactionDetail details={items} />
      </tbody>
    </table>
  );
};

export default TransactionHistory;

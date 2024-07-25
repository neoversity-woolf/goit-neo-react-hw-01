import {
  TransactionsHeader,
  TransactionsDetail,
} from '@components/transactions';

import css from './TransactionsHistory.module.css';

const TransactionsHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead>
        <TransactionsHeader />
      </thead>

      <tbody>
        <TransactionsDetail details={items} />
      </tbody>
    </table>
  );
};

export default TransactionsHistory;

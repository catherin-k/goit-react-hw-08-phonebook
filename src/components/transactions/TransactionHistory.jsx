import PropTypes from 'prop-types';
import { Table, TableHead, Row } from './TransactionHistory.styled';
import { TransactionItem } from './TransactionItem';
export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <Row>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </Row>
      </TableHead>

      <tbody>
        {items.map(item => (
          <TransactionItem
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }).isRequired
  ),
};

import PropTypes from 'prop-types';
import { Row, Column } from './TransactionHistory.styled';
export const TransactionItem = ({ type, amount, currency }) => {
  return (
    <Row>
      <Column>{type}</Column>
      <Column>{amount}</Column>
      <Column>{currency}</Column>
    </Row>
  );
};

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

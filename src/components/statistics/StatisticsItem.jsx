import PropTypes from 'prop-types';
import { Label, Percentage } from './Statistics.styled';

export const StatisticsItem = ({ label, percentage }) => {
  return (
    <>
      <>
        <Label>{label}</Label>
        <Percentage>{percentage}%</Percentage>
      </>
    </>
  );
};

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

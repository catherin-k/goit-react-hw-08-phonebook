import PropTypes from 'prop-types';
import {
  StatisticsContainer,
  Title,
  StatisticsList,
  Item,
} from './Statistics.styled';
import { StatisticsItem } from './StatisticsItem';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsContainer>
      {title && <Title>{title}</Title>}

      <StatisticsList>
        {stats.map(stat => (
          <Item key={stat.id}>
            <StatisticsItem label={stat.label} percentage={stat.percentage} />
          </Item>
        ))}
      </StatisticsList>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }).isRequired
  ),
};

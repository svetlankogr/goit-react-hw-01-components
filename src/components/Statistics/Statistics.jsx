import PropTypes from 'prop-types';
import {
  StatisticsSection,
  Title,
  StatisticsList,
  StatisticsItem,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}
      <StatisticsList>
        {stats.map(el => (
          <StatisticsItem key={el.id}>
            <span>{el.label}</span>
            <Percentage>{el.percentage}%</Percentage>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

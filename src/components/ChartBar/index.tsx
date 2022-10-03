import dayjs from 'dayjs';
import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Test } from '../../types';

Chartjs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type IChartBarProps = {
  tests: Test[];
};

function ChartBar({ tests }: IChartBarProps) {
  const getChartData = () => {
    const data = tests.map((el) => el.result);
    const labels = tests.map((el) => dayjs(el.time).format('YY MM DD'));

    return {
      labels,
      datasets: [{ label: 'results', data, backgroundColor: '#0052cc' }],
    };
  };
  return (
    <Bar
      data={getChartData()}
      options={{
        responsive: true,
      }}
    />
  );
}

export default ChartBar;

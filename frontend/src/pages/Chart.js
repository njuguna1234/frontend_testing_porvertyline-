import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

function PovertyEradication() {
  const [povertyData, setPovertyData] = useState(null);

  useEffect(() => {
    fetch('/poverty-eradication')
      .then(response => response.json())
      .then(data => setPovertyData(data));
  }, []);

  if (!povertyData) return <div>Loading...</div>;

  const chartData = {
    labels: ['Year 1', 'Year 2', 'Year 3'],
    datasets: [
      {
        label: 'Poverty Reduction Progress',
        data: [30, 50, 80], // Example data
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      }
    ]
  };

  return (
    <div>
      <h2>Poverty Eradication Progress</h2>
      <Line data={chartData} />
    </div>
  );
}

export default PovertyEradication;

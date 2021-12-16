import React from 'react';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

function HorizontalBar({data}) {

  const dataHorBar = {
    labels: data.labels,
    datasets: [
      {
        label: 'Dataset',
        backgroundColor: '#EC932F',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: data.data,
        indexAxis: 'y'
      },
    ]
  };

  return <Chart type='bar' data={dataHorBar} style={{backgroundColor: 'white'}}/>;
}

export default HorizontalBar;
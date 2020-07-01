import React, { useState, useEffect } from "react";
import api from '../../services/api';
import { Bar } from "react-chartjs-2";

export default function Chart() {
  const [chartData, setChartData] = useState({});
  
  async function handleData() {
    const { data } = await api.get('/dashboards/clients')
    const labels = ['Mulheres', 'Homens', 'Total'];
    var woman;
    var man;
    var total;
    woman = data[0][0].count;
    man = data[1][0].count;
    total = data[2];
    var datasets = [{
      label:"Clientes por Genero",
      data: [woman, man, total],
      backgroundColor:[
        'rgba(100,6,16,0.6)',
        'rgba(100,192,192,0.6)',
        'rgba(300,50,66,0.6)',
      ],
      borderWidth:3,
    }];

    setChartData({ labels: labels,
                   datasets:datasets })
    
    
  }
  useEffect(() => {
    handleData()
    
  }, []);

  return (
    <div style={{height:"1080px", width:"900px" }}>
    <Bar data={chartData} options={{responsive:true, scales:{
      yAxes:[
        {ticks:{
          beginAtZero:true,
        }}
      ]
    } }} />
    </div>
  )
}
import React from 'react';

/* Libraries */
import { WordCloud } from '@ant-design/charts';

/* Utilities */
import { useHistory } from 'react-router-dom';

const TinyWordCloudChart = React.memo(function ({ /* data */ core }) {
  const data = [
    {
      name: 'medicina',
      products: Math.floor(Math.random() * 40 + 10),
      citations: Math.floor(Math.random() * 40 + 10),
      id: '627fc4f7c5c5926fd6c4c7c6',
    },
    {
      name: 'plasmocitosis',
      products: Math.floor(Math.random() * 40 + 10),
      citations: Math.floor(Math.random() * 40 + 10),
      id: '627fc4e9c5c5926fd6c41f5b',
    },
    {
      name: 'vacunación',
      products: Math.floor(Math.random() * 40 + 10),
      citations: Math.floor(Math.random() * 40 + 10),
      id: '627fc4e9c5c5926fd6c41f6c',
    },
    {
      name: 'glucogenosis',
      products: Math.floor(Math.random() * 40 + 10),
      citations: Math.floor(Math.random() * 40 + 10),
      id: '627fc4e9c5c5926fd6c42038',
    },
    {
      name: 'leucemia linfoide',
      products: Math.floor(Math.random() * 40 + 10),
      citations: Math.floor(Math.random() * 40 + 10),
      id: '627fc4e9c5c5926fd6c4203d',
    },
    {
      name: 'antimicobacteriano',
      products: Math.floor(Math.random() * 40 + 10),
      citations: Math.floor(Math.random() * 40 + 10),
      id: '627fc4e9c5c5926fd6c4207d',
    },
    {
      name: 'lidocaína',
      products: Math.floor(Math.random() * 40 + 10),
      citations: Math.floor(Math.random() * 40 + 10),
      id: '627fc4e9c5c5926fd6c420ee',
    },
    {
      name: 'factor de riesgo',
      products: Math.floor(Math.random() * 40 + 10),
      citations: Math.floor(Math.random() * 40 + 10),
      id: '627fc4e9c5c5926fd6c42104',
    },
    {
      name: 'Soporte vital',
      products: Math.floor(Math.random() * 40 + 10),
      citations: Math.floor(Math.random() * 40 + 10),
      id: '627fc4e9c5c5926fd6c42133',
    },
    {
      name: 'trombosis',
      products: Math.floor(Math.random() * 40 + 10),
      citations: Math.floor(Math.random() * 40 + 10),
      id: '627fc4e9c5c5926fd6c421a8',
    },
  ];
  const history = useHistory();
  let config = {
    data: data,
    wordField: 'name',
    weightField: 'products',
    colorField: 'name',
    wordStyle: {
      fontFamily: 'Verdana',
      fontSize: [10, 22],
      rotation: 0,
    },
    height: 140,
    tooltip: {
      formatter: (datum) => {
        return {
          name: datum.text,
          value:
            datum.value === 1
              ? `${datum.value} producto`
              : `${datum.value} productos`,
        };
      },
    },
  };

  return (
    <WordCloud
      {...config}
      onReady={(plot) => {
        plot.on('plot:click', (evt) => {
          if (evt.data) {
            history.push(`/app/subjects?id=${evt.data.data.datum.id}`);
            core.setURL(`/app/subjects?id=${evt.data.data.datum.id}`);
          }
        });
      }}
    />
  );
});

export default TinyWordCloudChart;

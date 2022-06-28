import React from 'react';

/* Utilities */
import { APIRequest } from '../../apis/api';
import { useLocation } from 'react-router';

/* Components */
import ErrorWarning from '../ErrorWarning';
import LoadingCard from '../LoadingCard';

/* Charts */
import WordCloudChart from '../charts/WordCloudChart';

const SubjectsWrapper = ({ core }) => {
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
  /*   const location = useLocation();
  const [state] = APIRequest(
    `${location.pathname}${location.search}&data=subjects&limit=20`
  );

  if (state.isError) {
    return <ErrorWarning />;
  }
  if (state.isLoading) {
    return <LoadingCard />;
  } */
  return (
    <div>
      {/*  <WordCloudChart title="Temas" data={state.data.data} core={core} /> */}
      <WordCloudChart title="Temas" data={data} core={core} />
    </div>
  );
};

export default SubjectsWrapper;

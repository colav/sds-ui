import React, { useEffect } from 'react';

/* Utilities */
import { APIRequest } from '../../apis/api';
import { useLocation } from 'react-router';

/* Components */
import ErrorWarning from '../ErrorWarning';
import LoadingCard from '../LoadingCard';

/* Charts */
import WordCloudChart from '../charts/WordCloudChart';

const SubjectsWrapper = ({ core }) => {
  const location = useLocation();
  const [state, setState] = APIRequest(
    `${location.pathname}${location.search}&data=subjects&limit=20`
  );

  useEffect(() => {
    setState(`${location.pathname}${location.search}&data=subjects&limit=20`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  if (state.isError) {
    return <ErrorWarning />;
  }
  if (state.isLoading) {
    return <LoadingCard />;
  }
  return (
    <div>
      <WordCloudChart title="Temas" data={state.data.data} core={core} />
    </div>
  );
};

export default SubjectsWrapper;

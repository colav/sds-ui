import React from 'react';

/* Utilities */
import { APIRequest } from '../../apis/api';
import { useLocation } from 'react-router';

/* Components */
import ErrorWarning from '../ErrorWarning';
import LoadingCard from '../LoadingCard';

/* UI Library Components */
import { Col, Row } from 'antd';

/* Charts */
import ColumnChart from '../charts/ColumnChart';
import MapChart from '../charts/MapChart';

const CitationsWrapper = ({ core }) => {
  const location = useLocation();
  const [state] = APIRequest(
    `${location.pathname}${location.search}&data=citations`
  );

  if (state.isError || state.data.error) {
    return <ErrorWarning />;
  }
  if (state.isLoading) {
    return <LoadingCard />;
  }
  return (
    <Row gutter={[15, 15]}>
      <Col span={24}>
        <ColumnChart
          data={state.data.data.yearly_citations}
          title="Citas"
          total={state.data.data.citations}
        />
      </Col>
      <Col span={24}>
        <MapChart
          data={state.data.data.geo}
          title="Alcance geográfico de citas"
          type="citationsMap"
        />
      </Col>
    </Row>
  );
};

export default CitationsWrapper;

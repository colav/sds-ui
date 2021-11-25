import React from "react";

/* Components */
import DocumentByType from "./DocumentByType";

/* Charts */
import PieChart from "./charts/PieChart";
import VennChart from "./charts/VennChart";

/* UI Library Components */
import { Col, Row, Tabs } from "antd";

/* UI Library Sub-components */
const { TabPane } = Tabs;

const ProductionResult = ({ data, URL }) => {
  const tabMaker = (tabList) => {
    return (
      <Tabs defaultActiveKey="0" type="card" tabBarGutter={5}>
        {tabList.map((item, i) => (
          <TabPane tab={item} key={i}>
            <DocumentByType type={item} URL={URL} literature={true} />
          </TabPane>
        ))}
      </Tabs>
    );
  };
  console.log(data);
  return data.open_access ? (
    <Row gutter={[15, 15]}>
      <Col xs={24} sm={24} md={12}>
        <PieChart data={data.open_access} title="Open Access" />
      </Col>
      <VennChart data={data.venn_source} />
      <Col span={24}>{data.types ? tabMaker(data.types) : ""}</Col>
    </Row>
  ) : (
    ""
  );
};

export default ProductionResult;

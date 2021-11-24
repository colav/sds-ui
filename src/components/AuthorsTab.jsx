import React, { useState, useEffect } from "react";

/* Components */
import ErrorWarning from "./ErrorWarning";
import LoadingCard from "./LoadingCard";

/* UI Components Library */
import { Card, List, Typography, Space, Avatar } from "antd";

/* Icons */
import { CitationsIcon } from "../media/icons/citations";
import {
  CalendarOutlined,
  BankOutlined,
  TeamOutlined,
} from "@ant-design/icons";

/* Utilities */
import { APIRequest } from "../apis/api";

/* UI Library Sub-components */
const { Link } = Typography;

const AuthorsTab = ({ URL }) => {
  const [pagination, setPagination] = useState({ max: 10, page: 1 });
  const [state, setUrl] = APIRequest(
    `${URL}&data=authors&max=${pagination.max}&page=${pagination.page}`
  );

  const onPageChange = ({ page, pageSize }) => {
    setPagination({ page: page, max: pageSize });
    window.scrollTo(0, 745);
  };

  useEffect(() => {
    setUrl(`${URL}&data=authors&max=${pagination.max}&page=${pagination.page}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination]);

  if (state.isError) {
    return <ErrorWarning />;
  }
  if (state.isLoading) {
    return <LoadingCard />;
  }
  return (
    <Card
      headStyle={{ backgroundColor: "#003e65", color: "white" }}
      size="small"
      title="Autores"
    >
      <List
        itemLayout="vertical"
        size="large"
        dataSource={state.data.data || state.data}
        pagination={{
          size: "small",
          position: "bottom",
          total: state.data.total,
          onChange: (page, pageSize) =>
            onPageChange({
              page,
              pageSize,
            }),
          hideOnSinglePage: true,
          current: pagination.page,
          pageSize: pagination.max,
        }}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Space style={{ fontSize: 18 }}>
                {React.createElement(CalendarOutlined)}
                Publicaciones: {item.papers_count}
              </Space>,
              <Space style={{ fontSize: 18 }}>
                {React.createElement(CitationsIcon)}
                Citado: {item.citations_count}
              </Space>,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar>{item.name.charAt(0)}</Avatar>}
              title={
                <Link
                  style={{ fontSize: 15, textDecoration: "underline" }}
                  href={`/app/authors?id=${item.id}`}
                >
                  {item.name}
                </Link>
              }
              description={
                <>
                  <div>
                    <TeamOutlined />{" "}
                    <Link
                      style={{ fontSize: 12, textDecoration: "underline" }}
                      href={`/app/groups?id=${item.affiliation.group.id}`}
                    >
                      {item.affiliation.group.name}
                    </Link>
                  </div>
                  <div>
                    <BankOutlined />{" "}
                    <Link
                      style={{ fontSize: 12, textDecoration: "underline" }}
                      href={`/app/institutions?id=${item.affiliation.institution.id}`}
                    >
                      {item.affiliation.institution.name}
                    </Link>
                  </div>
                </>
              }
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default AuthorsTab;
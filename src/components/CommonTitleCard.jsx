import React from "react";

/* Utilities */
import { Link } from "react-router-dom";

/* Components */
import { externalUrls } from "./externalUrls";

/* UI Library Components*/
import { Col, Card, Avatar, Typography } from "antd";

/* Icons */
import { ReadOutlined, BankOutlined } from "@ant-design/icons";

/* UI Library Sub-components */
const { Meta } = Card;

const CommonTitleCard = ({ data, type }) => {
  const logoPath =
    type === "institutions" ? data.logo : data.institution[0].logo;

  return (
    <Col span={24}>
      <Card actions={externalUrls(data.external_urls)}>
        <Meta
          avatar={
            <Avatar
              size={{ xs: 60, sm: 60, md: 150, lg: 150, xl: 150, xxl: 150 }}
              src={
                logoPath || (
                  <ReadOutlined style={{ color: "gray", fontSize: "40px" }} />
                )
              }
              style={{
                backgroundColor: "white",
                padding: 10,
                border: "1px solid lightgray",
              }}
            />
          }
          description={
            <>
              <Typography.Title level={2} style={{ marginBottom: 0 }}>
                {data.name}{" "}
                {data.abbreviations ? `(${data.abbreviations})` : ""}
              </Typography.Title>
              <Typography.Paragraph
                style={{ fontSize: 22, margin: 0 }}
                underline
              >
                {type !== "institutions" && (
                  <>
                    <BankOutlined
                      style={{ marginRight: "10px", color: "gray" }}
                    />

                    <Link to={`/app/institutions?id=${data.institution[0].id}`}>
                      {data.institution[0].name}
                    </Link>
                  </>
                )}
              </Typography.Paragraph>
            </>
          }
        />
      </Card>
    </Col>
  );
};

export default CommonTitleCard;
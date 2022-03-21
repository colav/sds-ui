import React from "react";

/* Utilities */
import { Link } from "react-router-dom";

/* UI Library */
import { Avatar, Tag } from "antd";

/* Icons */
import { CheckCircleOutlined } from "@ant-design/icons";

/* Media */
import ODS_logo from "../media/ODS_logo.svg";
import PTS_logo from "../media/PTS_logo.svg";
import PDD_logo from "../media/PDD_logo.svg";

const PoliciesTag = ({ type, data, core }) => {
  const logo = { ODS: ODS_logo, PTS: PTS_logo, PDD: PDD_logo };
  const policies = core.URL.slice(0, 13) === "/app/policies";

  if (policies) {
    return (
      <Tag id="policies__tag">
        <img src={logo[type]} alt={`Logotipo de ${type}`} id="tag__logo" />
        {type === "ODS" ? (
          typeof data === "number" ? (
            <Avatar id="tag__avatar">{data}</Avatar>
          ) : (
            data.map((item) => <Avatar id="tag__avatar">{item.index}</Avatar>)
          )
        ) : (
          <Avatar id="tag__avatar" icon={<CheckCircleOutlined />} />
        )}
      </Tag>
    );
  }
  return type === "ODS" ? (
    <Tag id="policies__tag">
      <img src={logo[type]} alt={`Logotipo de ${type}`} id="tag__logo" />
      {typeof data === "number" ? (
        <Avatar id="tag__avatar">{data}</Avatar>
      ) : (
        data.map((item) => (
          <Link
            key={item.id}
            to={`/app/policies?id=${item.id}`}
            onClick={() => core.setURL(`/app/policies?id=${item.id}`)}
          >
            <Avatar id="tag__avatar">{item.index}</Avatar>
          </Link>
        ))
      )}
    </Tag>
  ) : (
    <Link
      key={data[0].id}
      to={`/app/policies?id=${data[0].id}`}
      onClick={() => core.setURL(`/app/policies?id=${data[0].id}`)}
    >
      <Tag id="policies__tag">
        <img src={logo[type]} alt={`Logotipo de ${type}`} id="tag__logo" />
        <Avatar id="tag__avatar" icon={<CheckCircleOutlined />} />
      </Tag>
    </Link>
  );
};

export default PoliciesTag;

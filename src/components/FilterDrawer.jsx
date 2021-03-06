import React, { useState } from 'react';

/* UI Library Components */
import { Drawer, Button } from 'antd';

/* Icons */
import { FilterOutlined } from '@ant-design/icons';

/* Components */
import FilterMenu from './FilterMenu';

/* Utilities */
import { useHistory } from 'react-router-dom';

const FilterDrawer = ({ core }) => {
  const history = useHistory();
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onClick = () => {
    const URL = new URLSearchParams(history.location.search);
    let filteredURL = `${history.location.pathname}?`;

    filteredURL += URL.has('data') ? `data=${URL.get('data')}` : '';
    filteredURL += URL.has('id') ? `id=${URL.get('id')}` : '';
    filteredURL += URL.has('keywords')
      ? `&keywords=${URL.get('keywords')}`
      : '';
    core.setURL(filteredURL);
    history.push(filteredURL);
    onClose();
  };

  return (
    <>
      <Button
        size="large"
        icon={<FilterOutlined />}
        onClick={showDrawer}
        className="fixed-widget"
        type="primary"
      >
        Filtros
      </Button>
      <Drawer
        title="Filtros"
        placement={'left'}
        style={{ zIndex: 1002 }}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ padding: 0 }}
        footer={
          <Button size="large" onClick={onClick}>
            Limpiar Filtros
          </Button>
        }
        footerStyle={{ textAlign: 'right' }}
      >
        <FilterMenu core={core} onClose={onClose} />
      </Drawer>
    </>
  );
};

export default FilterDrawer;

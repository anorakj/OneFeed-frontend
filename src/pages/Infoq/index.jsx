import React, { useEffect } from 'react';
import { Card, List } from 'antd';
import { connect } from 'umi';
import UpdateButton from '@/components/UpdateButton';
import styles from './style.less';

const Infoq = ({ dispatch, infoq: { list }, loading }) => {
  useEffect(() => {
    dispatch({
      type: 'infoq/fetch',
      payload: {},
    });
  }, []);

  return (
    <Card
      style={{
        marginTop: 24,
      }}
      bordered={false}
      bodyStyle={{
        padding: '8px 32px 32px 32px',
      }}
      extra={<UpdateButton />}
    >
      <List
        size="large"
        loading={list.length === 0 ? loading : false}
        rowKey="id"
        itemLayout="vertical"
        dataSource={list}
        renderItem={(item) => (
          <List.Item className={styles.ListItem}>
            <List.Item.Meta
              className={styles.listItemMeta}
              title={
                <a
                  className={styles.listItemMetaTitle}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.title}
                </a>
              }
            />
            <span style={{ color: '#828a92', 'font-size': '14px', 'font-weight': 400 }}>
              {item.description}
            </span>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default connect(({ infoq, loading }) => ({
  infoq,
  loading: loading.models.infoq,
}))(Infoq);

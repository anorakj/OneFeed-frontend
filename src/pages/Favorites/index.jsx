import React, { useEffect } from 'react';
import { Card, List } from 'antd';
import { connect } from 'umi';
import UpdateButton from '@/components/UpdateButton';
import styles from './style.less';

const Favorites = ({ dispatch, favorites: { list }, loading }) => {
  useEffect(() => {
    dispatch({
      type: 'favorites/fetch',
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
          </List.Item>
        )}
      />
    </Card>
  );
};

export default connect(({ favorites, loading }) => ({
  favorites,
  loading: loading.models.favorites,
}))(Favorites);

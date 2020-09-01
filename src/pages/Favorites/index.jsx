import React, { useEffect } from 'react';
import { Card, List } from 'antd';
import { connect } from 'umi';
import FavoriteButton from '@/components/FavoriteButton';
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
                <span>
                  <a
                    className={styles.listItemMetaTitle}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.title}
                  </a>
                  <FavoriteButton isFavorite={1} message_id={item.message_id} />
                </span>
              }
            />
            <span style={{ color: '#828a92', 'font-size': '14px', 'font-weight': 400 }}>
              {item.source}
            </span>
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

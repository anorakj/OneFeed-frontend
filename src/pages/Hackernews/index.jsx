import React, { useEffect } from 'react';
import { Card, List } from 'antd';
import { connect } from 'umi';
import FavoriteButton from '@/components/FavoriteButton';
import UpdateButton from '@/components/UpdateButton';
import styles from './style.less';

const Hackernews = ({ dispatch, hackernews: { list }, loading }) => {
  useEffect(() => {
    dispatch({
      type: 'hackernews/fetch',
      payload: {},
    });
  }, []);

  return (
    <Card
      style={{
        marginTop: 24,
        backgroundColor: '#f6f6ef',
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
                <span>
                  <a
                    className={styles.listItemMetaTitle}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.title}
                  </a>
                  <span style={{ color: '#828282', 'font-size': 12 }}>
                    {` (${item.link.split('/')[2]})`}{' '}
                    <FavoriteButton isFavorite={item.is_favorite} message_id={item.message_id} />
                  </span>
                </span>
              }
            />
            <span
              style={{ color: '#828282', 'font-size': 12 }}
            >{`${item.points} | ${item.comments}`}</span>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default connect(({ hackernews, loading }) => ({
  hackernews,
  loading: loading.models.hackernews,
}))(Hackernews);

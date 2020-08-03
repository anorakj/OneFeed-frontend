import React, { useEffect } from 'react';
import { Card, List } from 'antd';
import { StarOutlined, CommentOutlined } from '@ant-design/icons';
import { connect } from 'umi';
import styles from './style.less';
import UpdateButton from '@/components/UpdateButton';

const Hackernews = ({ dispatch, hackernews: { list }, loading }) => {
  useEffect(() => {
    dispatch({
      type: 'hackernews/fetch',
      payload: {},
    });
  }, []);

  const IconText = ({ type, text }) => {
    switch (type) {
      case 'star-o':
        return (
          <span>
            <StarOutlined
              style={{
                marginRight: 3,
              }}
            />
            {text}
          </span>
        );

      case 'comment-o':
        return (
          <span>
            <CommentOutlined
              style={{
                marginRight: 3,
              }}
            />
            {text}
          </span>
        );
      default:
        return null;
    }
  };

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
          <List.Item>
            <List.Item.Meta
              title={
                <a className={styles.listItemMetaTitle} href={item.link}>
                  {item.title}
                </a>
              }
            />
            <IconText key="star" type="star-o" text={item.points} />
            <IconText key="comments" type="comment-o" text={item.comments} />
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

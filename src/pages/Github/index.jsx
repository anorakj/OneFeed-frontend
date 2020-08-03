import React, { useEffect } from 'react';
import { Card, List } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import { connect } from 'umi';
import UpdateButton from '@/components/UpdateButton';
import ArticleListContent from './components/ArticleListContent';
import styles from './style.less';

const Github = ({ dispatch, github: { list }, loading }) => {
  useEffect(() => {
    dispatch({
      type: 'github/fetch',
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
                  href={`https://github.com${item.repository}`}
                >
                  <GithubOutlined style={{ marginRight: 10 }} />
                  <span className={styles.account}>{`${item.repository.split('/')[1]} / `}</span>
                  <span className={styles.repo}>{item.repository.split('/')[2]}</span>
                </a>
              }
            />
            <ArticleListContent data={item} />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default connect(({ github, loading }) => ({
  github,
  loading: loading.models.github,
}))(Github);

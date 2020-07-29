import React, { useEffect } from 'react';
import { Card, List } from 'antd';
import { StarOutlined } from '@ant-design/icons';
import { connect } from 'umi';
import ArticleListContent from './components/ArticleListContent';
import styles from './style.less';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

const Github = ({ dispatch, github: { list }, loading }) => {
  useEffect(() => {
    dispatch({
      type: 'github/fetch',
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
                marginRight: 1,
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
    <PageHeaderWrapper>
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
            <List.Item>
              <List.Item.Meta
                title={
                  <a
                    className={styles.listItemMetaTitle}
                    href={`https://github.com/${item.repository}`}
                  >
                    {`https://github.com/${item.repository}`}
                  </a>
                }
              />
              <ArticleListContent data={item} />
              <IconText key="star" type="star-o" text={item.star} />
            </List.Item>
          )}
        />
      </Card>
    </PageHeaderWrapper>
  );
};

export default connect(({ github, loading }) => ({
  github,
  loading: loading.models.github,
}))(Github);

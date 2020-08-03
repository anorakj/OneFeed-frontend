import React from 'react';
import { StarOutlined } from '@ant-design/icons';
import styles from './index.less';

const ArticleListContent = ({ data: { description, language, star } }) => (
  <div className={styles.listContent}>
    <div className={styles.description}>{description}</div>
    <div className={styles.extra}>
      <span className={styles.language} style={{ paddingRight: 10 }}>
        {language}
      </span>
      <StarOutlined />
      <span>{star}</span>
    </div>
  </div>
);

export default ArticleListContent;

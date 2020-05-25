import { Avatar } from 'antd';
import React from 'react';
import moment from 'moment';
import styles from './index.less';

const ArticleListContent = ({ data: {description, language} }) => (
  <div className={styles.listContent}>
    <div className={styles.description}>{description}</div>
    <div className={styles.extra}>
      {language}
    </div>
  </div>
);

export default ArticleListContent;

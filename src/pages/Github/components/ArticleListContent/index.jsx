import React from 'react';
import styles from './index.less';

const ArticleListContent = ({ data: { description, language } }) => (
  <div className={styles.listContent}>
    <div className={styles.description}>{description}</div>
    <div className={styles.extra}>{language}</div>
  </div>
);

export default ArticleListContent;

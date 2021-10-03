import React from 'react';
import styles from './index.module.less';

const Lazy: React.FC = () => {
  return (
    <div className={styles['lazy-container']}>
      Loading...
    </div>
  );
}

export default Lazy;

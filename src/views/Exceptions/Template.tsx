import { Button, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import styles from './exceptions.module.scss';

interface Props {
  message: string;
  statusCode: number;
}

const ExceptionTemplate: FC<Props> = (props) => {
  const { message, statusCode } = props;
  const history = useHistory();
  return (
    <div className={styles.exceptions}>
      <div>
        <Typography className={styles.code}>{statusCode}</Typography>
        <Typography className={styles.message}>{message}</Typography>
        <br />
        <Button onClick={() => history.push('/')} className={styles.homeLink}>
          Home
        </Button>
      </div>
    </div>
  );
};

export default ExceptionTemplate;

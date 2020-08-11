import { faChevronUp, faCloudUploadAlt, faPrint, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import { Props } from './ShareActionIcons.interface';
import useStyles from './ShareActionIcons.styles';

const ShareActionIcons: FC<Props> = () => {
  const classes = useStyles();
  return (
    <>
      <span style={{ paddingRight: 4 }}>Actions</span>
      <FontAwesomeIcon icon={faChevronUp} className={classes.actionIcons} />
      <FontAwesomeIcon icon={faShareAlt} className={classes.actionIcons} />
      <FontAwesomeIcon icon={faCloudUploadAlt} className={classes.actionIcons} />
      <FontAwesomeIcon icon={faPrint} className={classes.actionIcons} />
    </>
  );
};

export default ShareActionIcons;

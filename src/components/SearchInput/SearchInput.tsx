import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import React, { FC } from 'react';
import { Props } from './SearchInput.interface';
import useStyles from './SearchInput.styles';

const SearchInput: FC<Props> = () => {
  const classes = useStyles();
  return (
    <Paper component="form" className={classes.root}>
      <InputBase className={classes.input} />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchInput;

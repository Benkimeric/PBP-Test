import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#99C0CF',
    },
    header: {
      backgroundColor: '#7DA6BB',
    },
    head: {
      fontSize: 16,
    },
    subhead: {
      fontSize: 12,
      color: theme.palette.primary.main,
      flex: 1,
    },
    row: {
      display: 'flex',
      justifyContent: 'space-between',
      height: 64,
      alignItems: 'center',
    },
    labelText: {
      color: '#5D5D63',
    },
  }),
);

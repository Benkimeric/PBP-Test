import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    header: {
      background: theme.palette.grey['400'],
    },
    head: {
      fontSize: 16,
    },
    subhead: {
      fontSize: 12,
      color: theme.palette.primary.main,
      flex: 1,
    },
    subHeadRight: {
      color: '#5D5D63',
      flex: 1,
      textAlign: 'right',
    },
    subHeader: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    list: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: 16,
      alignItems: 'center',
    },
    label: {
      fontSize: 12,
      color: theme.palette.grey['800'],
      flex: 1,
    },
    plan: {
      fontSize: 26,
      color: theme.palette.grey['800'],
      flex: 1,
      textAlign: 'right',
    },
  }),
);

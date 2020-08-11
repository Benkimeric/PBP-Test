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
    },
    title: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: 8,
    },
    titleText: {
      fontSize: 12,
      color: theme.palette.grey['800'],
    },
    balance: {
      color: theme.palette.primary.main,
      fontSize: 24,
    },
    rowName: {
      fontSize: 14,
    },
    available: {
      fontSize: 24,
      color: theme.palette.secondary.dark,
    },
    box: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 8,
      flex: 1,
    },
    summary: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: 16,
      alignItems: 'flex-end',
    },
    pay: {
      borderRadius: '50%',
      height: 72,
      width: 72,
      textTransform: 'none',
    },
    card: {
      borderRadius: 0,
    },
  }),
);

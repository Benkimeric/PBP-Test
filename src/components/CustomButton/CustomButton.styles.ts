import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    fabButton: {
      textTransform: 'none',
      backgroundColor: theme.palette.warning.main,
    },
  }),
);

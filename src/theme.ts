import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Roboto'].join(','),
  },
  palette: {
    primary: {
      main: '#1F4E79',
    },
    secondary: {
      dark: '#A0C7C6',
      main: '#FBB700',
      light: '#DFEFEE',
    },
    grey: {
      '400': '#EFEFF4',
      '500': '#5D5D63',
    },
    error: {
      main: '#FB3C09',
    },
    warning: {
      main: '#FBB700',
      light: '#F3DED8',
      dark: '#C3BDC2',
    },
  },
});

export default theme;

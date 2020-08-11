import { ThemeProvider } from '@material-ui/core';
import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';
import Routes from './routes';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<div className="loader"> Loading... </div>}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;

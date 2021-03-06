import React  from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Content from '../layout/Content'
import ScrollToTop from '../utils/ScrollToTop';
import theme from '../ui/theme';

function App() {
  return (
    <>
      <CssBaseline />
        <ThemeProvider theme={theme}>
          <Router>
            <ScrollToTop />
            <Content />
          </Router>
        </ThemeProvider>
    </>
  );
}


export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional for custom styles
import App from './App';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme(); // Creating a default theme

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Apply basic CSS resets */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

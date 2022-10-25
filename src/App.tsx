import { useState } from 'react'
import RouteValues from './Routes';
import "./global.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  }
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <RouteValues />
    </ThemeProvider>
  )
}

export default App

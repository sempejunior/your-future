import RouteValues from './Routes';
import "./global.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  }
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Authenticator.Provider>
        <RouteValues />
      </Authenticator.Provider>
    </ThemeProvider>
  )
}

export default App;

import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './services/queryClient';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { GlobalStyle } from './styles/global';
import { AppRoutes } from "./pages/Routes";

import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from './Context';



function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <AppRoutes />
        </ThemeProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App;

import { createContext, useMemo, useState } from 'react';
import '../styles/index.css';

export const ThemeContext = createContext({ theme: 'dark', setTheme: (theme: string) => {} });
export const ThemeProvider = ThemeContext.Provider;

const App = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState('dark');
  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeProvider value={value}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;

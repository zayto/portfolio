import { createContext, useEffect, useMemo, useState } from 'react';
import '../styles/index.css';

type Theme = 'light' | 'dark';
export const ThemeContext = createContext({ theme: 'light', setTheme: (theme: Theme) => {} });
export const ThemeProvider = ThemeContext.Provider;

const App = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const themePref = useMemo(() => ({ theme, setTheme }), [theme]);

  useEffect(() => {
    // Check local storage for existing theme preference
    let defaultTheme = window.localStorage.getItem('theme');
    if (!defaultTheme || !['dark', 'light'].includes(defaultTheme)) {
      defaultTheme = 'light';
      window.localStorage.setItem('theme', 'light');
    }
    setTheme(defaultTheme as Theme);
  }, []);

  return (
    <ThemeProvider value={themePref}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;

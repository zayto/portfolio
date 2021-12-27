import Footer from '@c/footer';
import Meta from '@c/meta';
import cn from 'classnames';
import { ThemeContext } from 'pages/_app';
import { useContext } from 'react';
import Header from './header';

const Layout = ({ preview, children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={cn({ dark: theme === 'dark' })}>
      <Meta />
      <Header />
      <div className="min-h-screen bg-white dark:bg-primary dark:text-white pb-4">
        <main className="container mx-auto max-w-screen-xl">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

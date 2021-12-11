import { GITHUB_URL } from 'lib/constants';
import Link from 'next/link';
import Image from 'next/image';
import { defaultLoader } from 'lib/img-loader';
import { useContext } from 'react';
import { ThemeContext } from 'pages/_app';

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  const iconSrc = theme === 'light' ? './assets/moon.svg' : './assets/sun.svg';

  return (
    <div className="sticky top-0 z-20 dark:bg-primary dark:text-white">
      <div className="lg:container mx-auto py-6 bg-white dark:bg-primary border-gray-100 dark:border-cyan dark:text-white border-b-2 px-20">
        <nav className="flex font-medium justify-between items-center">
          <div className="h-8">
            <Link href="/">
              <a>Home</a>
            </Link>
          </div>
          <div className="flex space-x-10 pl-5">
            <Link href="/about">
              <a className="transition-colors hover:text-sky-500 focus:text-sky-500 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500 focus-visible:ring-opacity-60 focus-visible:outline-none focus:outline-none rounded">
                About
              </a>
            </Link>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <button
              className="flex align-middle justify-center w-8 h-8 cursor-pointer"
              onClick={toggleTheme}
              title="Switch theme"
              aria-label="Switch theme"
            >
              <Image src={iconSrc} height={25} width={25} alt="DarkTheme logo" loader={defaultLoader} unoptimized />
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;

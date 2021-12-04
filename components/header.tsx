import { GITHUB_URL } from 'lib/constants';
import Link from 'next/link';

const Header = () => (
  <>
    <div className="sticky top-0 z-20 md:mb-6">
      <div className="container mx-auto py-6 bg-white border-gray-100 border-b-2 px-20">
        <nav className="flex font-medium justify-between items-center">
          <Link href="/">Zayto</Link>
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
          </div>
        </nav>
      </div>
    </div>
  </>
);

export default Header;

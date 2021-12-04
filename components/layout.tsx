import Footer from '@c/footer';
import Meta from '@c/meta';
import Header from './header';

const Layout = ({ preview, children }) => (
  <>
    <Meta />
    <Header />
    <div className="min-h-screen">
      <main className="container mx-auto max-w-screen-xl">{children}</main>
    </div>
    <Footer />
  </>
);

export default Layout;

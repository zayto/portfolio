import Alert from "@components/alert";
import Footer from "@components/footer";
import Meta from "@components/meta";

const Layout = ({ preview, children }) => (
  <>
    <Meta />
    <div className="min-h-screen">
      <Alert preview={preview} />
      <main>{children}</main>
    </div>
    <Footer />
  </>
);

export default Layout;

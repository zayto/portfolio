import Container from '@c/container';

const Footer = () => (
  <footer className="dark:bg-primary dark:text-white">
    <Container>
      <div className="container mx-auto max-w-screen-xl py-20 px-4">
        <span className="text-sm">This website was built using Next.js, Contentful, Tailwind &amp; Vercel.</span>
      </div>
    </Container>
  </footer>
);

export default Footer;

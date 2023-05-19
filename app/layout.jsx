import Nav from '@components/Nav';
import '@styles/globals.css';

export const metadata = {
  title: 'Promptopia',
  description: 'Discover & Share AI Prompts',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {/* <Provider /> */}
        <div className="main">
          <div className="gradient"></div>
        </div>
      </body>
      <main className="app">
        <Nav />
        {children}
      </main>
    </html>
  );
};

export default RootLayout;

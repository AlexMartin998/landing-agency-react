import { Helmet } from 'react-helmet';

import './App.css';
import { LandingPage } from './agency/landing/pages';

function App() {
  const siteUrl = 'https://software-total.com';
  const logoPath = '/1.png';

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Software Total</title>
        <link rel="canonical" href={siteUrl} />
        <meta
          name="description"
          content="Software Total es una empresa de desarrollo de software a la medida."
        />
        <meta property="og:title" content="Software Total" />
        <meta
          property="og:description"
          content="Software Total es una empresa de desarrollo de software a la medida."
        />
        <meta property="og:image" content={`${siteUrl}${logoPath}`} />
        <meta property="og:url" content={siteUrl} />
      </Helmet>

      <LandingPage />
    </>
  );
}

export default App;

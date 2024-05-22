import PropTypes from 'prop-types';
import Navbar from '@/common/components/Navbar';
import Providers from './providers';
import InterceptionLoader from '@/common/components/InterceptionLoader';
import Footer from '@/common/components/Footer';

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  // eslint-disable-next-line react/prop-types
  children,
  params: { locale },
}) {
  console.log('locale:::', locale);
  return (
    <html lang="en">
      {/* <Helmet
        {...pageProps.seo}
      /> */}
      <body>
        <Providers>
          <InterceptionLoader />
          {/* <Navbar pageProps={pageProps} translations={pageProps?.translations} /> */}
          <Navbar lang={locale} />
          {children}
          {/* <Footer pageProps={pagePropsData} /> */}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  params: PropTypes.shape({
    locale: PropTypes.string,
  }).isRequired,
};

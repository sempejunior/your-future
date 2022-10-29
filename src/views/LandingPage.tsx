import * as React from 'react';
import ProductCategories from '../components/LandingPage/views/ProductCategories';
import ProductSmokingHero from '../components/LandingPage/views/ProductSmokingHero';
import AppFooter from '../components/LandingPage/views/AppFooter';
import ProductHero from '../components/LandingPage/views/ProductHero';
import ProductHowItWorks from '../components/LandingPage/views/ProductHowItWorks';
import ProductCTA from '../components/LandingPage/views/ProductCTA';

function LandingPage() {
  return (
    <React.Fragment>
      <ProductHero />
      <ProductHowItWorks />
      {/* <ProductValues /> */}
      <ProductCategories />
      
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default LandingPage;

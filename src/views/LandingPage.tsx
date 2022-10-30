import * as React from 'react';
import ProductCategories from '../components/LandingPage/views/ProductCategories';
import ProductSmokingHero from '../components/LandingPage/views/ProductSmokingHero';
import AppFooter from '../components/LandingPage/views/AppFooter';
import ProductHero from '../components/LandingPage/views/ProductHero';
import ProductValues from '../components/LandingPage/views/ProductValues';
import ProductHowItWorks from '../components/LandingPage/views/ProductHowItWorks';
import ProductCTA from '../components/LandingPage/views/ProductCTA';
import { Header } from '../components/Header/Header';

function LandingPage() {
    return (
        <React.Fragment>
            <Header />
            <ProductHero />
            <ProductHowItWorks />
            {/* <ProductValues /> */}
            <ProductCategories />

            <ProductCTA />
            <ProductSmokingHero />
        </React.Fragment>
    );
}

export default LandingPage;

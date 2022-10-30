import { Heading, useAuthenticator } from '@aws-amplify/ui-react';
import { useState } from 'react'
import Footer from '../components/Footer/Footer';
import { Header } from '../components/Header/Header'



function Home() {

    const { route } = useAuthenticator((context) => [context.route]);

    const message =
        route === 'authenticated' ? 'SECOND PROTECTED ROUTE!' : 'Loading...';

console.log(message);

    return (
        <>
            <Header />
            <Heading level={1}>{message}</Heading>
            <Footer />

        </>
    )
}

export default Home;
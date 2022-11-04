import { Heading, useAuthenticator } from '@aws-amplify/ui-react';
import { useState } from 'react'
import Footer from '../components/Footer/Footer';
import Form from '../components/FormEntrega/FormEntrega';
import { Header } from '../components/Header/Header'
import MapPage from '../components/MapPage/MapPage';



function Home() {

    return (
        <>
            <Header />
            <Form/>
            <MapPage />
            <Footer />

        </>
    )
}

export default Home;
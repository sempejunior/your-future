import { Route, Routes } from "react-router-dom";

import Home from './views/Home';
import Dashboard from './views/Dashboard';
import { Header } from "./components/Header/Header";
import LandingPage from "./views/LandingPage";




function RouteValues() {

    return (
        <>
            <Header></Header>
            <Routes>

                <Route element={<Home />} path="/" />
                <Route element={<Dashboard />} path="/Dashboard" />
                <Route element={<LandingPage />} path="/LandingPage" />
            </Routes>
        </>
    )
}

export default RouteValues;
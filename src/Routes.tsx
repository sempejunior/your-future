import { Route, Routes } from "react-router-dom";

import Home from './views/Home';
import Dashboard from './views/Dashboard';
import { Header } from "./components/Header/Header";
import { SignOut } from "@aws-amplify/ui-react/dist/types/components/Authenticator/Authenticator";




function RouteValues() {

    return (
        <>
            <Header></Header>
            <Routes>

                <Route element={<Home />} path="/" />
                <Route element={<Dashboard />} path="/Dashboard" />
            </Routes>
        </>
    )
}

export default RouteValues;
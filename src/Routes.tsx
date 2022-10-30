import { Route, Routes } from "react-router-dom";

import Home from './views/Home';
import Dashboard from './views/Dashboard';
import { Header } from "./components/Header/Header";
import LandingPage from "./views/LandingPage";
import { RequireAuth } from "./functions/RequireAuth";
import { Login } from "./views/Login";




function RouteValues() {

    return (
        <>
            
            <Routes>
                <Route element={
                    <RequireAuth>
                        <Home />
                    </RequireAuth>
                }
                    path="/appFrete" />
                <Route element={
                    <RequireAuth>
                        <Dashboard />
                    </RequireAuth>
                }
                    path="/Dashboard" />
                <Route element={<LandingPage />} path="/" />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    )
}

export default RouteValues;
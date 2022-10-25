import { Route, Routes } from "react-router-dom";

import Home from './views/Home';
import Teste from './views/Teste';
import Dashboard from './views/Dashboard';

const RouteValues = () => {
    return (
        <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Dashboard />} path="/Dashboard" />
        </Routes>
    )
}

export default RouteValues;
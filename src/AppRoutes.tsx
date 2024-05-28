import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Home from "./pages/Home";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Navigate to="/inicio" />} />
                <Route path="/" element={<Index />} >
                    <Route path="/inicio" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
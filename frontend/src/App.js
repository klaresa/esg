import React from "react";
import { MyRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";

import { NavBar } from "./components/Navbar";
import GlobalStyle from "./styles/global";

export default function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <GlobalStyle />
                <NavBar />
                <MyRoutes />
            </AuthProvider>
        </BrowserRouter>
    );
}

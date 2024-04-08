import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/header";
import Footer from "./footer/footer";

export default function Layout() {
    // parent route wraps child routes
    return (
        <>
            <Header />
            <main>
                {/* Outlet is used to render child route components when the corresponding url is matched. */}
                <Outlet />  
            </main>
            <Footer />
        </>
    )
}
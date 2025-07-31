"use client";

import "@/styles/globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body cz-shortcut-listen="true" suppressHydrationWarning>
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
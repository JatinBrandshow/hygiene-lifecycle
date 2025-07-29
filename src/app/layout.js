"use client";

import "@/styles/globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                {/* Add any meta tags or head content here */}
            </head>
            <body cz-shortcut-listen="true" suppressHydrationWarning>
                <div className="min-h-screen flex flex-col">
                    <NavBar />
                    <main className="flex-grow">
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
import "./globals.css";
import type { Metadata } from "next";
import { Saira } from 'next/font/google'
import Header from "@/components/Header";
import { FilterContextProvider } from "@/contexts/FilterContext";

const saira = Saira({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = { title: "Cappttino" };

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    
    return (
        <html lang="pt-br">
            <body className={saira.className}>
                <FilterContextProvider>
                    <Header />
                    {children}
                </FilterContextProvider>
            </body>
        </html>
    );

}

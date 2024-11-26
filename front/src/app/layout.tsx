import "./globals.css";
import DefaultProviders from "@/contexts/DefaultProviders";
import Header from "@/components/Header";
import { Saira } from 'next/font/google'
import type { Metadata } from "next";

const saira = Saira({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = { title: "Cappttino" };

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    
    return (
        <html lang="pt-br">
            <body className={saira.className}>
                <DefaultProviders>
                    <Header />
                    {children}
                </DefaultProviders>
            </body>
        </html>
    );

}

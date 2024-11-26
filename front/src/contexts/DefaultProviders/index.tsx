"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FilterContextProvider } from "../FilterContext";
import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";

interface IDefaultProviders {
    children: ReactNode
}

const theme = {
    descktopBreakpoint: "768px"
}

export default function DefaultProviders({ children }: IDefaultProviders) {

    const client = new QueryClient()

    return (
        <QueryClientProvider client={client}>
            <FilterContextProvider>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </FilterContextProvider>
        </QueryClientProvider>
    )
} 
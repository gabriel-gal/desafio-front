"use client"
import styles from "./page.module.css";
import FilterBar from "@/components/Main/FilterBar";
import ListaProdutos from "@/components/Main/ListaProdutos";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Home() {

    const client = new QueryClient()
    
    return (
        <QueryClientProvider client={client}>
            <main className={styles.main}>
                <FilterBar />
                <ListaProdutos />
            </main>
        </QueryClientProvider>
    );
}

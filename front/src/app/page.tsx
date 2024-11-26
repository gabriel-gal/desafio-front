"use client"
import ListaProdutos from "@/components/Main/ListaProdutos"
import FilterBar from "@/components/Main/FilterBar"
import styles from "./page.module.css"

export default function Home() {

    return (
        <main className={styles.main}>
            <FilterBar />
            <ListaProdutos />
        </main>
    );
}

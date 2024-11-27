"use client"
import ListaProdutos from "@/components/Main/ListaProdutos"
import FilterBar from "@/components/Main/FilterBar"
import styled from "styled-components"
import { DefaultPage } from "@/components/default-page"

const PageWrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default function Home() {

    return (
        <DefaultPage>
            <PageWrapper>
                <FilterBar />
                <ListaProdutos />
            </PageWrapper>
        </DefaultPage>
    );
}

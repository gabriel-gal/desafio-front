"use client"
import styled from "styled-components"
import useProdutos from "./hook/useProduto"
import ProdutoCard from "./produto-card"

const ListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 256px);
    grid-gap: 32px;
    max-width: 100%;
    margin-top: 32px;
`

export default function ListaProdutos() {

    const { data } = useProdutos()

    return (
        <ListContainer>
            {data?.map((produto) => (
                <ProdutoCard
                    key={produto.id}
                    title={produto.name}
                    image={produto.image_url}
                    price={produto.price_in_cents}
                />
            ))}
        </ListContainer>
    )
}
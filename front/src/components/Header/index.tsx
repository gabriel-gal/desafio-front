"use client"
import styled from "styled-components"
import { Saira_Stencil_One } from 'next/font/google'
import { InputWSearchIcon } from "./input"
import { CartControl } from "./cart-control"
import { useFilter } from "@/contexts/FilterContext"

const saira_stencil = Saira_Stencil_One({
    subsets: ['latin'],
    weight: ['400'],
})

const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 24px; 
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
    }

    @media (min-width: ${props => props.theme.descktopBreakpoint}) {
        padding: 20px 160px;
    }
`
const Logo = styled.a`
    color: var(--logo-color);
    font-size: 24px;
    line-height: 150%;
    @media (min-width: ${props => props.theme.descktopBreakpoint}) {
        font-size: 40px;
    }
`

export default function Header() {

    const { search, setSearch } = useFilter()

    return (
        <TagHeader>
            <Logo className={saira_stencil.className}>Capputeeno</Logo>
            <div>
                <InputWSearchIcon
                    value={search}
                    hadleChange={setSearch}
                    placeholder="Procurando por algo específico?" />
                <CartControl />
            </div>
        </TagHeader>
    )
}
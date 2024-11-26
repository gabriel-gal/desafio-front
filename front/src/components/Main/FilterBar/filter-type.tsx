"use client"
import { useFilter } from "@/contexts/FilterContext"
import styled from "styled-components"
import { FilterType } from '@/@types/types'

interface IFilterItemProps {
    selected: boolean
}

const FilterList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    list-style: none;
`

const FilterItem = styled.li<IFilterItemProps>`
    font-family: inherit;
    font-weight: ${props => props.selected ? '600' : '400'};
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    text-transform: uppercase;
    color: var(--text-dark);
    cursor: pointer;
    border-bottom: ${props => props.selected ? '4px solid var(--color-oragen)' : ''};

    @media (min-width: ${props => props.theme.descktopBreakpoint}) {
        font-size: 16px;
        line-height: 22px;
    }
`

export default function FilterTypes() {

    const { type, setType } = useFilter()
    const hadleChangeType = (value: FilterType) => { setType(value) }

    return (
        <FilterList>
            <FilterItem
                selected={type === FilterType.ALL}
                onClick={() => hadleChangeType(FilterType.ALL)}
            >
                Todos os produtos
            </FilterItem>

            <FilterItem
                selected={type === FilterType.SHIRT}
                onClick={() => hadleChangeType(FilterType.SHIRT)}
            >
                Camisetas
            </FilterItem>

            <FilterItem
                selected={type === FilterType.MUG}
                onClick={() => hadleChangeType(FilterType.MUG)}
            >
                Canetas
            </FilterItem>
        </FilterList>
    )
}
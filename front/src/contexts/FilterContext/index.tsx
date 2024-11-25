"use client"
import { FilterType, PriorityType } from "@/@types/types";
import { PropsWithChildren, createContext, useContext, useState } from "react";

const FilterContext = createContext({
    search: '',
    page: 0,
    type: FilterType.ALL,
    priority: PriorityType.NEWS,
    setPriority: (value: PriorityType) => { },
    setSearch: (value: string) => { },
    setPage: (value: number) => { },
    setType: (value: FilterType) => { },
})

export function FilterContextProvider({ children }: PropsWithChildren) {

    const [search, setSearch] = useState('')
    const [page, setPage] = useState(0)
    const [type, setType] = useState(FilterType.ALL)
    const [priority, setPriority] = useState(PriorityType.NEWS)

    return (
        <FilterContext.Provider value={{
            search,
            page,
            type,
            priority,
            setSearch,
            setPage,
            setType,
            setPriority
        }}>
            {children}
        </FilterContext.Provider>
    )
}

export function useFilter() { return (useContext(FilterContext)) }
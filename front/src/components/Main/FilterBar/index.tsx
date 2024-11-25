"use client"
import styled from "styled-components";
import FilterTypes from "./filter-type";
import FilterPriority from "../FilterPriority";

const Container = styled.div`
    display: flex;
    width: 100%;
    align-items: start;
    justify-content: space-between;
`

export default function FilterBar() {
    return (
        <Container>
            <FilterTypes />
            < FilterPriority />
        </Container>
    )
}
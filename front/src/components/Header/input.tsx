import styled from "styled-components";
import { SearchIcon } from "../Icons/search";
import { InputHTMLAttributes } from "react";

export const Input = styled.input`
    width: 100%;
    border-radius: 8px;
    border: none;
    background-color: var(--bg-secundary);
    padding: 10px 16px;
    font-family: inherit;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: var(--text-dark);

    @media (min-width: ${props => props.theme.descktopBreakpoint}){
        font-size: 14px;
        line-height: 22px;
    }
`

const Inputcontainer = styled.div`
    position: relative;
    width: 250px;
    svg {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }

    @media (min-width: ${props => props.theme.descktopBreakpoint}){
        width: 352px;
    }
`

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string,
    hadleChange: (value: string) => void,
}

export function InputWSearchIcon(props: IInputProps) {
    return (
        <Inputcontainer>
            <Input onChange={(event) => props.hadleChange(event.target.value)} {...props} />
            <SearchIcon />
        </Inputcontainer>
    )
}
import styled from "styled-components";
import { SearchIcon } from "../Icons/search";
import { InputHTMLAttributes } from "react";
import { ValueOf } from "next/dist/shared/lib/constants";

export const Input = styled.input`
    width: 352px;
    border-radius: 8px;
    border: none;
    background-color: var(--bg-secundary);
    padding: 10px 16px;
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--text-dark);
`

const Inputcontainer = styled.div`
    position: relative;
    width: 352px;
    svg {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
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
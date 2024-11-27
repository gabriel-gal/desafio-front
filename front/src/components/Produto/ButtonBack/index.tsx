"use client"
import BackIcon from "@/components/Icons/back"
import { useRouter } from "next/navigation";
import styled from "styled-components"

interface IButtonBack {
    navigate: string;
}

const BackButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 14px;
    font-weight: 500;
    line-height: 150%;
    color: var(--secundary-text);
    background: transparent;
    border: none;
    cursor: pointer;
`

export default function ButtonBack({ navigate }: IButtonBack) {

    const router = useRouter()
    const handleNavigate = () => {
        router.push(navigate)
    }

    return (
        <BackButton onClick={handleNavigate}>
            <BackIcon />
            Voltar
        </BackButton>
    )
}
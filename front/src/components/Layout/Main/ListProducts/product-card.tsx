import formatPrice from "@/utils/FormatPrice"
import { useRouter } from "next/navigation"
import styled from "styled-components"

interface IProductCard {
    id: string,
    title: string,
    price: number,
    image: string,
}

const Container = styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    backdrop-filter: blur(10px);
    background: rgba(255,255,255, 0.4);
    border-radius: 0px 0px 4px 4px;
    width: 256px;

    img {
        width: 256px;
        height: 300px;
        border-radius: 4px 4px 0px 0px
    }

    h3 {
        font-weight: 300;
        font-size: 16px;
        line-height: 150%;
        color: var(--text-dark-2);
    }

    p {
        font-weight: 600;
        font-size: 14px;
        line-height: 150%;
        color: var(--shapes-dark)
    }

    div {
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;
        padding: 8px 0px;

        div {
            width: 228px;
            height: 1px;
            padding: 0px;
            margin: 8px 0px;
            background: var(--shapes)
        }
    }

`

export default function ProductCard(props: IProductCard) {

    const router = useRouter()

    const handleNavigate = () => {
        router.push(`/product?id=${props.id}`)
    }

    return (
        <Container onClick={handleNavigate}>
            <img src={props.image} />
            <div>
                <h3>{props.title}</h3>
                <div></div>
                <p>{formatPrice(props.price)}</p>
            </div>
        </Container>
    )
}
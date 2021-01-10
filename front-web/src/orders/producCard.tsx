import "./styles.css"
import { Product } from "./types"

type Props = {
    product: Product
}

function numberformat(price:number) {
    const formatter = new Intl.NumberFormat(
        'pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 2 }

    )
    return formatter.format(price)
}

export default function ProductCard({ product }: Props) {
    return (
        <div className="order-card-container">

            <h3 className="order-card-title">
                {product.name}
            </h3>
            <img src={product.imageUri} className="order-card-image" ></img>

            <h3 className="order-card-price">
                {numberformat(Number(product.price))}
            </h3>

            <div className="order-card-description">
                <h3>Descriçào</h3>
                <p>{product.description}
                </p>
            </div>
        </div>
    )
}
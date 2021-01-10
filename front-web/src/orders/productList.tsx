import ProductCard from "./producCard";
import { Product } from "./types"

type Props = {
    product:Product[];
}

export default function ProductList({product}:Props) {
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">

                {product.map(product=>
                     <ProductCard product={product}/>
                )}
               

            </div>
        </div>
    )
}
import { checkIsSelected } from "./helpers";
import ProductCard from "./producCard";
import { Product } from "./types"

type Props = {
    product:Product[];
    onSelectProduct:(product:Product)=>void;
    selectedProduct:Product[]

}

export default function ProductList({product, onSelectProduct,selectedProduct}:Props) {
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">

                {product.map(product=>
                     <ProductCard  
                     onSelectProduct={onSelectProduct} 
                     product={product}
                     isSelected={checkIsSelected(selectedProduct,product)}
                     />
                )}
               

            </div>
        </div>
    )
}
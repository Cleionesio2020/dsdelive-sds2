import { Product } from './types';
export function checkIsSelected(selectedProducts:Product[],product:Product){
    return  selectedProducts.some(item => item.id === product.id);
}

export function numberformat(price:number) {
    const formatter = new Intl.NumberFormat(
        'pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 2 }

    )
    return formatter.format(price)
}
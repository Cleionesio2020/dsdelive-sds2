import { numberformat } from "./helpers"

type Props = {
    totalPrice: number,
    amount: number,
    onSubmit:()=>void
}

export default function OrderSumary({ amount, totalPrice, onSubmit }: Props) {

    return (

        <div className="order-summary-container">
            <div className="order-summary-content">
                <div>
                    <span className="amount-selected-container">
                        <strong className="amount-selected">{amount}</strong>
                        Pedidos selecionados
                </span>
                    <span className="order-summary-total">
                        <strong className="amount-selected">R$ {numberformat(totalPrice)}</strong>
                            Total
                </span>

                </div>
                <div>
                    <button className="order-summary-make-order"
                    onClick={onSubmit}
                    >FAZER PEDIDO</button>
                </div>
            </div>
        </div>

    )
}
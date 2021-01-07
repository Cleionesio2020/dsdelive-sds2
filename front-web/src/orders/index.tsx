import "./styles.css"
import StepHeaders from "./stepheaders"
import ProductList from "./productList"
import { useEffect, useState } from "react"

export default function Orders() {
const[product,setProduct]=useState([]);

    useEffect(() => {

    }, [])

    return (
        <div className="orders-container">
            <StepHeaders />
            <ProductList />
        </div>
    )
}
import "./styles.css"
import StepHeaders from "./stepheaders"
import ProductList from "./productList"
import React, { useEffect, useState } from "react"
import OrderLocation from "./OrderLocation"
import { fechProducts} from "../Api"
import { OrderLocationData, Product } from "./types"


export default function Orders() {
const[ products, setProducts]=useState<Product[]>([]);
const [orderLocation, setOrderLocation]=useState<OrderLocationData>()


    useEffect(() => {
        fechProducts().then(response=>{
           setProducts(response.data) 
        })
        .catch(error=>{
            console.log(error)
        })
    }, [])

    return (
        <div className="orders-container">
            <StepHeaders />
            <ProductList product={products}/>
            <OrderLocation onChangeLocation={location=>setOrderLocation(location)}/>
        </div>
    )
}
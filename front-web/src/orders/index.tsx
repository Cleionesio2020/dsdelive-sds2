import "./styles.css"
import StepHeaders from "./stepheaders"
import ProductList from "./productList"
import React, { useEffect, useState } from "react"
import OrderLocation from "./OrderLocation"
import OrderSumary from "./OrderSumary"
import { fechProducts,saveOrders} from "../Api"
import { OrderLocationData, Product} from "./types"
import {checkIsSelected}from "./helpers"
import {toast } from 'react-toastify';

export default function Orders() {
    const [products, setProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>()
    const [selectedProducts, setSelectedProducts]=useState<Product[]>([]);
    
    const totalPrice = selectedProducts.reduce((sum,item)=>{
        return sum+ Number(item.price) 
    },0)


    useEffect(() => {
        fechProducts().then(response => {
            setProducts(response.data)
        })
            .catch(error => {
                toast.warning('Erro ao carregar dados');
            })
    }, [])


    const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = checkIsSelected(selectedProducts , product)
      
        if (isAlreadySelected) {
          const selected = selectedProducts.filter(item => item.id !== product.id);
          setSelectedProducts(selected);
        } else {
          setSelectedProducts(previous => [...previous, product]);
        }
      }

      const handleSubmit = () => {
        const productsIds = selectedProducts.map(({ id }) => ({ id }));
        const payload = {
          ...orderLocation!,
          products: productsIds
        }
      
        saveOrders(payload).then((response) => {
          toast.error('Pedido enviado com sucesso - Nº: '+response.data.id);
          setSelectedProducts([]);
        })
          .catch(() => {
            toast.warning('Erro ao enviar pedido');
          })
      }

    return (
        <div className="orders-container">
            <StepHeaders />
            <ProductList 
            product={products} 
            onSelectProduct={handleSelectProduct}
            selectedProduct={selectedProducts}
            />
            <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
            <OrderSumary amount={selectedProducts.length} totalPrice={totalPrice}  onSubmit={handleSubmit}/>
           
        </div>

    )
}
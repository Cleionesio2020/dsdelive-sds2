import axios from "axios";
import { OrderPlayload } from "./orders/types";


const API_URL = process.env.REACT_APP_API_URL
const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX;
                                
export function fechProducts(){
    return axios.get(`${API_URL}/products`);
}

export function fetchLocalMapBox(local:string){
    return axios (`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`);
}

export function saveOrders(payload:OrderPlayload){
    return axios.post(`${API_URL}/orders`,payload)
}
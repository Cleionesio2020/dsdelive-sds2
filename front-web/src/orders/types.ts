import { type } from "os"

export type Product={
    id:number,
    name:string,
    price?:string,
    description?:string;
    imageUri?:string;

}

export type OrderLocationData = {
    latitude:number;
    longitude:number;
    address:string;
}

type productId = {
    id:number
}

export type OrderPlayload={
    products:productId[];
} & OrderLocationData;


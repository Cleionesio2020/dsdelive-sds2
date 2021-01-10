import "./styles.css"
import StepHeaders from "./stepheaders"
import ProductList from "./productList"
import { useEffect, useState } from "react"
import { Product } from "../type"
import { fechProducts, fetchLocalMapBox } from "../Api"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import AsyncSelect from 'react-select/async';
import { OrderLocationData } from "./types"

const initialPosition = {
    lat: 51.505,
    lng: -0.09
}

type Place={
    label?:string;
    value?:string;
    position:{
        lat:number;
        lng:number
    }
}

type Props={
    onChangeLocation:(location:OrderLocationData)=>void
}

export default function OrderLocation({onChangeLocation}:Props) {
const [adderess, setAddress] = useState<Place>({position:initialPosition})


    const loadOptions = async (inputValue: string, callback: (places: Place[]) => void) => {
        const response = await fetchLocalMapBox(inputValue);
      
        const places = response.data.features.map((item: any) => {
          return ({
            label: item.place_name,
            value: item.place_name,
            position: {
              lat: item.center[1],
              lng: item.center[0]
            },
            place: item.place_name,
          });
        });
      
        callback(places);
      };
      
      const handleChangeSelect = (place: Place) => {
        setAddress(place);
        onChangeLocation({
         latitude: place.position.lat,
          longitude: place.position.lng,
          address: place.label!
        });
      };
    return (
        <div className="order-location-container">
            <div className="order-location-content">
                <h3 className="order-location-title">Selecione o pedido a ser entregue</h3>
                <div className="filter-container">
                    <AsyncSelect placeholder="Digite um endereço para a entrega" className="filter" loadOptions={loadOptions} 
                    onChange={value=>handleChangeSelect(value as Place)}/>
                </div>
                
                    <MapContainer center={adderess.position} zoom={13} scrollWheelZoom={false} key={adderess.position.lat}> 
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={adderess.position}>
                            <Popup>
                               {adderess.label}
      </Popup>
                        </Marker>
                    </MapContainer>
                
            </div>
        </div>
    )
}
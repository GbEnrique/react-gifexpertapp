import { useState,useEffect } from "react"
import { getGifs } from '../helpers/GetGifs';

export const useFetchGif = (category) => {
    const [state,setState]=useState({
        data:[],
        loading:true
    }); 
     useEffect (()=>{
        getGifs(category)
        .then(imgs=>{
           setTimeout(() => {
            setState({
                    data:imgs,
                    loading:false
                });
           }, 1500);
        });
        //se agrega la categoria si esta llega a cambiar
    },[ category]);
    return state; //{data: [], loading:true}
}

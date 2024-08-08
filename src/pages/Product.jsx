import React, { useEffect, useState } from 'react'
import Cards from '../component/Cards'

const Product = () => {

    const [data,setData] = useState([])

    useEffect(()=>{

        const fetchingData = async ()=>{
            const products = await fetch('https://fakestoreapi.com/products')
            const res = await products.json()
            setData(res)
        }

        fetchingData()
    },[])

  return (
    <>
  
    <Cards data={data}/>     
    
    </>
  )
}

export default Product

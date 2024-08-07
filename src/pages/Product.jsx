import { Card } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Product = () => {

    const {data,setData} = useState()

    useEffect(()=>{

        const fetchingData = async ()=>{
            const data = await fetch('https://fakestoreapi.com/products')
            const res = await data.json()
            setData(res)
            console.log(data)
        }

        fetchingData()
    })

  return (
    <>
    {
        data.map((prod)=>{
            <Card product={prod}/>
        })
    }
     
    </>
  )
}

export default Product

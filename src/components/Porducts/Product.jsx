import { useEffect, useState } from "react";
import style from "./Product.module.css"


const Products=()=>{
    const [data ,setData] = useState([])

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async()=>{
        try {

            const responts = await fetch("https://fakestoreapi.com/products")
        const data = await responts.json()
        setData(data)
            
        } catch (error) {
            console.log(error)
        }

        
    }
    return(
        <div className={style.productContainer}>
            {
                data.map((item,index)=>{
                    return(
                        <div key={index} className={style.productItems}>
                            <img src={item.image} alt=""  height={100}  width={200}/>
                            <h2>{item.category}</h2>
                            <p>Title : {item.title}</p>
                            <p>Price : {item.price}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products;
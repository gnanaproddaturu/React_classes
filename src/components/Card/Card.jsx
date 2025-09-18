import CustomAccordion from "../Bootstrap/Accordion/Accordion"

import "./Card.css"
const product = {
    "id": 4,
    "title": "Mens Casual Slim Fit",
    "price": 15.99,
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
    "rating": {
      "rate": 2.1,
      "count": 430
    }
}



const Card =(props)=>{
    console.log(props)
    return(
        <div className="card">
            <h2>{product.category}</h2>
            <img src={product.image} alt="" />
            <p>Title : {product.title}</p>
            <p>Price : {product.price}</p>
            < CustomAccordion description={product.description} />
        </div>
    )
}

export default Card
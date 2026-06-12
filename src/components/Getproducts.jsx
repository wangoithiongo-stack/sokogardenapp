import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Getproducts = () => {

  // Step 2 : Hooks
  const [loading,setLoading] = useState("")
  const [products,setProducts] = useState([])
  const [error,setError] = useState("")

  // Below is the image Url
  const img_url = "https://wangui-hsk.alwaysdata.net/static/images/"

  // Step 3 : function to fetch
  const fetchProducts = async() =>{

    // Step 4 
    setLoading("Waiting for products to be fetched...")

    // Step 6
    try{
      const response = await axios.get("http://wangui-hsk.alwaysdata.net/api/getproducts")

      // Step 7
      setProducts(response.data.products)

      // Step 8
      setLoading("")

    }

    catch(error){
        setLoading("")
        setError(error.message)
    }

  }

  console.log(products)

  // Step 5 
  useEffect(() => {fetchProducts()}, [])
  return (
    <div className='row'>
      <h3 className='text-center'>Available Products</h3>

      <h3 className="text-info">{loading}</h3>

      {/* map the products */}
      {products.map((product)=>(
        <div className="col-md-3 justify-content-center mb-4">
         <div className='card shadow'>
          <img src={img_url + product.product_photo} alt="" className='product-img' />

          <h4 className='prodName'>{product.product_name}</h4>

          <p className="prodDesc">{product.product_description.slice(0,50)}...</p>

          <h2 className="prodCost">Kes {product.product_cost}</h2>
         </div>
      </div>
      ))}
    </div>
  )
}

export default Getproducts

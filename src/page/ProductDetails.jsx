import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { fetchAPi } from '../features/products/productsSlice'
import { Button, Card } from 'react-bootstrap'
import { shorten } from '../helper/function'

function ProductDetails() {
    const params=useParams()
const id=params.id
    const products=useSelector(state=>state.products.products)
const product =products[id-1]
const  dispatch = useDispatch()
useEffect(()=>{
    dispatch(fetchAPi(id))
},[dispatch,id])
if(!product){
    return <div>loading...</div>
  }
console.log(product);
  return (
  
    <Card className="mt-5 card-bg  align-items-center  justify-content-center">
    <Card.Img
      variant="top"
      src={product.image}
      className=" h-auto w-50 rounded-4 "
    />
    <Card.Title className="text-light pt-4 ">
      {shorten(product.title)}
    </Card.Title>
    <Card.Text className="text-light">{product.price}</Card.Text>
    <Card.Text className="text-light">
      <span className=" text-secondary ">category :</span>
      {product.category}
    </Card.Text>
    <Card.Text className="text-light">
      <span className=" text-secondary ">description :</span>
      {product.description}
    </Card.Text>
    <Button  sm="6"
          className=" mx-2 text-white bg-black  "
          varriant="btn btn-outline-secondary" ><Link to="/">برگشت به فروشگاه</Link></Button>
  </Card>
  )
}

export default ProductDetails

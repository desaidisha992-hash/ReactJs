import { SearchIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import ProductCard from '../ui/ProductCard'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const Shop = () => {
    const [products, setProducts] = useState([])
    const params = useParams();

    console.log(params.collection)
    useEffect(()=>{
        const FetchAllProducts = async()=>{
         if (params.collection) {
               try {
                let response = await axios.get(`https://dummyjson.com/products/category/${params.collection}`)
                console.log(response.data.products);
                setProducts(response.data.products);
            } catch (error) {
                console.log(error)
            }
         } else {
               try {
                let response = await axios.get(`https://dummyjson.com/products`)
                console.log(response.data.products);
                setProducts(response.data.products);
            } catch (error) {
                console.log(error)
            }
         }
        }
        FetchAllProducts();
    }, [params.collection])
  return (
    <>
    <section>
        {/* title bar */}
        <div className='bg-gray-100 w-full py-10 text-center'>
            <h1 className='text-5xl font-medium py-4'>Shop</h1>
            <p className='text-lg font-normal text-gray-500'>Home / Shop</p>
        </div>


        {/* filter and products */}
        <div className='py-10'>
            {/* filter and search*/}
            <div className='flex items-center justify-center gap-4'>
                {/* search bar */}
                <div className='w-3/4 flex items-center border border-red-950 px-2 py-4 gap-4 rounded-full'>
                    <SearchIcon />
                    <input type="text" placeholder='Search Product....' className='outline-none text-md w-full' />
                </div>
                {/* filter */}
                <div className='1/4 bg-red-950 text-white px-4 py-4 rounded-2xl'>
                    <select>
                        <option className='bg-red-950 text-white w-full mt-3 rounded-2xl'>Defualt</option>
                        <option className='bg-red-950 text-white w-full mt-3 rounded-2xl' value="">A to Z</option>
                        <option className='bg-red-950 text-white w-full mt-3 rounded-2xl' value="">Z to A</option>
                    </select>
                </div>
            </div>

            {/* product div */}
            <div className='flex items-center justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8'>
                {products.map((data) =>{
                  return(
                      <Link to={`product/${data.id}`}key={data.id}>
                      <ProductCard product_data={data}/>
                      </Link>
                  )
                })}
                
            </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Shop
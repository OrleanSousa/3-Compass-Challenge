import React from 'react'
import ProductCard from './CardProdutcs'


const OutProducts = () => {
  return (
    <div className='flex justify-center flex-col w-[1236px] h-[1084px]'>
            <h1 className='self-center font-bold text-[40px]'>Our Products</h1>
        <div className="min-h-screen flex justify-center items-center gap-6 ">
            <ProductCard
                productName="Syltherine"
                description="Stylish cafe chair"
                price={2500000}
                originalPrice={3500000}
                discount={30}
            />
            <ProductCard
                productName="Respira"
                description="Outdoor bar table and stool"
                price={500000}
                isNew={true}
            />
            <ProductCard
                productName="Lolito"
                description="Luxury big sofa"
                price={7000000}
                originalPrice={14000000}
                discount={50}
            />
        </div>
    </div>
  )
}

export default OutProducts
'use client'

import { IProduct } from "@/types/globalTypes";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ products }: { products: IProduct }) => {

    return (
        <div className="max-w-xs rounded-md shadow-md bg-gray-900 text-gray-100 group overflow-hidden">
            {/* <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" /> */}
            <div className=" h-60 overflow-hidden">
                <Image src={products.image} alt="" height="200" width="200" className="object-cover h- group-hover:scale-110 duration-300 object-center w-full rounded-t-md h-64 overflow-hidden" />
            </div>
            <div className="flex flex-col justify-center  p-6 space-y-8 relative">
                <div className="space-y-2 ">
                    <h2 className="text-xl font-semibold ">{products.productName}</h2>
                    <div className="flex items-center justify-between">
                        <p className="text-gray-100">Price : {products?.category}</p>
                        <p className="text-gray-100">Rating : {products?.averageRating}</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-gray-100">Price : {products?.price}</p>
                        <p className="text-gray-100">Rating : {products?.status}</p>
                    </div>
                </div>
                <Link href={`/product/${products._id}`} type="button" className="flex text-white justify-center w-full p-3 font-semibold  rounded-md bg-violet-400">See more details</Link>
            </div>
        </div>
    );
};

export default ProductCard;
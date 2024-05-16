"use client"

import fakeProductData from "../../../product.json"
import ProductCard from "./ProductCard";


const Products = () => {

    return (
        <section className="p-8 container mx-auto grid grid-cols-4 gap-4">
            {fakeProductData?.map((product: any, i: number) => (
                <ProductCard key={i} products={product} />
            ))}
        </section>
    );
};

export default Products;
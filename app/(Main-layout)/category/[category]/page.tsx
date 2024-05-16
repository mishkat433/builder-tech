import ProductCard from "@/components/Home/Products/ProductCard";
import fakeProductData from "../../../../product.json"

const Page = ({ params }: any) => {

    const categoryProduct = fakeProductData.filter(pr => pr?.category! == params?.category)

    return (
        <section className="p-8 container mx-auto grid grid-cols-4 gap-4">
            {categoryProduct?.map((product: any, i: number) => (
                <ProductCard key={i} products={product} />
            ))}
        </section>
    );
};

export default Page;
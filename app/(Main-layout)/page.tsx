import Products from "@/components/Home/Products/Products";


export default function Home() {

  return (
    <main className="font-mulish bg-fourth">

      {/* product section start */}

      <section className="p-8 ">
        <Products />
      </section>

      {/* product section end */}
    </main>
  );
}


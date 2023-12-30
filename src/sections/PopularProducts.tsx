import { products } from "../data/data.jsx"
import PopularProductCard from "../components/PopularProductCard.js"

const PopularProducts = () => {
  return (
    <div id="products" className="max-container mt-6 scroll-mt-[100px]">
      <div className="flex flex-col gap-5 ">
        <h2 className="text-4xl font-palanquin font-bold">Our <span className="text-coral-red">Popular</span> Products</h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design and value</p>
      </div>

      <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-14 gap-4">
        {products.map((obj) => 
          <PopularProductCard key={obj} {...obj} />)
        }
      </div>
    </div>
  )
}

export default PopularProducts
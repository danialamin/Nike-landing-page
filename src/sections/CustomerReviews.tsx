import {reviews} from "../data/data.jsx"
import CustomerCard from "../components/CustomerCard.js"

const CustomerReviews = () => {
  return (
    <div className="text-center">
      <h1 className="text-[3rem] font-[600]">What Our <span className="text-coral-red">Customers</span> Say?</h1>
      <p className="max-w-[500px] inline-block text-slate-gray mt-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis animi unde minus.</p>

      <div className="mt-[80px] flex justify-evenly flex-wrap max-md:gap-[40px]">
        {reviews.map((obj) => 
          <CustomerCard {...obj}/>)}
      </div>
    </div>
  )
}

export default CustomerReviews
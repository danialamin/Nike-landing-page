import {star} from "../assets/icons/"

const CustomerCard = (props) => {     // imgURL, customerName, rating, feedback
  return (
    <div className="h-[250px] flex flex-col justify-between items-center">
        <img src={props.imgURL} alt="customer" height={100} width={100} className="inline-block rounded-full" />
        <p className="text-slate-gray max-w-[300px] mx-auto leading-6 tracking-tighter">{props.feedback}</p>
        
        <div className="flex justify-center gap-2">
            <img src={star} alt="stars" className="inline-block" />
            <p>({props.rating})</p>
        </div>

        <p>{props.customerName}</p>
    </div>
  )
}

export default CustomerCard
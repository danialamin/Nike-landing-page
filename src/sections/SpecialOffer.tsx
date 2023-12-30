import {offer} from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <div className="flex justify-center items-center flex-wrap flex-wrap-reverse">
      <img src={offer} alt="img" width={400} height={500} />
      <div>
        <h2 className="text-[3rem] font-bold my-[20px]"><span className="text-coral-red">Special</span> Offer</h2>
        <p className="md:max-w-[500px] mb-[10px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi quidem libero ipsum reiciendis beatae corrupti! Similique amet ut ullam quo cum totam cupiditate numquam, perferendis in, commodi nobis assumenda fugit quisquam, harum omnis. Quis iste aspernatur quaerat veniam quod nostrum!</p>
        <div className="flex gap-5 mb-[20px]">
          <Button label="View details" />
          <Button label="Learn more" color="white" />
        </div>
        
      </div>
    </div>
  )
}

export default SpecialOffer
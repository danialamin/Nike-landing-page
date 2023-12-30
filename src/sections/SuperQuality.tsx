import Button from "../components/Button"
import { shoe8 } from "../assets/images"

const SuperQuality = () => {
  return (
    <div id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container scroll-mt-[50px]" >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl font-bold">
          We provide you
          <br />
          <span className="text-coral-red">Super Quality</span> Shoes
        </h2>
        <p className="mt-4 info-text">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation and a touch of elegance.</p>
        <p className="mt-6 info-text">Our dedication to detail and experience ensures your satisfaction</p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={522}  />
      </div>
    </div>
  )
}

export default SuperQuality
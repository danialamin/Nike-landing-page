import { useState } from "react"
import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import { statistics } from "../data/data.jsx"
import { bigShoe1 } from "../assets/images"
import { shoes } from "../data/data.jsx"
import ShoeCard from "../components/ShoeCard.tsx"

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)

  return (
    <div id="home" className="w-full flex xl:flex-row flex-col min-h-[70vh] gap-10 max-container" >
      <div className="xl:w-[40%] flex flex-col items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[1] font-bold xl:bg-white">
          <span className="xl:whitespace-nowrap z-[9] pr-10 relative">The New Arrival</span>
          <br />
          <span className="text-coral-red">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-[380px]">Discover stylish Nike arrivals, quality comfort and innovation for your active life.</p>
        <Button label="Shop now" iconURL={arrowRight} />

        <div className="flex flex-wrap mt-20 gap-16">
          {statistics.map((obj)=> 
              <div key={obj.label}>
                <p className="text-4xl font-palanquin font-bold">{obj.value}</p>
                <p className="font-montserrat text-slate-gray">{obj.label}</p>
              </div>)}
        </div>
      </div>
      
      <div className="xl:min-h-[70vh]  max-xl:py-40 bg-primary bg-hero bg-cover bg-center relative" >
        <img src={bigShoeImg} alt="shoe" height={500} width={610} className="z-[8]" />
        <div className="flex sm:gap-6 gap-4 absolute bottom-[0%] sm:left-[10%]">
          {shoes.map((obj) => 
           <ShoeCard imgURL={obj} changeBigShoeImg={(shoe) => {setBigShoeImg(shoe)}} bigShoeImg={bigShoeImg} key={obj} />)}
        </div>
      </div>
    </div>
  )
}

export default Hero
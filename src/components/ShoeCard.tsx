const ShoeCard = (props) => {  // imgURL, changeBigShoeImg, bigShoeImg
  
  function handleClick() {
    if (props.bigShoeImg !== props.imgURL.bigShoe)
        {props.changeBigShoeImg(props.imgURL.bigShoe)}
  }

  return (
    <div className={`border-2 rounded-xl cursor-pointer
                    ${props.bigShoeImg=== props.imgURL.bigShoe ? 'border-coral-red' : ''}`}
                    onClick={handleClick} >
        <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40
                        rounded-xl max-sm:p-4">
            <img src={props.imgURL.thumbnail} 
                 alt="shoe" 
                 width={127} 
                 height={103}
                 className="object-contain" />
        </div>
    </div>
  )
}

export default ShoeCard
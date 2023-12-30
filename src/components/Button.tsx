const Button = (props) => {  // label, iconURL, color
  console.log(props.iconURL)
  return (
    <button className={`flex items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none ${props.color =="white" ? 'bg-white text-black border-[.001px]' : 'bg-coral-red text-white'} rounded-full border-black`} >
        {props.label}
        {props.iconURL && <img src={props.iconURL} alt="icon" className="ml-2 rounded-[50%] w-5 h-5" />}
    </button>
  )
}

export default Button
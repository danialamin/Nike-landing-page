import Button from "../components/Button"

const Subscribe = () => {
  return (
    <div id="contact-us" className="flex flex-wrap justify-between gap-[60px]">
      <p className="text-[1.5rem]">Sign Up for <span className="text-coral-red">Updates</span> & Newsletters</p>
      <form className="flex w-[min(100%,600px)] border-2 border-[gray] rounded-full">
        <input type="text" placeholder="Write email here" className="flex-1 h-[50px] outline-none rounded-full pl-3" />
        <Button label="sign up!"/>
      </form>
    </div>
  )
}

export default Subscribe
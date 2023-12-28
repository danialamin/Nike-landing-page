import { headerLogo } from "../assets/images"
import { hamburger } from "../assets/icons"
import { navLinks } from "../data/data.jsx"

const Nav = () => {
  return (
    <header className="padding-x py-8 z-10 fixed w-full shadow-md bg-white">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center max-lg:hidden gap-16">
          {navLinks.map((obj) => 
            <li key={obj.label}>
              <a href={obj.href} className="font-montserrat leading-normal text-lg ">
                {obj.label}
              </a>
            </li>)}
        </ul>
        <div className="lg:hidden">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>

      </nav>
    </header>
  )
}

export default Nav
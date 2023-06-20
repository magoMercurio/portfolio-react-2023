import { useState } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"



import Logo from '../../assets/images/logo.png'
import GithubIcon from '../../assets/icons/GithubIcon'




const navbarLinks = [
  { label: "Home", href: "#home", ariaLabel: "Home" },
  { label: "Skills", href: "#skills", ariaLabel: "Skills" },
  { label: "Proyectos", href: "#proyectos", ariaLabel: "Proyectos" },
  { label: "Contacto", href: "#contacto", ariaLabel: "Contacto" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full h-20 top-0 flex flex-wrap justify-center items-center fixed bg-customDarkBg1 lg:bg-customDarkBgTransparent z-40 lg:backdrop-blur-xl">
      <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <Link to="/" >
            <div className="flex justify-start items-center grow basis-0">
              <div className="text-white font-['Inter'] font-bold text-xl">
                <img src={Logo} alt="Logo" className="w-25" />
              </div>
            </div>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="hidden lg:flex h-full pl-12 pb-2 gap-20">
            {navbarLinks.map(({ href, label, ariaLabel }) => (
              <a
                className="navbar-link"
                href={href}
                aria-label={ariaLabel}
                key={label}
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="grow basis-0 justify-end hidden lg:flex">
            <a
              className="custom-button-colored"
              href="https://github.com/magoMercurio"
              target="_blank"
              aria-label="GitHub" rel="noreferrer"
            >
              <GithubIcon />
              <span className="pt-px">GitHub</span>
            </a>
          </div>
        </motion.div>
        
        <div
          className="lg:hidden flex flex-col  px-2 py-3 border-solid border border-gray-600 rounded-md cursor-pointer hover:bg-customDarkBg2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500 "></div>
        </div>
      </div>
      {/* Mobile navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="flex flex-col mt-16 lg:hidden absolute top-4 left-0  bg-customDarkBg1 z-50 w-full 
        items-center gap-10 pb-10 border-y border-solid border-customDarkBg3 pt-10
        "
            >
              {navbarLinks.map(({ label, href, ariaLabel }) => (
                <a
                  key={href}
                  className="navbar-link"
                  href={href}
                  onClick={() => setIsOpen(false)}
                  aria-label={ariaLabel}
                >
                  {label}
                </a>
              ))}
              <a
              className="custom-button-colored"
              href="https://github.com/magoMercurio"
              target="_blank"
              aria-label="GitHub" rel="noreferrer"
            >
              <GithubIcon />
              <span className="pt-px">GitHub</span>
            </a>
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};


export default Navbar
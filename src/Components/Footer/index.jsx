import { Link } from "react-router-dom";


import TwitterIcon  from '../../assets/icons/TwitterIcon';
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import LinkedinIcon from '../../assets/icons/LinkedinIcon'

import Logo from '../../assets/images/logo.webp'



const Footer = () => {
  return (
    <footer>
      <div className="pt-10  lg:pt-20 lg:pb-12 bg-customDarkBg1 radius-for-skewed ">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
              <div className="flex justify-center lg:justify-start items-center grow basis-0">
              <Link to="/" >
            <div className="flex justify-start items-center grow basis-0">
              <div className="text-white font-['Inter'] font-bold text-xl">
                <img src={Logo} alt="Logo" className="w-16 mr-3" />
              </div>
            </div>
          </Link>
                <div className="text-white font-['Inter'] font-bold text-xl">
                  Raúl Dávila
                </div>
              </div>
              <p className="mb-10 mt-4 sm:w-[22rem] lg:w-[20rem] xl:w-[24rem] text-gray-400 leading-loose text-center lg:text-left mx-auto lg:mx-0">
                Impulsa tu presencia en línea y contáctame ahora para empezar
                <a
                  href="https://www.linkedin.com/in/rauldavilaf/"
                  target="_blank"
                  className="text-gray-100 ml-1.5 "
                  aria-label="LinkedIn" rel="noreferrer"
                >
                  Aqui.
                </a>
              </p>
              <div className="w-36 mx-auto lg:mx-0">
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="mailto:admin@correo.com"
                >
                  <EnvelopeIcon className="w-6 h-6 mr-3 text-white"  />
                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="https://twitter.com/mago_d_Mercurio"
                >
                  <TwitterIcon />
                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="https://www.linkedin.com/in/rauldavilaf/"
                >
                  <LinkedinIcon />
                </a>
              </div>
            </div>
            
          </div>
          <p className="lg:text-center text-sm text-gray-400 border-t border-[rgb(255,255,255,0.2)] pt-12 mt-16 hidden lg:block">
            &copy; 2023. Creado por Raúl Dávila
          </p>
        </div>
      </div>
    </footer>
  );
};


export default Footer
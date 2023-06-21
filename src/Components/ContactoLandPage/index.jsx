import { motion } from "framer-motion";

import { EnvelopeIcon } from '@heroicons/react/24/outline'
import TwitterIcon from '../../assets/icons/TwitterIcon'
import LinkedinIcon from '../../assets/icons/LinkedinIcon'


const ContactoLandPage = () => {

  return (
    <section className="lg:mb-16 w-full flex flex-col justify-center items-center bg-customDarkBg1" id="contacto">
      <div className="custom-shape-divider-bottom-1665696614">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="custom-bg-dark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="custom-bg-dark1"
          ></path>
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className=" 2xl:w-[1150px] xl:w-[1050px]  md:w-4/5 flex justify-center items-cen bg-customDarkBg1 pt-12 lg:pt-24 pb-8 lg:pb-10 mx-auto lg:flex-row flex-col">
          <div className="w-3/4 lg:w-1/2 flex flex-col lg:mx-unset mx-auto">
            <span className="custom-block-subtitle">
            ¡Contáctame hoy mismo y comencemos a hacer realidad tu proyecto!
            </span>
            <h2 className="mt-10 mb-8 text-4xl lg:text-5xl custom-block-big-title">
              Contacto
            </h2>
            <p className=" text-customGrayText leading-loose w-11/12 h-fit sm:w-4/5 md:w-auto lg:w-auto   flex flex-col justify-center items-center px-6 py-4">
            Estoy a tu disposición para materializar tu visión digital. No dudes en contactarme para obtener un servicio de diseño web personalizado y de calidad. ¡Contáctame hoy mismo y comencemos a hacer realidad tu proyecto!
            </p>
            
          </div>
          
        </div>
          <div className="flex  justify-center items-center w-full lg:w-1/2 mx-auto">
            <ul className="text-customGrayText flex flex-col gap-6  md:flex-row" >
              <li><a
              className="custom-button-colored"
              href="mailto:admin@correo.com"
              aria-label="mail" rel="noreferrer"
            >
              <EnvelopeIcon  className="w-6 h-6 text-white mr-3" />
              <span className="pt-px">Mail</span>
            </a></li>
              <li><a
              className="custom-button-colored"
              href="https://twitter.com/mago_d_Mercurio"
              target="_blank"
              aria-label="GitHub" rel="noreferrer"
            >
              <TwitterIcon className="w-6 h-6 text-white mr-3" />
              <span className="pt-px">Twitter</span>
            </a></li>
              <li><a
              className="custom-button-colored"
              href="https://www.linkedin.com/in/rauldavilaf/"
              target="_blank"
              aria-label="GitHub" rel="noreferrer"
            >
              <LinkedinIcon />
              <span className="pt-px">LinkedIn</span>
            </a></li>
            </ul>
          </div>
      </motion.div>
      <div className="custom-shape-divider-top-1665696661 w-full">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="custom-bg-dark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="custom-bg-dark1"
          ></path>
        </svg>
      </div>
      
    </section>
  );
};


export default ContactoLandPage
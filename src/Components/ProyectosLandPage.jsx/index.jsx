import { motion } from "framer-motion";

import { proyectosData } from "../../Data/ProyectosData";


const ProyectosLandPage = () => (
  <section className="w-full flex justify-center pt-10 mb-16 lg:mb-32 bg-customDarkBg2 relative" id="proyectos">
    <div className="absolute -top-16" id="feedback" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="custom-block-subtitle text-center mb-6">
          Inspiración hecha realidad
        </div>
        <div className="custom-block-big-title text-center mb-16 px-8 sm:px-24 md:px-48">
        Explora mi portafolio de proyectos
        </div>

        <div className="grid justify-items-center grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
          {proyectosData.map((proyecto, index) => (
            <div
              className="w-11/12 h-fit sm:w-4/5 md:w-auto md:h-[350px] lg:w-auto custom-border-gray-darker rounded-xl bg-customDarkBg3 flex flex-col justify-center px-6 py-4"
              key={`${proyecto.proyectName} - ${index}`}
            >
              <a href={ proyecto.urlProyect }>
              <div className="flex justify-center">
              <img src={proyecto.image} alt="" width="280px" />
              </div>
              <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
                <div className="flex flex-col ml-4">
                  <div className="custom-content-text-white font-medium">
                    {proyecto.proyectName}
                  </div>
                  <div className="custom-content-text-gray">
                    {proyecto.description}
                  </div>
                </div>
                
              </div>
              </a>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);


export default ProyectosLandPage
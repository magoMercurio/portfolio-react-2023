import Layout from '../../Components/Layout'
import Hero from '../../Components/Hero'
import Skills from '../../Components/Skills'
import Skills2 from '../../Components/Skills2'
import ProyectosLandPage from '../../Components/ProyectosLandPage.jsx'
import ContactoLandPage from '../../Components/ContactoLandPage'
import Division from '../../Components/Division/index.jsx'


const Home = () => {
    return (
      <>
        <Layout>
          <Hero />
          <Skills />
          <Division />
          <Skills2 />
          <Division />
          <ProyectosLandPage />
          <ContactoLandPage />
        </Layout>
      </>
    )
}

export default Home
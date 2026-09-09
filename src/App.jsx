import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Planes from './components/Planes.jsx'
import Calculadora from './components/Calculadora.jsx'
import Automatizaciones from './components/Automatizaciones.jsx'
import Servicios from './components/Servicios.jsx'
import Proceso from './components/Proceso.jsx'
import FAQ from './components/FAQ.jsx'
import Contacto from './components/Contacto.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Planes />
        <Calculadora />
        <Automatizaciones />
        <Servicios />
        <Proceso />
        <FAQ />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}

import Hero from '../components/Hero.jsx'
import Ticker from '../components/Ticker.jsx'
import About from '../components/About.jsx'
import StatsReceipt from '../components/StatsReceipt.jsx'
import Menu from '../components/Menu.jsx'
import Projects from '../components/Projects.jsx'
import Partnerships from '../components/Partnerships.jsx'
import Contact from '../components/Contact.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <About />
      <StatsReceipt />
      <Menu />
      <Projects />
      <Partnerships />
      <Contact />
    </>
  )
}

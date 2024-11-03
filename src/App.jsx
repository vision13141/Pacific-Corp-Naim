import Container from "./Component/Container"
import Benefits from "./Layout/Benefits"
import Footer from "./Layout/Footer"
import Hero from "./Layout/Hero"
import LastFooter from "./Layout/LastFooter"
import Navber from "./Layout/Navber"
import Service from "./Layout/Service"
import Testimonial from "./Layout/Testimonial"
import Tips from "./Layout/Tips"

function App() {


  return (
    <>
      <Container>
        <Navber />
        <Hero />
        <Service />
        <Benefits />
        <Tips />
        <Testimonial />
      </Container>
      <Footer />
      <LastFooter />
    </>
  )
}

export default App

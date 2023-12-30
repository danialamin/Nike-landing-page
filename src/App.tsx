import {CustomerReviews, Footer, Hero, PopularProducts, SpecialOffer, Subscribe,
        SuperQuality} from "./sections/ExportSections.jsx"
import Nav from "./components/Nav.tsx"

function App() {
  return (
    <main className="relative">
      <Nav />

      <section className="xl:padding-l lg:padding-r padding-b">
        <Hero />
      </section>

      <section className="padding ">
        <PopularProducts />
      </section>

      <section className="padding">
        <SuperQuality />
      </section>

      <section className="padding">
        <SpecialOffer />
      </section>

      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>

      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
    </main>
  )
}

export default App
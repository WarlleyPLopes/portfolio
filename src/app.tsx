import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Skills } from "./components/Skills"

export function App() {
  return (
    <div className="max-w-7xl m-auto flex flex-col items-center">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Contact />
    </div>
  )
}

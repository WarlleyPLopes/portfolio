import github from "../assets/github.svg"
import linkedin from "../assets/linkedin.svg"
import instagram from "../assets/instagram.svg"

export function Contact() {
  return (
    <div id="contato" className="w-full my-14 flex flex-col">
      <h2 className="max-w-max text-4xl font-bold">Contact</h2>
      <div className="flex mt-14 items-center justify-center">
        <nav className="flex w-full justify-around gap-3 px-16">
          <a
            className="flex items-center gap-3"
            href="https://www.linkedin.com/in/warlley-lopes-00b40a217/"
            target="_blank"
          >
            <img className="size-10" src={linkedin} alt="LinkedIn" />
            <span className="font-normal hover:font-semibold">LinkedIn</span>
          </a>
          <a
            className="flex items-center gap-3"
            href="https://github.com/WarlleyPLopes"
            target="_blank"
          >
            <img
              className="size-10 bg-white rounded-full"
              src={github}
              alt="GitHub"
            />
            <span className="font-normal hover:font-semibold">
              WarlleyPLopes
            </span>
          </a>

          <a
            className="flex items-center gap-3"
            href="https://www.instagram.com/warlleylopes.dev/"
            target="_blank"
          >
            <img className="size-10" src={instagram} alt="Instagram" />
            <span className="font-normal hover:font-semibold">
              warlleylopes.dev
            </span>
          </a>
        </nav>
      </div>
    </div>
  )
}

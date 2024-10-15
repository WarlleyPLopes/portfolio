export function Header() {
  const about = () => {
    window.scrollTo({
      top: document.querySelector("#about").offsetTop,
      behavior: "smooth",
    })
  }
  const skills = () => {
    window.scrollTo({
      top: document.querySelector("#skills").offsetTop,
      behavior: "smooth",
    })
  }

  const contato = () => {
    window.scrollTo({
      top: document.querySelector("#contato").offsetTop,
      behavior: "smooth",
    })
  }
  return (
    <div className="w-screen bg-gray-900">
      <div className="max-w-7xl h-24 flex items-center justify-between m-auto">
        <div>
          <p className="text-2xl font-bold hover:text-red-700">Warlley Lopes</p>
        </div>
        <div>
          <div className="flex gap-4">
            <button
              type="button"
              className="hover:font-medium scroll-smooth"
              onClick={about}
            >
              About
            </button>

            <button
              type="button"
              className="hover:font-medium scroll-smooth"
              onClick={skills}
            >
              Skills
            </button>

            <button
              type="button"
              className="hover:font-medium scroll-smooth"
              onClick={contato}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

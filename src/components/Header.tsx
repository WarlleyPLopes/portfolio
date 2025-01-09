export function Header() {
  return (
    <div className="w-screen bg-gray-900">
      <div className="max-w-7xl h-24 flex items-center justify-between m-auto">
        <div>
          <p className="text-2xl font-bold hover:text-red-700">Warlley Lopes</p>
        </div>
        <div>
          <div className="flex gap-4">        
            <a href="#about" className="hover:font-medium scroll-smooth">About</a>
            <a href="#skills" className="hover:font-medium scroll-smooth">Skills</a>
            <a href="#contato" className="hover:font-medium scroll-smooth">Contact</a>
          </div>
        </div>
      </div>
    </div>
  )
}
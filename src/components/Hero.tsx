import hero from "../assets/boy.png"
export function Hero() {
  return (
    <div className="flex items-center h-screen w-full justify-between">
      <div>
        <p className="text-xl font-mono text-zinc-500">Hi, my name is</p>
        <h1 className="text-6xl font-bold font-sans text-white">
          Warlley Lopes.
        </h1>

        <h1 className="text-6xl font-bold text-zinc-500">
          Full-Stack Developer
        </h1>
        <p className="max-w-[600px] text-lg mt-4 text-zinc-300">
          Focused on modern technologies, always striving to create efficient
          and innovative solutions for impactful projects.
        </p>
      </div>
      <div>
        <img className="h-[520px] w-[520px]" src={hero} alt="" />
      </div>
    </div>
  )
}

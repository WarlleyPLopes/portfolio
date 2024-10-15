import hero from "../assets/hero.jpg"

export function About() {
  return (
    <div id="about" className="w-full h-screen flex flex-col gap-8">
      <div className="flex items-center">
        <h2 className="max-w-max mt-24 text-4xl font-bold">About me</h2>
      </div>
      <div className="flex items-center gap-32">
        <div className=" p-8 rounded-lg shadow-lg max-w-3xl mx-auto mt-12">
          <p className="text-lg leading-relaxed">
            Hello! I'm Warlley and I web developer passionate about technology,
            always learning and growing. Since diving into programming in
            November 2022, I’ve worked on challenging projects that constantly
            push me to improve.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            While I’m focused on JavaScript, I regularly explore new
            technologies and trends. I believe a strong developer knows how to
            choose the right tools for each project, whether frontend or
            backend.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            I'm also a big believer in collaboration and enjoy connecting with
            other developers to share ideas and experiences. Let's connect and
            explore the ever-evolving world of web development together!
          </p>
        </div>
        <div>
          <img src={hero} alt="eu" className="w-96 h-96 rounded-3xl" />
        </div>
      </div>
    </div>
  )
}

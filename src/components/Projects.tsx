import food from "../assets/food-explorer.png"
export function Projects() {
  return (
    <div className="w-full h-screen flex flex-col gap-8">
      <div className="flex items-center">
        <h2 className="max-w-max text-4xl font-bold">Projects</h2>
      </div>

      <div>
        <div className="grid grid-cols-2 gap-4">
          <img src={food} alt="" />
        </div>
      </div>
    </div>
  )
}

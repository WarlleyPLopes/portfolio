import express from "../assets/express-original.svg"
import typescript from "../assets/typescript.svg"
import javascript from "../assets/javascript.svg"
import tailwind from "../assets/tailwind-css.svg"
import bootstrap from "../assets/bootstrap.svg"
import reactJs from "../assets/react.svg"
import docker from "../assets/docker.svg"
import next from "../assets/next-js.svg"
import node from "../assets/node-js.svg"
import html from "../assets/html.svg"
import css from "../assets/css.svg"
import git from "../assets/git.svg"
export function Skills() {
  return (
    <div id="skills" className="w-full h-screen flex flex-col gap-8">
      <div className="flex items-center">
        <h2 className="max-w-max mt-24 mb-20 text-4xl font-bold">Skills</h2>
      </div>
      <div className="px-20 mt-10">
        <div className="grid grid-cols-6 gap-10">
          <div className="flex flex-col justify-center items-center font-medium bg-white text-gray-950 rounded-lg py-2 hover:bg-zinc-500 cursor-pointer">
            <img
              className="flex-shrink-0 p-2 h-20"
              src={javascript}
              alt="javascript"
            />
            <span>JavaScript</span>
          </div>
          <div className="flex flex-col justify-center items-center font-medium bg-white text-gray-950 rounded-lg py-2 hover:bg-zinc-500 cursor-pointer">
            <img
              className="flex-shrink-0 p-2 h-20 w-20"
              src={typescript}
              alt="typescript"
            />
            <span>TypeScript</span>
          </div>
          <div className="flex flex-col justify-center items-center font-medium bg-white text-gray-950 rounded-lg py-2 hover:bg-zinc-500 cursor-pointer">
            <img
              className="flex-shrink-0 p-2 h-20 w-20"
              src={reactJs}
              alt="reactJs"
            />
            <span>reactJs</span>
          </div>
          <div className="flex flex-col justify-center items-center font-medium bg-white text-gray-950 rounded-lg py-2 hover:bg-zinc-500 cursor-pointer">
            <img
              className="flex-shrink-0 p-2 h-20 w-20"
              src={node}
              alt="node"
            />
            <span>NodeJs</span>
          </div>
          <div className="flex flex-col justify-center items-center font-medium bg-white text-gray-950 rounded-lg py-2 hover:bg-zinc-500 cursor-pointer">
            <img className="flex-shrink-0 p-2 h-20 w-20" src={git} alt="git" />
            <span>git</span>
          </div>
          <div className="flex flex-col justify-center items-center font-medium bg-white text-gray-950 rounded-lg py-2 hover:bg-zinc-500 cursor-pointer">
            <img className="flex-shrink-0 p-2 h-20 w-20" src={html} alt="git" />
            <span>html</span>
          </div>
          <div className="flex flex-col justify-center items-center font-medium bg-white text-gray-950 rounded-lg py-2 hover:bg-zinc-500 cursor-pointer">
            <img className="flex-shrink-0 p-2 h-20 w-20" src={css} alt="git" />
            <span>css</span>
          </div>
          <div className="flex flex-col justify-center items-center font-medium bg-white text-gray-950 rounded-lg py-2 hover:bg-zinc-500 cursor-pointer">
            <img
              className="flex-shrink-0 p-2 h-20 w-20"
              src={tailwind}
              alt="git"
            />
            <span>tailwind</span>
          </div>
          {/* <div className="flex flex-col justify-center items-center font-medium bg-white text-gray-950 rounded-lg py-2 hover:bg-zinc-500 cursor-pointer">
            <img
              className="flex-shrink-0 p-2 h-20 w-20"
              src={github}
              alt="git"
            />
            <span>github</span>
          </div> */}

          <div className="flex flex-col justify-center items-center font-medium bg-white text-gray-950 rounded-lg py-2 hover:bg-zinc-500 cursor-pointer">
            <img
              className="flex-shrink-0 p-2 h-20 w-20"
              src={express}
              alt="git"
            />
            <span>express</span>
          </div>
          <div className="flex flex-col justify-center items-center font-medium bg-white text-gray-950 rounded-lg py-2 hover:bg-zinc-500 cursor-pointer">
            <img
              className="flex-shrink-0 p-2 h-20 w-20"
              src={bootstrap}
              alt="git"
            />
            <span>bootstrap</span>
          </div>
          <div className="flex flex-col justify-center items-center font-medium bg-white text-gray-950 rounded-lg py-2 hover:bg-zinc-500 cursor-pointer">
            <img
              className="flex-shrink-0 p-2 h-20 w-20"
              src={docker}
              alt="git"
            />
            <span>docker</span>
          </div>
          <div className="flex flex-col justify-center items-center font-medium bg-white text-gray-950 rounded-lg py-2 hover:bg-zinc-500 cursor-pointer">
            <img className="flex-shrink-0 p-2 h-20 w-20" src={next} alt="git" />
            <span>NextJs</span>
          </div>
        </div>
      </div>
    </div>
  )
}

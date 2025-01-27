'use client'

import { Logo } from "../components/Logo"

// React component
// 1. Nernii ehnii useg tomoor
// 2. Html Tag return hiideg

export default function Home() {
  return (
    <div className="flex justify-center items-center  bg-gray-100 h-screen w-screen ">
      <div className="p-8 w-[480px] h-[655px] rounded-xl bg-white">
        <Logo />

        <p>Join Us! 😎</p>
        <h1>Please provide all current information accurately. </h1>

        {/* <InputsComponent /> */}
      </div>


    </div>
  )
}

// Components
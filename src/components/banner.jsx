import React from "react"
import { TypeAnimation } from "react-type-animation"

export default function Banner() {
  return (
    <div
      id="home"
      className="section container mx-auto max-w-[1200px] px-3 items-center"
    >
      <div className="w-full">
        <div className="block text-center font-secondary font-black text-[30px]">
          Hello, I am
          <div>
            <TypeAnimation
              sequence={[
                "Rega Andhika Kusuma",
                3000,
                "Front-End Developer",
                3000,
                "Fresh Graduate",
                3000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="ml-3 text-secondary"
            />
          </div>
        </div>
        <div className="max-w-[750px] text-center mx-auto mt-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          esse ducimus nemo molestias error perspiciatis necessitatibus
          voluptates deleniti tempore sint accusamus ipsam consequuntur minus,
          delectus totam incidunt similique rerum accusantium, nesciunt facere.
          Enim labore dolore similique voluptatum minima adipisci aperiam sit
          repudiandae voluptates amet, natus asperiores culpa eveniet sunt
          alias?
        </div>
      </div>
    </div>
  )
}

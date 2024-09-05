"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";

import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import MagicButton from "./ui/MagicButton";
import MagicButtonResume from "./ui/getResumeButton";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

    <div className="flex justify-center ">
      <MagicButtonResume
        title="Download Resume"
        icon={<FaDownload />}
        position="right"
        
      ></MagicButtonResume>
</div>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item, index) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] py-72"
            key={item.id}
          >
            <PinContainer title={`${item.link}`} href={`${item.link}`}>
              <div className="relative flex items-center justify-center sm:w-96 w-[vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className={`z-10 absolute bottom-0 ${
                    index === 4
                      ? "transform transition-transform duration-300 ease-in-out hover:scale-150"
                      : ""
                  }`}
                />
              </div>

              <h1 className="font-bold lg:text-xl md:text-l text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;

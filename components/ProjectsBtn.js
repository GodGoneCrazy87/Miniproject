import Image from "next/image";

import Link from "next/link";

import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return( 
    <div className=" xl:max-0">
      <Link 
        href={'/services'} 
        className="relative w-[185px]  h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group">
        <h1 className="text-[1.5vw] top-[-.6vw] relative group-hover:text-[#FE5B4A]">Analyze Now</h1>
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 group-hover:text-[#FE5B4A] transition-all  bottom-[2.4vw] duration-300"/>
      </Link>
    </div>
  );
};

export default ProjectsBtn;

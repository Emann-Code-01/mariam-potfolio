import { FaGithub } from "react-icons/fa";
import Gmail from "@/assests/svg/Gmail";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";
//import { SiGmail } from "react-icons/si";
//<SiGmail />


const links = [
  {
    title: 'Linkedin',
    icon: <FaLinkedin />,
    link: 'https://www.linkedin.com/in/bhadmus-mariam-6b7250277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    title: 'Medium',
    icon: <FaMediumM />,
    link: 'https://medium.com/@bhadmusmariam590',
  },
  {
    title: 'Github',
    icon: <FaGithub />,
    link: 'https://github.com/bhadmusmariam-ds',
  },
  {
    title: 'Whatsapp',
    icon: <FaWhatsapp />,
    link: 'https://wa.me/2347045982641',
  },
  {
    title: 'Gmail',
    icon: <Gmail />,
    link: 'mailto:bhadmusmariam590@gmail.com',
  },
];

export default function HeroSection() {
  return (
    <div className="relative mt-4 md:mt-36 flex flex-col items-center gap-3 justify-center mx-6 md:mx-0">
      <div className="flex flex-col justify-center items-center md:hidden space-y-3">
        <div className="flex flex-col space-y-3 justify-center max-w-lg">
          <h3 className="text-xl ">Hey there! I'm</h3>
          <h1 className="text-5xl font-bold transform-[scaleY(1.3)] inline-block italic">Mariam <span className="text-highlight">Bhadmus</span></h1>
          <p className="text-2xl font-bold tracking-wide mt-3">An analyst that helps find insights through data</p>
          {/* <button>
            <a className="px-6 py-3 flex border-2 border-highlight rounded-lg place-items-center font-semibold hover:bg-highlight transition-all ease-in"
              href="https://drive.google.com/file/d/1-oJD9nn3_I7LUtYqrV7lfpL051uLKTJD/view?usp=drivesdk"
              target="_blank">
              View Resume
            </a>
          </button> */}
        </div>
        <div className="relative">
          <div className="bg-white rounded-full p-1 w-92 aspect-square inline-block shadow-2xl">
            <div className="bg-linear-to-b from-[#292523] via-[#292523] to-[#b80e1f] p-0.75 w-92 aspect-square inline-block shadow-2xl rounded-full items-center">
              <img src="/mariam.png" alt="Miriam Picture" className="object-cover w-92 aspect-square block rounded-full" />
            </div>
          </div>
          <div className="bg-transparent absolute inset-0"></div>
        </div>
      </div>
      <div className="hidden md:flex">
        <div className="flex flex-col space-y-6 justify-center max-w-lg">
          <h3 className="text-2xl ">Hey there! I'm</h3>
          <h1 className="text-6xl font-bold transform-[scaleY(1.5)] inline-block italic">Mariam <span className="text-highlight">Bhadmus</span></h1>
          <p className="text-3xl font-black tracking-widest mt-3">An analyst that helps find insights through data</p>
          {/* <button>
            <a className="px-6 py-3 flex border-2 border-highlight rounded-lg place-items-center font-semibold hover:bg-highlight transition-all ease-in"
              href="https://drive.google.com/file/d/1-oJD9nn3_I7LUtYqrV7lfpL051uLKTJD/view?usp=drivesdk"
              target="_blank">
              View Resume
            </a>
          </button> */}
        </div>
        <div className="relative">
          <div className="bg-white rounded-full p-1 w-92 aspect-square inline-block shadow-2xl">
            <div className="bg-linear-to-b from-[#292523] via-[#292523] to-[#b80e1f] p-0.75 w-92 aspect-square inline-block shadow-2xl rounded-full items-center">
              <img src="/mariam.png" alt="Miriam Picture" className="object-cover w-92 aspect-square block rounded-full" />
            </div>
          </div>
          <div className="bg-transparent absolute inset-0"></div>
        </div>
      </div>
    </div>
  )
}
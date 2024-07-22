import Image from "next/image";
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <div className="container mt-28 bg-purple-500 rounded-3xl py-14 px-5 grid grid-cols-1 md:grid-cols-2 md:gap-8 ">
      <div className="flex items-center">
        <Image src={"/banner.jpg"} alt="banner" width={500} height={500} />
      </div>
      <div className="flex flex-col justify-center">
        <div className="text-left space-y-7 lg:max-w-[400px]">
          <h1 className="text-3xl lg:text-4xl font-bold">
            I am a Frontend Developer
          </h1>
          <p className="text-white/70">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
            velit mollitia, voluptates iste quo odit? Vitae fugiat fugit
            mollitia, tempora, iure sed recusandae velit cupiditate eos nesciunt
            ratione aliquid nam aut repudiandae suscipit nemo nostrum explicabo
            quam. Reiciendis rerum, iusto explicabo dignissimos nisi placeat
            velit fuga laboriosam atque exercitationem debitis culpa harum quasi
            quas quibusdam fugiat ad dolore sed ipsa vitae. Eos consectetur quam
            consequatur unde, vitae non dignissimos ipsa!
          </p>
          <div className="flex items-center gap-4">
            <button className="bg-red-600 rounded-lg px-5 text-xs py-3 md:text-base">
              Know more
            </button>
            <button className="border border-white/50 rounded-lg px-5 text-xs md:text-base flex items-center gap-2 md:py-3">
              <FaDownload />
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

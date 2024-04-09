import { arrowright } from "../assets/icons";
import Button from "../Components/Button";
import { mypic } from "../assets/images";
const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row w-full justify-center min-h-screen max-container"
    >
      <div className="relative flex flex-col md:w-1/2 w-full justify-center items-start max-xl:padding-x pt-28">
        <p className="text-2xl font-semibold font-montserrat dark:text-white text-black">
          Hi, I&apos;m Lucky
        </p>
        <h1 className="relative mt-10 font-palanquin text-7xl font-bold max-sm:text-[72px] max-sm:leading-[82px]">
          <span>I&apos;m </span>
          <span className="pr-10 dark:text-white text-black">Full-stack</span>
          <br />
          <span className="dark:text-white text-balack mt-3">
            Expert Developer
          </span>
        </h1>
        <p className="font-montserrat dark:text-white text-black text-lg leading-8 mt-6 mb-14">
          I&apos;m your go-to developer for turning ideas into stunning digital
          realities.
        </p>
        <Button label="My Resume" iconURL={arrowright} />
      </div>
      <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40">
        <img src={mypic} alt="mypicture" className="rounded-full" />
      </div>
    </section>
  );
};

export default Hero;

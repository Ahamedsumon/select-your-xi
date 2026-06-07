import heroImage from "../../assets/banner-main.png";
import heroShadowImage from "../../assets/bg-shadow.png";
const Hero = () => {
  return (
    <div className="max-w-[1200px] mx-auto relative">
      <div className="bg-black">
        <img className="object-cover" src={heroShadowImage} alt="" />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <img className="w-32 sm:w-48 md:w-64 lg:w-80" src={heroImage} alt="" />
        <h1 className="text-xl md:text-3xl lg:text-5xl">Assemble Your Ultimate Dream 11 Cricket Team</h1>
        <p>Beyond Boundaries Beyond Limits</p>
        <button className="btn btn-warning">Claim Free Credit</button>
      </div>
    </div>
  );
};

export default Hero;

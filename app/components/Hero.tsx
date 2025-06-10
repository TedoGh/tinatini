import HeroImage from "../assets/images/bg.jpg";

const Hero = () => {
  return (
    <div
      className="bg-black text-white flex justify-center items-center h-[70vh] bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${HeroImage.src})` }}
    >
      <div className="container mx-auto">
        <h1 className="text-center font-bold text-5xl">WELCOME</h1>
      </div>
    </div>
  );
};

export default Hero;

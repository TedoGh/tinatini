import Image from "next/image";
import AboutImage from "../assets/images/about.jpg";

const About = () => {
  return (
    <div className="py-14">
      <div className="container mx-auto px-16">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div>
            <Image src={AboutImage} width={600} height={600} alt="" />
          </div>
          <div>
            <div style={{ maxWidth: "700px" }}>
              <p>
                I'm Tiko Ghachava, a Georgian singer with a deep love for jazz
                and musical theatre songs. Music has been my language for as
                long as I can remember — a way to express what words cannot. I
                perform songs in Georgian as well as in foreign languages,
                including English, Italian, French, and more. I have taken part
                in numerous concerts and festivals — each of them a meaningful
                and successful experience that helped me grow as a performer. In
                2019, I became a Bachelor of Arts in Jazz Studies. That same
                year, I became a semifinalist in the television mega project Big
                Stage and have been actively continuing my musical performance
                career in Georgia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import GallaryComp from "./GallaryComp.jsx";

function TopWaves() {
  return (
    <svg
      viewBox="0 0 1440 320"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className="w-full h-[250px] md:h-auto"
    >
      <path
        fill="#F30133"
        d="M0,160L80,170.7C160,181,320,203,480,208C640,213,800,203,960,181.3C1120,160,1280,128,1360,112L1440,96V320H0Z"
      />
      <path
        fill="#05325B"
        d="M0,250L60,240C120,230,240,210,360,190C480,170,600,150,720,140C840,130,960,140,1080,160C1200,180,1320,210,1380,225L1440,240V320H0Z"
      />

      <path
        fill="#00A09E"
        d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,218.7C672,224,768,224,864,202.7C960,181,1056,139,1152,117.3C1248,96,1344,96,1392,96L1440,96V320H0Z"
      />
    </svg>
  );
}

function BottomWaves() {
  return (
    <svg
      viewBox="0 0 1440 320"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className="w-full h-[250px] md:h-auto"
    >
      <path
        fill="#00A09E"
        d="M0,160L80,170.7C160,181,320,203,480,208C640,213,800,203,960,181.3C1120,160,1280,128,1360,112L1440,96V320H0Z"
      />
      <path
        fill="#F30133"
        d="M0,250L60,240C120,230,240,210,360,190C480,170,600,150,720,140C840,130,960,140,1080,160C1200,180,1320,210,1380,225L1440,240V320H0Z"
      />
      <path
        fill="#05325B"
        d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,218.7C672,224,768,224,864,202.7C960,181,1056,139,1152,117.3C1248,96,1344,96,1392,96L1440,96V320H0Z"
      />
    </svg>
  );
}

const Home = () => {
  return (
    <>
      <div className="relative font-color-sigin min-h-screen  flex flex-col items-center justify-center overflow-hidden ">
        {/* Top Waves */}
        <div className="absolute top-0 left-0 w-full rotate-180">
          <TopWaves />
        </div>

        {/* Hero Text */}
        <div className="z-10 mt-40 mb-40 text-center">
          <h1 className="text-4xl sm:text-8xl font-oswald-custom  leading-snug ">
            <span className="block">VOICES THAT</span>
            <span className="block color-prime">LEADS...</span>
          </h1>
        </div>

        {/* Bottom Waves */}
        <div className="absolute bottom-0 left-0 w-full">
          <BottomWaves />
        </div>
      </div>

      <div className="h-[300px] font-color-highight">
        <h2 className="text-center text-3xl font-semibold mt-10">
          Welcome to the Home Page
        </h2>
        <p className="text-center mt-4">
          This is the starting point of our application. Explore the links in
          the navigation bar to learn more about us, our committees, and
          resources.
        </p>
      </div>

      <div className="text-black">
        <GallaryComp />
      </div>
    </>
  );
};

export default Home;

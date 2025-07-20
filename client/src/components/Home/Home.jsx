import React from 'react';
function TopWaves() {
  return (
    <svg
      viewBox="0 0 1440 320"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none" 
      className="w-full h-[300px] sm:h-auto"
    >
      <path
        fill="#F30133"
        d="M0,160L80,170.7C160,181,320,203,480,208C640,213,800,203,960,181.3C1120,160,1280,128,1360,112L1440,96V320H0Z"
      />
      <path
        fill="#05325B"
        d="M0,224L60,213.3C120,203,240,181,360,154.7C480,128,600,96,720,85.3C840,75,960,85,1080,112C1200,139,1320,181,1380,202.7L1440,224V320H0Z"
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
      className="w-full h-[300px] sm:h-auto"
    >
      <path
        fill="#00A09E"
        d="M0,160L80,170.7C160,181,320,203,480,208C640,213,800,203,960,181.3C1120,160,1280,128,1360,112L1440,96V320H0Z"
      />
      <path
        fill="#F30133"
        d="M0,224L60,213.3C120,203,240,181,360,154.7C480,128,600,96,720,85.3C840,75,960,85,1080,112C1200,139,1320,181,1380,202.7L1440,224V320H0Z"
      />
      <path
        fill="#05325B"
        d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,218.7C672,224,768,224,864,202.7C960,181,1056,139,1152,117.3C1248,96,1344,96,1392,96L1440,96V320H0Z"
      />
    </svg>
  );
}

function Home() {
  return (
    <div className="relative text-black min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Top Waves */}
      <div className="absolute top-0 left-0 w-full rotate-180">
        <TopWaves />
      </div>

      {/* Hero Text */}
      <div className="z-10 mt-40 mb-40 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold leading-snug">
          <span className="block">Voices that</span>
          <span className="block text-[#F30133]">Leads</span>
        </h1>
      </div>

      {/* Bottom Waves */}
      <div className="absolute bottom-0 left-0 w-full">
        <BottomWaves />
      </div>
    </div>
  );
}



export default Home;

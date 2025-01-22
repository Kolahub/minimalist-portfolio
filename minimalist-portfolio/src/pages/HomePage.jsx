import { useState, useEffect } from 'react';
import homePageHero from '../assets/images/homepage/desktop/image-homepage-hero@2x.jpg';
import homePageHeroT from '../assets/images/homepage/tablet/image-homepage-hero@2x.jpg';
import homePageHeroM from '../assets/images/homepage/mobile/image-homepage-hero@2x.jpg';
import homePageProfile from '../assets/images/homepage/desktop/image-homepage-profile@2x.jpg';
import homePageProfileT from '../assets/images/homepage/tablet/image-homepage-profile@2x.jpg';
import homePageProfileM from '../assets/images/homepage/mobile/image-homepage-profile@2x.jpg';
import downArrows from '../assets/images/icons/down-arrows.svg';
import downArrowsW from '../assets/images/icons/down-arrowsW.svg';
import BasicBtn from '../components/BasicBtn';

function HomePage() {
  const [imageSrc, setImageSrc] = useState({
    hero: homePageHero,
    profile: homePageProfile,
    arrow: downArrows
  });

  useEffect(() => {
    const updateImageSrc = () => {
      const screenWidth = window.innerWidth;
      // Use functional update to ensure latest state and prevent infinite loops
      setImageSrc(prev => {
        if (screenWidth < 640) {
          return {
            ...prev,
            hero: homePageHeroM,
            profile: homePageProfileM
          };
        } else if (screenWidth < 1024) {
          return {
            ...prev,
            hero: homePageHeroT,
            profile: homePageProfileT
          };
        } else {
          return {
            ...prev,
            hero: homePageHero,
            profile: homePageProfile
          };
        }
      });
    };

    // Initial check and add event listener for resize
    updateImageSrc();
    window.addEventListener('resize', updateImageSrc);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', updateImageSrc);
  }, []); // Removed imageSrc from dependencies to prevent infinite loops

  return (
    <section>
      <div className="sm:relative container mx-auto px-5 md:px-0">
        <div className="">
          <img src={imageSrc.hero} alt="Homepage Hero" className="w-full sm:h-[600px] object-cover" />
        </div>
        <div className="bg-cusVeryLightGrey  sm:w-[575px] lg:w-[445px] sm:absolute sm:left-0 sm:h-[298px] lg:h-[357px] sm:bottom-0 relative">
          <h2 className="font-mainFont font-bold text-h1 sm:w-[498px]  lg:w-[390px] mt-10 sm:mt-14">
            Hey, I’m Ayofe Faheez and I love building beautiful websites
          </h2>
          <button
            className="flex items-center w-[200px] bg-cusDarkBlue hover:bg-cusCyan sm:absolute sm:bottom-0 mt-10 sm:mt-0 transition-all"
            // Use functional updates to preserve other state properties
            onMouseEnter={() => setImageSrc(prev => ({
              ...prev,
              arrow: downArrowsW
            }))}
            onMouseLeave={() => setImageSrc(prev => ({
              ...prev,
              arrow: downArrows
            }))}
          >
            <img src={imageSrc.arrow} alt="arrows" className="bg-inherit brightness-90 p-5" />
            <p className="flex-grow uppercase text-center text-white tracking-widest">about me</p>
          </button>
        </div>
      </div>



      <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 lg:gap-32 container mx-auto mt-32 sm:h-[600px] px-5 md:px-0">
        <img src={imageSrc.profile} alt="" className=''/>

        <div className="w-[350px] h-[617px] relative border-t-2 border-b-2 border-cusLightGrey">
          <div className="absolute top-1/2 -translate-y-1/2">
          <h1 className='capitalize font-mainFont text-h1 font-bold'>about me</h1>
          <p className='font-subFont leading-8 my-6'>I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work.</p>
          <BasicBtn text={"go to portfolio"} to={"portfolio"} />
        </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
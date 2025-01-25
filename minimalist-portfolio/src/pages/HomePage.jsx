import { useState } from 'react';
import homePageHero from '/images/homepage/desktop/image-homepage-hero@2x.jpg';
import homePageHeroT from '/images/homepage/tablet/image-homepage-hero@2x.jpg';
import homePageHeroM from '/images/homepage/mobile/image-homepage-hero@2x.jpg';
import homePageProfile from '/images/homepage/desktop/image-homepage-profile@2x.jpg';
import homePageProfileT from '/images/homepage/tablet/image-homepage-profile@2x.jpg';
import homePageProfileM from '/images/homepage/mobile/image-homepage-profile@2x.jpg';
import downArrows from '/images/icons/down-arrows.svg';
import downArrowsW from '/images/icons/down-arrowsW.svg';
import BasicBtn from '../components/BasicBtn';

/**
 * Renders the HomePage component, which includes a hero section with responsive images,
 * a brief introduction, and a button that changes its icon on hover. The component
 * also features an "About Me" section with a profile image and a description of the
 * developer's skills and interests. The layout adjusts for different screen sizes
 * using responsive design techniques.
 */

function HomePage() {
  // State to manage the source of the arrow image for hover effect
  const [imageSrc, setImageSrc] = useState(downArrows);

  return (
    <section>
      {/* Main container for the hero section with responsive padding */}
      <div className='sm:relative container mx-auto px-5 md:px-0'>
        {/* Hero image with responsive sources for different screen sizes */}
        <div className=''>
          <picture>
            <source media='(min-width: 1024px)' srcSet={homePageHero} />
            <source media='(min-width: 768px)' srcSet={homePageHeroT} />
            <img src={homePageHeroM} alt={'hero pic'} className='w-full sm:h-[600px] object-cover' />
          </picture>
        </div>
        {/* Text and button overlay on the hero image */}
        <div className='bg-cusVeryLightGrey sm:w-[575px] lg:w-[445px] sm:absolute sm:left-0 sm:h-[298px] lg:h-[357px] sm:bottom-0 relative'>
          <h2 className='font-mainFont font-bold text-h1 sm:w-[498px] lg:w-[390px] mt-10 sm:mt-14'>
            Hey, I’m Ayofe Faheez and I love building beautiful websites
          </h2>
          {/* Button with hover effect to change arrow image */}
          <button
            className='flex items-center w-[200px] bg-cusDarkBlue hover:bg-cusCyan sm:absolute sm:bottom-0 mt-10 sm:mt-0 transition-all'
            onMouseEnter={() => setImageSrc(downArrowsW)}
            onMouseLeave={() => setImageSrc(downArrows)}
          >
            <img src={imageSrc} alt='arrows' className='bg-inherit brightness-90 p-5' />
            <p className='flex-grow uppercase text-center text-white tracking-widest'>about me</p>
          </button>
        </div>
      </div>

      {/* About Me section with profile image and description */}
      <div className='flex flex-col sm:flex-row gap-8 sm:gap-16 lg:gap-32 container mx-auto mt-32 sm:h-[600px] px-5 md:px-0'>
        {/* Profile image with responsive sources for different screen sizes */}
        <picture>
          <source media='(min-width: 1024px)' srcSet={homePageProfile} />
          <source media='(min-width: 768px)' srcSet={homePageProfileT} />
          <img src={homePageProfileM} alt={'hero pic'} className='sm:h-full' />
        </picture>

        {/* Text container with border and centered content */}
        <div className='w-[350px] h-[617px] relative border-t-2 border-b-2 border-cusLightGrey'>
          <div className='absolute top-1/2 -translate-y-1/2'>
            <h1 className='capitalize font-mainFont text-h1 font-bold'>about me</h1>
            <p className='font-subFont leading-8 my-6'>
              I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing
              JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. When I’m
              not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work.
            </p>
            {/* Button to navigate to the portfolio page */}
            <BasicBtn text={'go to portfolio'} to={'portfolio'} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
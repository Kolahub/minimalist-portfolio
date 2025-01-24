import { NavLink, useMatch } from 'react-router-dom';
import BasicBtn from './BasicBtn';
import whiteLogo from '../assets/images/whiteLogo.svg';
import github from '../assets/images/icons/github.svg';
import linkedin from '../assets/images/icons/linkedin.svg';
import twitter from '../assets/images/icons/twitter.svg';

/**
 * Footer component renders the footer section of the website.
 * It includes a call-to-action section for contacting, navigation links,
 * and social media icons. The component conditionally renders the contact
 * section based on the current route.
 */
function Footer() {
  // Determine if the current route is the contact page
  const isContactPage = useMatch('contactme');

  return (
    <div>
      {/* Conditionally render the contact section if not on the contact page */}
      {!isContactPage && (
        <section className='mt-24'>
          <div className='container mx-auto px-4 sm:px-0'>
            <div className='flex flex-col sm:flex-row items-center lg:gap-8'>
              <div className='text-center sm:text-start sm:max-w-[350px]'>
                <h2 className='text-h2 font-bold font-mainFont mb-6 sm:mb-0'>
                  Interested in doing a project together?
                </h2>
              </div>

              {/* Divider line */}
              <div className='w-full sm:flex-1 h-px bg-gray-300'></div>

              {/* Contact button */}
              <div className='sm:w-auto w-full text-center'>
                <BasicBtn text='contact me' to='contactme' className='inline-block sm:block' />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer section */}
      <footer className='bg-cusGrayDarkBlue sm:h-20 mt-32 py-14'>
        <div className='container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 h-full'>
          <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-0 h-full'>
            {/* Logo */}
            <img src={whiteLogo} alt='Company logo' />

            {/* Navigation links */}
            <nav>
              <ul className='flex flex-col sm:flex-row text-center sm:text-start'>
                {['home', 'portfolio', 'contact me'].map((text) => (
                  <li key={text} className='py-4 sm:px-4'>
                    <NavLink
                      to={text === 'home' ? '/' : text.toLowerCase().replace(' ', '')}
                      className='text-cusVeryLightGrey uppercase hover:text-cusCyan transition'
                    >
                      {text}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social media icons */}
          <div className='flex gap-4 items-center'>
            <a href='' className='sm:hover:scale-125 transition-all'>
              <img src={github} alt='GitHub icon' />
            </a>
            <a href='' className='sm:hover:scale-125 transition-all'>
              <img src={twitter} alt='Twitter icon' />
            </a>
            <a href='' className='sm:hover:scale-125 transition-all'>
              <img src={linkedin} alt='LinkedIn icon' />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
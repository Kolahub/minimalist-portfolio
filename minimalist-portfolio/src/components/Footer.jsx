import { NavLink } from 'react-router-dom';
import BasicBtn from './BasicBtn';
import whiteLogo from '../assets/images/whiteLogo.svg';
import github from '../assets/images/icons/github.svg';
import linkedin from '../assets/images/icons/linkedin.svg';
import twitter from '../assets/images/icons/twitter.svg';

function Footer() {
  return (
    <div>
      <div className='container mx-auto flex flex-col sm:flex-row items-center'>
        <div className='text-center sm:text-start sm:w-[350px]'>
          <h2 className='text-h2 font-bold font-mainFont mb-10'>Interested in doing a project together?</h2>
        </div>
        <div className='flex-grow mx-4 border-t border-gray-300'></div>
        <div>
          <BasicBtn text='contact me' to='contactme' />
        </div>
      </div>

      <footer className='bg-cusGrayDarkBlue sm:h-20 mt-32 py-14'>
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 h-full">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0 h-full">
          <img src={whiteLogo} alt='' />
          <nav>
            <ul className=' flex flex-col sm:flex-row text-center sm:text-start'>
            {['home', 'portfolio', 'contact me'].map((text) => (
            <li key={text} className='py-4 sm:px-4'>
              <NavLink to={text === 'home' ? '/' : `${text.toLowerCase().replace(' ', '')}`} className={'text-cusVeryLightGrey uppercase hover:text-cusCyan transition'}>
                {text}
              </NavLink>
            </li>
          ))}
            </ul>
          </nav>
          </div>
          <div className="flex gap-4 items-center">
            <a href="" className='sm:hover:scale-125 transition-all '><img src={github} alt="github icon" /></a>
            <a href="" className='sm:hover:scale-125 transition-all'><img src={twitter} alt="twitter icon" /></a>
            <a href="" className='sm:hover:scale-125 transition-all'><img src={linkedin} alt="linkedin icon" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

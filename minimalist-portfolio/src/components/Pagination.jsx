import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import arrowLeft from '../assets/images/icons/arrow-left.svg';
import arrowRight from '../assets/images/icons/arrow-right.svg';

/**
 * Pagination component for navigating between projects.
 * Displays links to the previous and next projects based on the current project ID.
 *
 * @param {Object} props - Component properties
 * @param {Array} props.allProjects - Array of all project objects
 * @param {string} props.currentProjectId - ID of the current project
 */
export default function Pagination({ allProjects, currentProjectId }) {
  // Find the index of the current project
  const currentIndex = allProjects.findIndex((p) => p.id === currentProjectId);
  // Calculate the index of the previous project, wrapping around if necessary
  const prevIndex = (currentIndex - 1 + allProjects.length) % allProjects.length;
  // Calculate the index of the next project, wrapping around if necessary
  const nextIndex = (currentIndex + 1) % allProjects.length;

  // Get the previous and next project objects
  const prevProject = allProjects[prevIndex];
  const nextProject = allProjects[nextIndex];

  return (
    <div className='flex border-t-2 border-b-2 border-cusLightGrey h-[132px] mt-24'>
      {/* Link to the previous project */}
      <NavLink className='w-1/2 border-r-2 border-cusLightGrey flex group transition-all duration-300 hover:bg-gray-50' to={`/portfolio/${prevProject.id}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <div className='mr-auto my-auto'>
          <div className='flex flex-col sm:flex-row items-start sm:items-center gap-3'>
            <img src={arrowLeft} alt='previous project' className='transition-transform duration-300 group-hover:-translate-x-1' />
            <div className='transition-opacity duration-300 group-hover:opacity-75'>
              <h1 className='font-mainFont text-h2 text-start mb-1'>{prevProject.title}</h1>
              <p className='capitalize'>previous project</p>
            </div>
          </div>
        </div>
      </NavLink>

      {/* Link to the next project */}
      <NavLink className='w-1/2 flex group transition-all duration-300 hover:bg-gray-50' to={`/portfolio/${nextProject.id}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <div className='ml-auto my-auto'>
          <div className='flex flex-col-reverse sm:flex-row items-end sm:items-center gap-4'>
            <div className='transition-opacity duration-300 group-hover:opacity-75'>
              <h1 className='font-mainFont text-h2 text-end mb-1'>{nextProject.title}</h1>
              <p className='capitalize text-end'>next project</p>
            </div>
            <img src={arrowRight} alt='next project' className='transition-transform duration-300 group-hover:translate-x-1' />
          </div>
        </div>
      </NavLink>
    </div>
  );
}

// Define prop types for the Pagination component
Pagination.propTypes = {
  allProjects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, // Project ID
      title: PropTypes.string.isRequired, // Project title
    })
  ).isRequired,
  currentProjectId: PropTypes.string.isRequired, // Current project ID
};

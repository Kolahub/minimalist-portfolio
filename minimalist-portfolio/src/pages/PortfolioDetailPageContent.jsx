import { useRouteLoaderData } from 'react-router-dom';
import BasicBtn from '../components/BasicBtn';
import Pagination from '../components/Pagination';

/**
 * Renders the content for the portfolio detail page.
 * Utilizes route data to display details of the current project,
 * including images, title, description, majors, tools, and project background.
 * Provides static previews of the project and a button to visit the website.
 * Includes pagination to navigate through all projects.
 */

function PortfolioDetailPageContent() {
  // Retrieve current project and all projects data from the route loader
  const { currentProject, allProjects } = useRouteLoaderData('project-detail');

  return (
    <section className='container mx-auto px-5 md:px-0'>
      {/* Hero image section with responsive sources */}
      <div className=''>
        <picture>
          <source media='(min-width: 1024px)' srcSet={currentProject.details.image.hero.desktop} />
          <source media='(min-width: 768px)' srcSet={currentProject.details.image.hero.tablet} />
          <img src={currentProject.details.image.hero.tablet} alt={currentProject.title} className='' />
        </picture>
      </div>

      {/* Main content section with project details */}
      <div className='mt-16 sm:mt-24 flex flex-col lg:flex-row gap-16 sm:gap-24 lg:gap-[125px] w-full'>
        {/* Project information and description */}
        <div className='lg:flex-1 flex flex-row lg:flex-col justify-center h-[452px] sm:h-[298px] lg:h-[498px] border-t-2 border-b-2 border-cusLightGrey min-w-0'>
          <div className='flex-1 flex items-center'>
            <div className='sm:flex sm:justify-between lg:block'>
              <div className='sm:w-1/2 lg:w-auto flex gap-8 flex-col'>
                <h1 className='font-mainFont text-h1 font-bold'>{currentProject.title}</h1>
                <p className='sm:hidden lg:block'>{currentProject.description}</p>
                <div>
                  <p className='capitalize text-cusCyan font-semibold'>{currentProject.details.majors.join(' / ')}</p>
                  <p className='uppercase text-cusCyan font-semibold mt-3'>{currentProject.details.tools.join(' / ')}</p>
                </div>
                <div>
                  {/* Button to visit the project's website */}
                  <BasicBtn text='visit website' to='https://manage-web-landing-page.vercel.app/' />
                </div>
              </div>
              <div className='w-1/2 sm:flex hidden lg:hidden h-[200px]'>
                <p className='block my-auto'>{currentProject.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Project background and static previews */}
        <div className='lg:w-[635px] flex-shrink-0'>
          <h1 className='font-mainFont text-h2 capitalize'>project background</h1>
          <p className='mt-8'>{currentProject.details.projectBackground}</p>
          <div className='mt-10'>
            <h1 className='font-mainFont text-h2 capitalize mb-8'>static previews</h1>
            <div className='flex flex-col gap-6'>
              <picture>
                <source media='(min-width: 1024px)' srcSet={currentProject.details.image.previewOne.desktop} />
                <source media='(min-width: 768px)' srcSet={currentProject.details.image.previewOne.tablet} />
                <img src={currentProject.details.image.previewOne.tablet} className='w-full' />
              </picture>

              <picture>
                <source media='(min-width: 1024px)' srcSet={currentProject.details.image.previewTwo.desktop} />
                <source media='(min-width: 768px)' srcSet={currentProject.details.image.previewTwo.tablet} />
                <img src={currentProject.details.image.previewTwo.tablet} className='w-full' />
              </picture>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination component to navigate through projects */}
      <Pagination allProjects={allProjects} currentProjectId={currentProject.id} />
    </section>
  );
}

export default PortfolioDetailPageContent;

// Loader function to fetch project data based on route parameters
export async function Loader({ params }) {
  try {
    const response = await fetch(`${import.meta.env.BASE_URL}data.json`);
    if (!response.ok) throw new Error('Failed to fetch data');

    const allProjects = await response.json();
    const currentProject = allProjects.find((p) => p.id.toString() === params.projectId);

    if (!currentProject) {
      throw new Response('Project Not Found', {
        status: 404,
        statusText: 'Project Not Found',
      });
    }

    return {
      currentProject,
      allProjects,
    };
  } catch (error) {
    throw new Response(error.message || 'Server Error', {
      status: error.status || 500,
      statusText: error.statusText || 'Internal Server Error',
    });
  }
}

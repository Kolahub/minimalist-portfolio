import { useLoaderData } from 'react-router-dom';
import BasicBtn from '../components/BasicBtn';

// Component to display portfolio page content
function PortfolioPageContent() {
  // Fetch data using the loader function
  const data = useLoaderData();

  return (
    <div className=''>
      {/* Iterate over each project in the data array */}
      {data.map((project, i) => (
        <div className={`container mx-auto px-5 md:px-0 mb-12 mt-24 first:mt-0`} key={project.id}>
          <div className={`flex flex-col md:flex-row ${i % 2 === 0 ? '' : 'md:flex-row-reverse'} gap-8 sm:gap-16 lg:gap-32 h-[688px] sm:h-[418px] lg:h-[500px]`}>
            
            {/* Image Container */}
            <div className='sm:my-auto lg:my-0'>
              <picture>
                {/* Responsive image sources for different screen sizes */}
                <source media='(min-width: 1024px)' srcSet={project.image.desktop} />
                <source media='(min-width: 768px)' srcSet={project.image.tablet} />
                <img src={project.image.tablet} alt={project.title} className='sm:h-[314px] lg:h-full' />
              </picture>
            </div>

            {/* Text Content */}
            <div className='w-[350px] min-h-[368px] sm:h-auto relative border-t-2 border-b-2 border-cusLightGrey'>
              <div className='absolute top-1/2 -translate-y-1/2'>
                {/* Project title and description */}
                <h2 className='text-3xl font-bold'>{project.title}</h2>
                <p className='text-gray-600 my-8'>{project.description}</p>
                {/* Button to visit the project */}
                <BasicBtn text={'visit project'} to={`${project.id}`}/>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PortfolioPageContent;

// Loader function to fetch data from a JSON file
export async function Loader() {
  try {
    const response = await fetch(`${import.meta.env.BASE_URL}data.json`);
    // Check if the response is successful
    if (!response.ok) throw new Error('Failed to fetch data');
    return response; // Return parsed data
  // eslint-disable-next-line no-unused-vars
  } catch (error) {
    // Handle errors by throwing a response with status 500
    throw new Response('Could not load data', { status: 500, statusText: "Could not load data" });
  }
}
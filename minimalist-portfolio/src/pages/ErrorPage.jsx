import MainNavigation from '../components/MainNavigation';
import { useRouteError, useNavigate } from 'react-router-dom';

function ErrorPage() {
    // Retrieve the error object from the route
    const error = useRouteError();
    // Hook to programmatically navigate to different routes
    const navigate = useNavigate();
    console.log(error);

    // Determine the status code of the error, default to 500 if not available
    const status = error.status || 500;

    // Default error title and message
    let title = 'An Error Occurred!';
    let msg = error.statusText || 'Something went wrong';

    // Customize title and message for 404 errors
    if (status === 404) {
        title = 'Page Not Found';
        msg = error.statusText || "The page you're looking for doesn't exist.";
    }

    return (
        <>
            {/* Main navigation component */}
            <MainNavigation />
            {/* Main container for the error page */}
            <div className='min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4'>
                <div className='max-w-lg w-full text-center bg-white rounded-2xl shadow-lg p-8 transition-all hover:shadow-xl'>
                    {/* Icon indicating error status */}
                    <div className='flex justify-center mb-8'>
                        <svg className={`w-32 h-32 ${status === 404 ? 'text-purple-500' : 'text-red-500'}`} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            {status === 404 ? (
                                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' fill='currentColor' />
                            ) : (
                                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' fill='currentColor' />
                            )}
                        </svg>
                    </div>

                    <div className='space-y-4'>
                        {/* Animated status code display */}
                        <div className='animate-bounce'>
                            <h1 className='text-5xl font-bold text-gray-800 mb-2'>{status}</h1>
                        </div>
                        {/* Error title and message */}
                        <h2 className='text-3xl font-semibold text-gray-800 mb-4'>{title}</h2>
                        <p className='text-gray-600 text-lg mb-8'>{msg}</p>
                        {/* Button to navigate back to the home page */}
                        <button
                            onClick={() => navigate('/')}
                            className='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-600 transition-colors duration-200'
                        >
                            <svg className='w-5 h-5 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                                />
                            </svg>
                            Return Home
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ErrorPage;
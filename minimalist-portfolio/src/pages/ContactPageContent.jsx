import github from '/images/icons/githubW.svg'
import linkedin from '/images/icons/linkedinW.svg'
import twitter from '/images/icons/twitterW.svg'
import ContactMe from '../components/ContactMe'

function ContactPageContent() {
  return (
    <section>
      {/* Container for the contact section with top and bottom borders */}
      <div className="container mx-auto border-t-2 border-b-2 border-cusLightGrey px-5 md:px-0">
        {/* Flex container for layout adjustment between column and row based on screen size */}
        <div className="flex flex-col lg:flex-row justify-between py-10">
          <div className="">
            {/* Main heading for the contact section */}
            <h1 className='font-mainFont font-bold text-h1 capitalize'>get in touch</h1>
          </div>
          <div className="lg:w-[635px] mt-8 sm:mt-0">
            {/* Description paragraph about the user's current job search status and invitation to connect */}
            <p>
              I’d love to hear about what you’re working on and how I could help. I’m currently looking for a new role and am open to a wide range of opportunities. My preference would be to find a position in a company in London. But I’m also happy to hear about opportunities that don’t fit that description. I’m a hard-working and positive person who will always approach each task with a sense of purpose and attention to detail. Please do feel free to check out my online profiles below and get in touch using the form.
            </p>
            {/* Social media icons with hover effect for scaling */}
            <div className="flex gap-4 mt-8">
              <a href="#" className="hover:scale-125 transition-all"><img src={github} alt="GitHub Profile" /></a>
              <a href="#" className="hover:scale-125 transition-all"><img src={twitter} alt="Twitter Profile" /></a>
              <a href="#" className="hover:scale-125 transition-all"><img src={linkedin} alt="LinkedIn Profile" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact form component */}
      <ContactMe />
    </section>
  )
}

export default ContactPageContent
import github from '../assets/images/icons/githubW.svg'
import linkedin from '../assets/images/icons/linkedinW.svg'
import twitter from '../assets/images/icons/twitterW.svg'
import ContactMe from '../components/ContactMe'

function ContactPageContent() {
  return (
    <section>
      <div className="container mx-auto border-t-2 border-b-2 border-cusLightGrey px-5 md:px-0">
        <div className="flex flex-col lg:flex-row justify-between py-10">
          <div className="">
            <h1 className='font-mainFont font-bold text-h1 capitalize'>get in touch</h1>
          </div>
          <div className="lg:w-[635px] mt-8 sm:mt-0">
            <p>I’d love to hear about what you’re working on and how I could help. I’m currently looking for a new role and am open to a wide range of opportunities. My preference would be to find a position in a company in London. But I’m also happy to hear about opportunites that don’t fit that description. I’m a hard-working and positive person who will always approach each task with a sense of purpose and attention to detail. Please do feel free to check out my online profiles below and get in touch using the form.</p>
            <div className="flex gap-4 mt-8">
              <a href="" className="hover:scale-125"><img src={github} alt="" /></a>
              <a href="" className="hover:scale-125"><img src={twitter} alt="" /></a>
              <a href="" className="hover:scale-125"><img src={linkedin} alt="" /></a>
            </div>
          </div>
        </div>
      </div>

      <ContactMe />
    </section>
  )
}

export default ContactPageContent
import { useState, useRef, useEffect } from 'react';

function ContactMe() {
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const timeoutRef = useRef()

    // Start timeout
    const startTimer = () => {
        timeoutRef.current = setTimeout(() => {
          setErrors({ name: '', email: '', message: '' })
        }, 3000); // 3 seconds
      };

  const formRef = useRef();

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Validation rules using object lookup
  const validations = {
    name: (value) => {
      if (!value.trim()) return 'Name is required';
      if (value.length < 2) return 'Name must be at least 2 characters';
      return '';
    },
    email: (value) => {
      if (!value) return 'Email is required';
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) 
        return 'Invalid email address';
      return '';
    },
    message: (value) => {
      if (!value.trim()) return 'Message is required';
      if (value.length < 10) return 'Message must be at least 10 characters';
      return '';
    }
  };

  const validateField = (name, value) => {
    const error = validations[name] ? validations[name](value) : '';
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    let hasErrors = false;

    // Validate all fields
    Array.from(formData.entries()).forEach(([name, value]) => {
      const error = validations[name]?.(value) || '';
      if (error) hasErrors = true;
      setErrors(prev => ({ ...prev, [name]: error }));
    });

    if (!hasErrors) {
      e.target.submit();
    }

    startTimer()
  };


  return (
    <div className='container mx-auto px-4'>
      <div className='flex flex-col lg:flex-row justify-between py-10 gap-8'>
        <div className='lg:max-w-[445px]'>
          <h1 className='font-mainFont font-bold text-h1 capitalize'>contact me</h1>
        </div>
        
        <div className='lg:w-[635px] w-full mt-8 sm:mt-0'>
          <form 
            ref={formRef}
            action='https://formspree.io/f/xnnjaykl' 
            method='POST' 
            className='space-y-8'
            onSubmit={handleSubmit}
            noValidate
          >
            {/* Name Field */}
            <div className='relative group'>
              <label 
                htmlFor='name' 
                className={`absolute -top-3 left-4 bg-white px-2 text-sm transition-all ${
                  errors.name ? 'text-cusRed' : 'text-cusDarkBlue group-focus-within:text-cusCyan'
                }`}
              >
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                required
                className={`w-full px-6 py-4 border-2 rounded-lg outline-none transition-all placeholder-transparent ${
                  errors.name 
                    ? 'border-cusRed focus:border-cusRed' 
                    : 'border-cusLightGrey focus:border-cusCyan'
                }`}
                placeholder='Jane Appleseed'
                onChange={(e) => validateField('name', e.target.value)}
                aria-describedby="name-error"
                aria-invalid={!!errors.name}
              />
              {errors.name && (
                <p id="name-error" className='text-cusRed text-sm mt-1' role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className='relative group'>
              <label 
                htmlFor='email' 
                className={`absolute -top-3 left-4 bg-white px-2 text-sm transition-all ${
                  errors.email ? 'text-cusRed' : 'text-cusDarkBlue group-focus-within:text-cusCyan'
                }`}
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                required
                className={`w-full px-6 py-4 border-2 rounded-lg outline-none transition-all placeholder-transparent ${
                  errors.email 
                    ? 'border-cusRed focus:border-cusRed' 
                    : 'border-cusLightGrey focus:border-cusCyan'
                }`}
                placeholder='email@example.com'
                onChange={(e) => validateField('email', e.target.value)}
                aria-describedby="email-error"
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <p id="email-error" className='text-cusRed text-sm mt-1' role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div className='relative group'>
              <label 
                htmlFor='message' 
                className={`absolute -top-3 left-4 bg-white px-2 text-sm transition-all ${
                  errors.message ? 'text-cusRed' : 'text-cusDarkBlue group-focus-within:text-cusCyan'
                }`}
              >
                Message
              </label>
              <textarea
                id='message'
                name='message'
                required
                rows='5'
                className={`w-full px-6 py-4 border-2 rounded-lg outline-none transition-all placeholder-transparent resize-none ${
                  errors.message 
                    ? 'border-cusRed focus:border-cusRed' 
                    : 'border-cusLightGrey focus:border-cusCyan'
                }`}
                placeholder='How can I help?'
                onChange={(e) => validateField('message', e.target.value)}
                aria-describedby="message-error"
                aria-invalid={!!errors.message}
              ></textarea>
              {errors.message && (
                <p id="message-error" className='text-cusRed text-sm mt-1' role="alert">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type='submit'
              className='bg-cusDarkBlue hover:bg-cusCyan text-white py-4 px-8 rounded-lg font-semibold uppercase tracking-wider transition-all'
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
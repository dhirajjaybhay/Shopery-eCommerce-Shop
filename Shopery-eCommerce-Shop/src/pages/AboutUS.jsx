import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

function AboutUS() {
  return (
    <div className='pt-28'>
      <div className="shoppingCart">
    <div className="flex gap-2 py-2 items-center">
      <Link to='/'><p>Home</p></Link>
      <p> <MdKeyboardDoubleArrowRight /> </p>
      <Link to='/aboutus'><p>About US</p></Link>

    </div>
    <img src="../assets/img/shoppingCart1.jpg" className="h-[250px] w-full opacity-90 rounded-sm" alt="" />
    </div>
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="" alt="hero" src="../assets/img/contactus.png" />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
     <h1 className='mb-8 text-4xl font-semibold'>Our Story</h1>
      <p className="mb-8 leading-relaxed">Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in India. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
      <p className='mb-8 leading-relaxed'>
      Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
      </p>
    </div>
  </div>
</section>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
    </div>
    <div className="flex flex-wrap -m-2">
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://randomuser.me/api/portraits/men/15.jpg" />
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Holden Caulfield</h2>
            <p className="text-gray-500">UI Designer</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://randomuser.me/api/portraits/men/14.jpg" />
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Henry Letham</h2>
            <p className="text-gray-500">CTO</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://randomuser.me/api/portraits/women/15.jpg" />
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Oskar Blinde</h2>
            <p className="text-gray-500">Founder</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://randomuser.me/api/portraits/men/7.jpg" />
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">John Doe</h2>
            <p className="text-gray-500">DevOps</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://randomuser.me/api/portraits/men/18.jpg" />
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Martin Eden</h2>
            <p className="text-gray-500">Software Engineer</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://randomuser.me/api/portraits/women/12.jpg" />
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Boris Kitua</h2>
            <p className="text-gray-500">UX Researcher</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://randomuser.me/api/portraits/men/1.jpg" />
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Atticus Finch</h2>
            <p className="text-gray-500">QA Engineer</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://randomuser.me/api/portraits/men/12.jpg" />
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Alper Kamu</h2>
            <p className="text-gray-500">System</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://randomuser.me/api/portraits/women/18.jpg" />
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Rodrigo Monchi</h2>
            <p className="text-gray-500">Product Manager</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default AboutUS

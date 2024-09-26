import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
        <p className="text-lg text-center mb-8">
          Welcome to Get Me A Chai! We are dedicated to providing top-notch services and 
          delivering the best experience for our customers. With a team of skilled 
          professionals and a passion for innovation, we strive to make a positive 
          impact in everything we do.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center bg-slate-500 p-6 rounded-lg shadow-md">
            <img
              className="w-24 h-24 rounded-full mb-4"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIW9CqrNFO_NLSla2wFnN3Emq0aJCcFCCbXw&s"
              alt="Mission"
            />
            <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
            <p className="text-center">
              Our mission is to empower our clients with innovative solutions that enhance
              productivity and drive success. We believe in creating value through integrity,
              commitment, and excellence.
            </p>
          </div>

          <div className="flex flex-col items-center bg-slate-500 p-6 rounded-lg shadow-md">
            <img
              className="w-24 h-24 rounded-full mb-4"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm_4GjnNUijiTLge9PrsWzhWKJ86x760BfTw&s"
              alt="Vision"
            />
            <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
            <p className="text-center">
              We envision a world where technology bridges gaps and brings people closer 
              together. Our goal is to be a leader in our industry, setting standards for 
              excellence and innovation.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-center mb-4">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <img
                className="w-24 h-24 rounded-full mb-2"
                src="https://via.placeholder.com/100"
                alt="Team Member"
              />
              <h3 className="text-lg font-semibold">John Doe</h3>
              <p className="text-gray-100">CEO</p>
            </div>

            <div className="flex flex-col items-center">
              <img
                className="w-24 h-24 rounded-full mb-2"
                src="https://via.placeholder.com/100"
                alt="Team Member"
              />
              <h3 className="text-lg font-semibold">Jane Smith</h3>
              <p className="text-gray-100">CTO</p>
            </div>

            <div className="flex flex-col items-center">
              <img
                className="w-24 h-24 rounded-full mb-2"
                src="https://via.placeholder.com/100"
                alt="Team Member"
              />
              <h3 className="text-lg font-semibold">Michael Johnson</h3>
              <p className="text-gray-100">Lead Developer</p>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default About
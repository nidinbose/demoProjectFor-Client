import React from 'react';

const VisitingVisa = () => {
  const countries = [
    "USA", "Canada", "Germany", "France", "Italy", "Spain", "Japan", "Australia",
    "India", "Brazil", "South Korea", "Mexico"
  ];

  return (
    <div className="container mx-auto mt-10 bg-white p-8 border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="flex flex-col space-y-6">
          <h1 className="text-4xl font-extrabold text-gray-800 leading-tight">
            Visiting Visa Consultancy by Country
          </h1>
          <p className="text-lg text-gray-600">
            We offer personalized consultancy services for visiting visas. Choose the country you're interested in, and our experts will assist you in the process.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {countries.map((country, index) => (
              <button
                key={index}
                className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
              >
                {country}
              </button>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="https://visamint.com/blogs/uploads/images/image_750x_5fa59adf133cb.jpg"
            alt="Visiting Visa Consultancy"
            className="max-w-full h-auto "
          />
        </div>
      </div>
    </div>
  );
}

export default VisitingVisa;

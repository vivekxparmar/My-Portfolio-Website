import { useState } from 'react';

const Certifications = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Sample data - replace with your actual certificates
  const certificates = [
    {
      id: 1,
      title: 'C Programming',
      institution: 'Dartmouth College',
      category: 'Programming Language',
      date: 'December 2023',
      imageUrl: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~BYA66UFKWL6B/CERTIFICATE_LANDING_PAGE~BYA66UFKWL6B.jpeg',
      certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/BYA66UFKWL6B?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse'
    },
    {
      id: 2,
      title: 'C++ For C Programmers',
      institution: 'University of California, Santa Cruz',
      category: 'Programming Language',
      date: 'December 2023',
      imageUrl: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~PMJ3UG9C2JEK/CERTIFICATE_LANDING_PAGE~PMJ3UG9C2JEK.jpeg',
      certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/PMJ3UG9C2JEK?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse'
    },
    {
      id: 3,
      title: 'Core Java',
      institution: 'LearnQuest',
      category: 'Programming Language',
      date: 'April 2024',
      imageUrl: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~Z6TNUYCG8FAL/CERTIFICATE_LANDING_PAGE~Z6TNUYCG8FAL.jpeg',
      certificateUrl: 'https://www.coursera.org/account/accomplishments/specialization/Z6TNUYCG8FAL?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Ds12n'
    },
    {
      id: 4,
      title: 'Introduction to Java',
      institution: 'LearnQuest',
      category: 'Programming Language',
      date: 'April 2024',
      imageUrl: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~P399QLMBAV8M/CERTIFICATE_LANDING_PAGE~P399QLMBAV8M.jpeg',
      certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/P399QLMBAV8M?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse'
    },
    {
      id: 5,
      title: 'Introduction to OOP with Java',
      institution: 'LearnQuest',
      category: 'Programming Language',
      date: 'April 2024',
      imageUrl: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~ZS87EN53GTKD/CERTIFICATE_LANDING_PAGE~ZS87EN53GTKD.jpeg',
      certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/ZS87EN53GTKD?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse'
    },
    {
      id: 6,
      title: 'Java Class Library',
      institution: 'LearnQuest',
      category: 'Programming Language',
      date: 'April 2024',
      imageUrl: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~FENPX4A9TYE7/CERTIFICATE_LANDING_PAGE~FENPX4A9TYE7.jpeg',
      certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/FENPX4A9TYE7?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse'
    },
    {
      id: 7,
      title: 'Object-Oriented Hierarchies in Java',
      institution: 'LearnQuest',
      category: 'Programming Language',
      date: 'April 2024',
      imageUrl: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~P2LEQSMRMQQV/CERTIFICATE_LANDING_PAGE~P2LEQSMRMQQV.jpeg',
      certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/P2LEQSMRMQQV?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse'
    },
    {
      id: 8,
      title: 'Machine Learning with Python',
      institution: 'IBM',
      category: 'Data-Science',
      date: 'April 2025',
      imageUrl: 'https://images.credly.com/size/680x680/images/56c60565-e945-4bcd-b8a6-9b2f43e1b0d9/Coursera_20Machine_20Learning_20with_20Python_20V2.png',
      certificateUrl: 'https://www.credly.com/badges/b1e14a22-a675-4751-b170-71a95831a0d8'
    },
    {
      id: 9,
      title: 'Hands-on Introduction to Linux Commands and Shell Scripting',
      institution: 'IBM',
      category: 'Operating System',
      date: 'April 2024',
      imageUrl: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~7V2CSUW38ABP/CERTIFICATE_LANDING_PAGE~7V2CSUW38ABP.jpeg',
      certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/7V2CSUW38ABP?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse'
    },
    {
      id: 10,
      title: 'Introduction to Structured Query Language (SQL)',
      institution: 'University of Michigan',
      category: 'Database',
      date: 'November 2023',
      imageUrl: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~EF9UFFF94LR5/CERTIFICATE_LANDING_PAGE~EF9UFFF94LR5.jpeg',
      certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/EF9UFFF94LR5?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse'
    },
    {
      id: 11,
      title: 'Networking in Google Cloud: Fundamentals',
      institution: 'Google Cloud',
      category: 'Networking',
      date: 'April 2024',
      imageUrl: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~RKZWN5WKDBY7/CERTIFICATE_LANDING_PAGE~RKZWN5WKDBY7.jpeg',
      certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/RKZWN5WKDBY7?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse'
    },
    {
      id: 12,
      title: 'Successful Presentation',
      institution: 'University of Colorado Boulder',
      category: 'Communication',
      date: 'April 2024',
      imageUrl: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~QGYJGQGTDN49/CERTIFICATE_LANDING_PAGE~QGYJGQGTDN49.jpeg',
      certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/QGYJGQGTDN49?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse'
    },
  ];

  const categories = [
    { id: 'all', name: 'All Certificates' },
    { id: 'Data-Science', name: 'Data Science' },
    { id: 'Programming Language', name: 'Programming' },
    { id: 'Networking', name: 'Networking' },
    { id: 'Database', name: 'Database' },
    { id: 'Operating System', name: 'Operating System' },
    { id: 'Communication', name: 'Communication' },
  ];

  const filteredCertificates = activeCategory === 'all' 
    ? certificates 
    : certificates.filter(cert => cert.category === activeCategory);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            My <span className="text-indigo-600">Coursera</span> Certificates
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            12 specialized courses completed from top universities worldwide
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Certificates grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertificates.map((cert) => (
            <div 
              key={cert.id} 
              className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={cert.imageUrl} 
                  alt={cert.title}
                  className="w-full h-full object-contain"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div> */}
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-indigo-600 text-white">
                    {cert.institution}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-gray-500 mb-4 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {cert.date}
                </p>
                <a 
                  href={cert.certificateUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300"
                >
                  View Certificate
                  <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-extrabold text-indigo-600">{certificates.length}</div>
              <div className="mt-2 text-gray-500 font-medium">Certificates</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold text-indigo-600">4</div>
              <div className="mt-2 text-gray-500 font-medium">Universities</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold text-indigo-600">{new Set(certificates.map(c => c.category)).size}</div>
              <div className="mt-2 text-gray-500 font-medium">Categories</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold text-indigo-600">100%</div>
              <div className="mt-2 text-gray-500 font-medium">Completion</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
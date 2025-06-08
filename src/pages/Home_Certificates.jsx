import React from "react";
import { Link } from "react-router-dom";

const certificates = [
  {
    title: "Machine Learning with Python",
    institution: 'IBM',
    date: 'April 2025',
    url: "https://www.credly.com/badges/b1e14a22-a675-4751-b170-71a95831a0d8",
    thumbnail:
      "https://images.credly.com/size/680x680/images/56c60565-e945-4bcd-b8a6-9b2f43e1b0d9/Coursera_20Machine_20Learning_20with_20Python_20V2.png",
  },
  {
    title: "Cloud Computing",
    institution: 'IIT Kharagpur',
    date: 'April 2025',
    url: "https://nptel.ac.in/",
    thumbnail: "cloud_computing_nptel.jpg",
  },
  {
    title: "Networking in Google Cloud: Fundamentals",
    institution: 'Google Cloud',
    date: 'April 2024',
    url: "https://www.coursera.org/account/accomplishments/verify/RKZWN5WKDBY7?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse",
    thumbnail:
      "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~RKZWN5WKDBY7/CERTIFICATE_LANDING_PAGE~RKZWN5WKDBY7.jpeg",
  },
];

export default function Home_Certificates() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-white to-indigo-50">
      <div className="max-w-7xl mx-auto bg-gradient-to-t from-white to-indigo-50">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl text-gray-900 mb-3">
            My Certificates
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
              Here are some certificates from well-known universities
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.slice(0, 3).map((cert, idx) => (
            <div 
              key={cert.id} 
              className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={cert.thumbnail} 
                  alt={cert.title}
                  className="w-full h-full object-contain"
                />
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
                  href={cert.url} 
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
        <div className="text-center mt-12">
          <Link
            to="/certifications"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full transition-colors duration-200 font-medium"
          >
            View All Certificates
          </Link>
        </div>
      </div>
    </section>
  );
}

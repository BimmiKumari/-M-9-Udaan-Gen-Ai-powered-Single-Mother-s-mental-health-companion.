import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import Button from './Button';
 
const Opportunities = () => {
  const [activeTab, setActiveTab] = useState('schemes');

  const schemes = [
    {
      ministry_name: "Ministry of Women and Child Development",
      scheme_name: "Pradhan Mantri Matru Vandana Yojana (PMMVY)",
      scheme_description: "A maternity benefit program that provides financial assistance to pregnant and lactating mothers for the first living child.",
      icon: "https://st.adda247.com/https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2022/05/13172737/All-schemes-of-government-of-india-300x175.png",
      url: "https://wcd.nic.in/schemes/pradhan-mantri-matru-vandana-yojana"
    },
    {
      ministry_name: "Ministry of Rural Development",
      scheme_name: "Deendayal Antyodaya Yojana - National Rural Livelihoods Mission (DAY-NRLM)",
      scheme_description: "Aims to reduce poverty by enabling poor households to access gainful self-employment and skilled wage employment opportunities.",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREpKNCsYILFnsJzSmfXkZbztzqBAWFS0p0iw&s",
      url: "https://aajeevika.gov.in/"
    },
    {
      ministry_name: "Ministry of Skill Development and Entrepreneurship",
      scheme_name: "Pradhan Mantri Kaushal Vikas Yojana (PMKVY)",
      scheme_description: "Enables Indian youth to take up industry-relevant skill training that will help them in securing a better livelihood.",
      icon: "https://www.pmindia.gov.in/wp-content/uploads/2024/09/H20240917166404.jpg",
      url: "https://www.pmkvyofficial.org/"
    },
    {
      ministry_name: "Ministry of Housing and Urban Affairs",
      scheme_name: "Pradhan Mantri Awas Yojana - Urban (PMAY-U)",
      scheme_description: "Addresses urban housing shortage among the EWS/LIG and MIG categories including the slum dwellers.",
      icon: "https://i0.wp.com/page3news.in/wp-content/uploads/2023/03/CM-Photo-01-dt.-06-March-2023.jpeg?fit=1229%2C705&ssl=1",
      url: "https://pmaymis.gov.in/"
    },
    {
      ministry_name: "Ministry of Health and Family Welfare",
      scheme_name: "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (AB-PMJAY)",
      scheme_description: "Provides health insurance coverage of Rs. 5 lakhs per family per year for secondary and tertiary care hospitalization.",
      icon: "https://www.pmindia.gov.in/wp-content/uploads/2024/09/H20240917166404.jpg",
      url: "https://pmjay.gov.in/"
    }
  ];

  const workshops = [
    {
      organization: "Single Mothers Empowerment Foundation",
      scheme_name: "Financial Literacy Workshop",
      workshop_description: "Learn essential financial management skills, budgeting techniques, and investment strategies tailored for single mothers.",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ9cuDJmKrIaXzAXZoLsDD2rfQZqQV9H9kfA&s",
      url: "https://www.singlemothersempowerment.org/workshops/financial-literacy"
    },
    {
      organization: "Women's Entrepreneurship Initiative",
      scheme_name: "Small Business Startup Workshop",
      workshop_description: "A comprehensive guide to starting and running a small business, including business planning, marketing, and funding options.",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrKHr0Af6La3sx7Q0uo4dWLJ-RFRHebfmhSfFHb4AYFOTC5gx7UppTKtGpPvoZd8MphMw&usqp=CAU",
      url: "https://www.womenentrepreneurship.org/workshops/small-business-startup"
    },
    {
      organization: "Parenting Skills Network",
      scheme_name: "Single Parent Coaching Workshop",
      workshop_description: "Develop effective parenting strategies, learn to balance work and family life, and connect with other single parents for support.",
      icon: "https://staticimg.insurancedekho.com/strapi/Single_Parents_1_e71d293f37.webp?updated_at=2024-10-01T09:10:14.805Z",
      url: "https://www.parentingskillsnetwork.org/workshops/single-parent-coaching"
    },
    {
      organization: "Career Advancement for Women",
      scheme_name: "Professional Development Workshop",
      workshop_description: "Enhance your career prospects with sessions on resume building, interview skills, networking, and workplace communication.",
      icon: "https://staticimg.insurancedekho.com/strapi/Single_Parents_1_e71d293f37.webp?updated_at=2024-10-01T09:10:14.805Z",
      url: "https://www.careeradvancementforwomen.org/workshops/professional-development"
    },
    {
      organization: "Healthy Living Initiative",
      scheme_name: "Self-Care and Wellness Workshop",
      workshop_description: "Learn stress management techniques, healthy lifestyle habits, and self-care practices to maintain physical and mental well-being.",
      icon: "https://i.ytimg.com/vi/7NeKseRAaY4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA8JTT5t3hB6oZfNQy5sPMypt7vWg",
      url: "https://www.healthylivinginitiative.org/workshops/self-care-wellness"
    }
  ];

  const jobs = [
    { 
      company: "FlexJobs Inc.",
      scheme_name: "Remote Customer Service Representative", 
      scheme_description: "Flexible hours, work from home opportunity perfect for single mothers.",
      url: "https://i.ytimg.com/vi/7NeKseRAaY4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA8JTT5t3hB6oZfNQy5sPMypt7vWg",
      icon: "https://example.com/icons/customer-service.png"
    },
    { 
      company: "MomCorps",
      scheme_name: "Part-time Administrative Assistant", 
      scheme_description: "20 hours per week, flexible schedule, family-friendly policies.",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNRdltDtonPammiqxobV0R1c-s9F-qSomLww&s",
      icon: "https://example.com/icons/administrative.png"
    },
    { 
      company: "WorkingMother.com",
      scheme_name: "Freelance Content Writer", 
      scheme_description: "Write articles on parenting and work-life balance. Set your own hours.",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRemxYqU98ri_Gq8GRZlCMFHFDPPx-yH7ZoFg&s",
      icon: "https://example.com/icons/content-writing.png"
    },
  ];

  const renderContent = () => {
    let data = [];
    switch (activeTab) {
      case 'schemes':
        data = schemes;
        break;
      case 'workshops':
        data = workshops;
        break;
      case 'jobs':
        data = jobs;
        break;
      default:
        return null;
    }

    return (
      <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {data.map((item, index) => (
          <div
            key={index}
            className="transition-transform transform hover:scale-105 mt-20 bg-white border border-gray-200 rounded-lg shadow"
          >
            <div className="flex flex-row p-5">
            {item.organization && (
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ8zti9Gycb7BjG2xS8Asf08K0m_ry_daVFjbc7NIbNg&s"
                  alt="Organization Emblem"
                  className="w-10 h-10"
                />
              )}
              <div className="ml-4">
                <h2 className="text-md text-dblue font-semibold">
                  {item.ministry_name || item.organization || item.company}
                </h2>
              </div>
            </div>
            <div className="pl-5">
              <img
                src={item.icon}
                alt="Scheme Icon"
                className="mt-2 h-44 w-[500px] object-contain"
              />
              <div className="mt-2 pt-2 pb-2 mb-2 pd-2">
                <a href={item.url}>
                  <h5 className="pt-2 pb-2 mb-2 text-xl font-bold tracking-tight text-dblue">
                    {item.scheme_name}
                  </h5>
                </a>
                <p className="pt-2 pb-2 pd-2 mb-3 font-normal text-dblue">
                  {item.scheme_description}
                </p>
                <a
                  href={item.url}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-dblue  rounded-lg "
                >
                  Details
                  <ChevronRight className="w-3.5 text-dblue h-3.5 ms-2" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen  p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-white">Resources for Single Mothers</h1>
      <div className="flex space-x-1 rounded-xl  p-1 mb-8">
        {['Schemes', 'Workshops', 'Jobs'].map((category) => (
          <Button
            key={category}
            variant={activeTab === category.toLowerCase() ? "default" : "ghost"}
            className="w-full bg-[#00FFFF] text-white rounded-lg py-2.5 text-sm font-medium leading-5"
            onClick={() => setActiveTab(category.toLowerCase())}
          >
            {category}
          </Button>
        ))}
      </div>
      {renderContent()}
    </div>
  );
};

export default Opportunities;
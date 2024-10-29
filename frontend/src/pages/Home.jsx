import React, { useEffect ,useState } from 'react';
import { Link, useLocation, matchPath } from "react-router-dom";
import { MdOnlinePrediction } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import '../assets/css/Home.css';
import AudioStories from "../components/mentalhealthscore/AudioStories"
import Quiz from "../components/mentalhealthscore/Quiz"
import SearchWeb from '../components/core/Search/SearchWeb/SearchWeb';
import { GrTechnology } from "react-icons/gr";
import { FaFileMedicalAlt } from "react-icons/fa";
import { apiConnector } from "../services/apiconnector";
import { useSelector } from "react-redux";
import cardpic1 from "../assets/Images/cardpic1.jpg"
import cardpic2 from "../assets/Images/cardpic2.jpg"
import cardpic3 from "../assets/Images/cardpic3.jpg"
import HighlightText from "../components/core/HomePage/HighlightText";
import { categories } from "../services/apis";
function Home() {
  const { user } = useSelector((state) => state.profile)
  const [subLinks, setSubLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const [language, setLanguage] = useState("english");

  const toggleLanguage = () => {
    setLanguage(prevLanguage => {
      if (prevLanguage === "english") return "hindi";
      if (prevLanguage === "hindi") return "kannada";
      return "english";
    });
  };
  const fetchSubLinks = async () => {
    (async () => {
      setLoading(true);
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API);
        if (res) {
          setSubLinks(res.data.data);
        }
      } catch (error) {
        console.log("Could not fetch Categories.", error);
      }
      setLoading(false);
    })();
  };

  useEffect(() => {
    fetchSubLinks();
  }, []);

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };
  return (
    <div>
    <div className='home ml-0 flex flex-col'>
    <div className="relative flex flex-col">
    
    <button onClick={toggleLanguage} className=' w-44 h-8 ml-10 mt-12 '>
    {language === "english" 
    ? "हिंदी / ಕನ್ನಡ" 
    : language === "hindi" 
    ? "English / ಕನ್ನಡ" 
    : "English / हिंदी"}
  </button>
    
    <div className="sticky top-2 fit  mt-6 ml-10  ">
    <h3 className="relative text-2xl mt-1font-semibold text-caribbeangreen-5 bg-blue-900 p-4 rounded-lg shadow-lg animate-border">Hey {user?.firstname}, {language === "english" 
  ? "Check your Mental Health Score" 
  : language === "hindi" 
  ? "अपना मानसिक स्वास्थ्य स्कोर जांचें" 
  : "ನಿಮ್ಮ ಮಾನಸಿಕ ಆರೋಗ್ಯವನ್ನು ಪರೀಕ್ಷಿಸಿ"}
</h3>
    <Quiz />    
    </div>
    </div>
     <div className='Outerdiv text-white mr-10 '>
      
     <AudioStories/>
       <div className='Container '>
         <div className='sub1 text-4xl '>
         <HighlightText 
       text={
    language === "english" 
      ? "Uncover the Resources featured by associated NGO."
      : language === "hindi" 
      ? "हमारे एनजीओ के माध्यम से आपके लिए उपलब्ध संसाधनों की खोज करें।"
      : "ನಮ್ಮ ಎನ್‌ಜಿಯೋ ಮೂಲಕ ನಿಮಗೆ ಲಭ್ಯವಿರುವ ಸಂಪನ್ಮೂಲಗಳನ್ನು ಪತ್ತೆಹಚ್ಚಿ."
      }
      />

         </div>
         <div className='z-20 mt-6 mb-6'>
            <SearchWeb
                  searchOpen={searchOpen}
                  setSearchOpen={setSearchOpen}
                  subLinks={subLinks}
             />
         </div> 
       </div>
       {/*Card */}
       <div className="cardcollection z-10  shadow-caribbeangreen-25 shadow-inner drop-shadow-md">
              <div className="Card hover:scale-110 transform transition-transform duration-300"> 
                 <div className="cardhead1">
                     <div className="heading">{language === "english" 
                     ? "Medical Care" 
                     : language === "hindi" 
                     ? "चिकित्सा देखभाल" 
                     : "ವೈದ್ಯಕೀಯ ಸೇವೆ"}
                 </div>
                     <FaFileMedicalAlt style={{width:"150",height:"60",color:"white",marginTop:"30",marginRight:"10"}}/>
                 </div>
                 <div className="cardbody relative">
                  <div className="Card_container  z-20">
                   <img src={cardpic1} alt="Not loaded"  className='rounded-b-lg '/> 
                    
                  </div>
                  <div className="absolute z-30 top-44 flex flex-col items-center bg-white w-5.5/6 left-3 right-3 rounded-lg p-4">
                         <h4 className='text-richblack-200 flex gap-3 ml-0'>{language === "english" 
                            ? "AI-Powered" 
                            : language === "hindi" 
                            ? "एआई-संचालित" 
                            : "ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆ ನಿರ್ವಹಿತ"}
                         </h4>
                         <button className='mt-4'><Link to="/labs">Get medical tests</Link> </button>
                  </div>
                 </div>
              </div>
              <div className="Card hover:scale-110 transform transition-transform duration-300"> 
                 <div className="cardhead2">
                     <div className="heading">{language === "english" 
                         ? "Toxic Free Community" 
                         : language === "hindi" 
                         ? "विषमुक्त समुदाय" 
                         : "ವಿಷರಹಿತ ಸಮುದಾಯ"}
                     </div>
                     <FaPeopleGroup style={{width:"190",height:"110",color:"white",marginTop:"18",marginRight:"10"}}/>
                 </div>
                 <div className="cardbody">
                 <div className="Card_container">
                    <img src={cardpic2} alt="Not loaded" className='rounded-b-lg'/> 
                   
                  </div>
                  <div className="absolute z-30 top-44 flex flex-col items-center bg-white w-5.5/6 left-3 right-3 rounded-lg p-4">
                         <h4 className='text-richblack-200 flex gap-3 ml-0'>{language === "english" 
                                      ? "AI-Powered" 
                                      : language === "hindi" 
                                      ? "एआई-संचालित" 
                                      : "ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆ ನಿರ್ವಹಿತ"}
                                      </h4>
                         <button className='mt-4'><Link to="/community">Join Community</Link> </button>
                  </div>
                 </div>
              </div>
              <div className="Card hover:scale-110 transform transition-transform duration-300"> 
                 <div className="cardhead3">
                    <div className="heading">{language === "english" 
                       ? "Government Beneficiaries" 
                       : language === "hindi" 
                       ? "सरकारी लाभार्थी" 
                       : "ಸರ್ಕಾರಿ ಲಾಭಾಂಶಿಗಳು"}
                    </div>
                    <GrTechnology style={{width:"180",height:"90",color:"white",marginTop:"20",marginRight:"5"}}/>
                 </div>
                 <div className="cardbody">
                 <div className="Card_container">
                    <img src={cardpic3} alt="Not loaded" className='rounded-b-lg'/> 
                    
                  </div>
                  <div className="absolute z-30 top-44 flex flex-col items-center bg-white w-5.5/6 left-3 right-3 rounded-lg p-4">
                         <h4 className='text-richblack-200 flex gap-3 ml-0'>Online<MdOnlinePrediction  className='text-caribbeangreen-400 text-2xl mt-0' /></h4>
                    
                         <button className='mt-4'><Link to="/community">Find Opportunities</Link> </button>
                  </div>
                 </div>
              </div>
      </div>
     </div>
    
   </div>
    

    </div>
  )
}

export default Home
import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import Tests from "./test";
import { MdFilterAlt, MdArrowBack } from "react-icons/md";


export default function Hospital() {
  
  const [sliderValue, setSliderValue] = useState(600);
  const [botResponse, setBotResponse] = useState("");
  
  const [selectedLocation, setSelectedLocation] = useState("");
  
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCardData, setFilteredCardData] = useState([]);
  const [testDetails, setTestDetails] = useState({});

 
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const [query, setQuery] = useState("");

  const [selectedTests, setSelectedTests] = useState([]);

  const goBack = () => {
    window.history.back(); 
  };


  const handleCheckboxChange = (event) => {
    const { checked, value } = event.target;
    if (checked) {
      setSelectedTests((prevSelectedTests) => [...prevSelectedTests, value]);
    } else {
      setSelectedTests((prevSelectedTests) =>
        prevSelectedTests.filter((test) => test !== value)
      );
    }
    console.log("Selected tests:", selectedTests);
  };

  const cardData = Tests;

  const handleSliderChange = (event) => {
    setSliderValue(parseInt(event.target.value));
  };

  
  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const [isChatVisible, setIsChatVisible] = useState(false);

  const toggleChatVisibility = () => {
    setIsChatVisible(!isChatVisible);
  };

  const fetchData = async (query, setBotResponse) => {
    try {
      const response = await axios.post("http://localhost:4000/test", {
        prompt_2: query,
      });
      const responseData = response.data;
      const botResponseData = responseData.result;
      setBotResponse(botResponseData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  const [isEnglish, setIsEnglish] = useState(false);


  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
  };

  return (
    <>
      <div className=" flex text-dblue">
        <div
          className={`border-dashed border-r border-[#00FFFF] w-[30%] h-screen md:flex hidden flex-col items-center gap-6 my-10 over ${
            isFilterVisible ? "block" : "hidden"
          }`}
        >
          
          <div className="bg-[#00FFFF] rounded-md flex h-[6rem] flex-col mt-10">
            <h1 className="flex justify-center font-semibold">Price</h1>
            <div className="mt-1 max-w-xl mx-auto w-60 px-6">
              <input
                id="range"
                type="range"
                className="block w-full py-2 text-gray-700 bg-white border border-gray-300 rounded-md"
                value={sliderValue}
                onChange={handleSliderChange}
                min={300} 
                max={500} 
              />
              <div className="flex justify-between text-xs -mt-2">
                <span>₹ 300</span>
                <span>₹ 500</span>
              </div>
            </div>
          </div>
          <div className="bg-[#00FFFF] rounded-md flex flex-col h-[6rem] w-60">
            <h1 className="flex justify-center h-8 font-semibold">Location</h1>
            <div className="mt-1 max-w-xl pb-2 mx-auto w-[13rem] h-[3rem] px-6 text-xs">
              <select
                id="location"
                value={selectedLocation}
                onChange={handleLocationChange}
                className="block w-full py-1 text-gray-700 bg-[#00FFFF] border border-gray-300 rounded-md"
              >
                <option value="">Select location</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Kolkata">Kolkata</option>
              </select>
            </div>
          </div>
          <div className="bg-[#00FFFF] rounded-md flex flex-col h-auto w-60 p-4">
            <h1 className="flex justify-center font-semibold h-8">
              {isEnglish ? "Medical Test" : "चिकित्सा परीक्षण"}
            </h1>
            <div className="mt-4">
              <input
                type="checkbox"
                id="test1"
                name="test1"
                value="Comprehensive Metabolic Panel (CMP)"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="test1">
                {isEnglish ? "Comprehensive Metabolic Panel (CMP)" : "समग्र उपाहार गतिकी आयोजित (सीएमपी)"}
              </label>
              <br />

              <input
                type="checkbox"
                id="test2"
                name="test2"
                value="Complete Blood Count (CBC)"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="test2">
                {isEnglish ? "Complete Blood Count (CBC)" : "पूर्ण रक्त गणना (सीबीसी)"}
              </label>
              <br />

              <input
                type="checkbox"
                id="test3"
                name="test3"
                value="Lipid Profile"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="test3">
                {isEnglish ? "Lipid Profile" : "लिपिड प्रोफाइल"}
              </label>
              <br />

              <input
                type="checkbox"
                id="test4"
                name="test4"
                value="Liver Panel"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="test4">
                {isEnglish ? "Liver Panel" : "जिगर पैनल"}
              </label>
              <br />

              <input
                type="checkbox"
                id="test5"
                name="test5"
                value="Thyroid Panel"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="test5">
                {isEnglish ? "Thyroid Panel" : "थायराइड पैनल"}
              </label>
              <br />

              <input
                type="checkbox"
                id="test6"
                name="test6"
                value="Hemoglobin A1c"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="test6">
                {isEnglish ? "Hemoglobin A1c" : "हेमोग्लोबिन ए1सी"}
              </label>
              <br />

              <input
                type="checkbox"
                id="test7"
                name="test7"
                value="Urinalysis"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="test7">
                {isEnglish ? "Urinalysis" : "मूत्राघात"}
              </label>
              <br />

              <input
                type="checkbox"
                id="test8"
                name="test8"
                value="Blood Glucose Test"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="test8">
                {isEnglish ? "Blood Glucose Test" : "रक्त ग्लूकोज परीक्षण"}
              </label>
              <br />

              <input
                type="checkbox"
                id="test9"
                name="test9"
                value="C-Reactive Protein (CRP)"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="test9">
                {isEnglish ? "C-Reactive Protein (CRP)" : "सी-प्रतिक्रियात्मक प्रोटीन (सीआरपी)"}
              </label>
              <br />

              <input
                type="checkbox"
                id="test10"
                name="test10"
                value="Prothrombin Time (PT)"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="test10">
                {isEnglish ? "Prothrombin Time (PT)" : "प्रोथ्रोम्बिन समय (पीटी)"}
              </label>
              <br />

              <input
                type="checkbox"
                id="test11"
                name="test11"
                value="Activated Partial Thromboplastin Time (APTT)"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="test11">
                {isEnglish ? "Activated Partial Thromboplastin Time (APTT)" : "सक्रिय आंशिक थ्रॉम्बोप्लास्टिन समय (एपीटीटी)"}
              </label>
              <br />
            </div>
          </div>
        </div>
        <div className="flex flex-col mx-auto">
          <div className="self-center">
            <form className="flex justify-center">
              <input
                className="peer w-40 p-2 rounded-md outline-none text-sm text-gray-700 pr-2 m-4"
                type="text"
                id="search"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder={isEnglish ? "Search something.." : "कुछ खोजें..."}
              />
            </form>
            <div className="container mx-auto mt-10 flex justify-around px-2 md:gap-x-4 gap-y-3 flex-wrap">
              {cardData
                .filter(
                  (card) => parseInt(card.price) <= sliderValue 
                )
                .filter((card) => {
                  
                  const searchTermLower = searchTerm.toLowerCase();
                  return (
                    card.test_name?.toLowerCase().includes(searchTermLower) ||
                    card.location?.toLowerCase().includes(searchTermLower)
                  );
                })
                .filter((card) => {
                  
                  return (
                    selectedLocation === "" ||
                    card.location === selectedLocation
                  );
                })
                .filter((card) => {
                  
                  return (
                    selectedTests.length === 0 ||
                    Object.values(card).some((value) => {
                      if (Array.isArray(value)) {
                        return value.some((test) =>
                          selectedTests.includes(test)
                        );
                      } else {
                        return selectedTests.includes(value);
                      }
                    })
                  );
                })

                .map((card, index) => (
                  <Card
                    key={index}
                    image={card.image_link}
                    name={card.test_name}
                    location={card.location}
                    
                    id={card.test_id}
                    cost={card.price}
                  />
                ))}
              {console.log("Card:", Card)};
            </div>
          </div>
        </div>
     

        
        
      </div>
      <button
        onClick={goBack}
        className="absolute top-4 left-4"
      >
        <MdArrowBack size={40} />
      </button>
      <button
        onClick={toggleLanguage}
        className="absolute right-20 top-16 px-3 py-1 rounded bg-gray-200 text-gray-800 mt-2 font-semibold"
      >
        {isEnglish === true ? "हिंदी" : "English"}
      </button>
    </>
  );
}
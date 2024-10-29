import React from "react"
import ContactDetails from "../components/ContactPage/ContactDetails"
import ContactForm from "../components/ContactPage/ContactForm"
import { BiArrowBack } from "react-icons/bi"
import { Link } from "react-router-dom"
const Contact = () => {
  return (
    <div className="bg-[#00FFFF]" >
      <div className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row">
       
        <div className="lg:w-[40%] ">
          <ContactDetails />
          <Link to="/">
              <button className="flex items-center gap-x-2 ml-8">
                <BiArrowBack /> Back To Home
              </button>
            </Link>
        </div>
        

        <div className="lg:w-[60%]">
          <ContactForm />
        </div>
      </div>
      
     
    </div>
  )
}

export default Contact
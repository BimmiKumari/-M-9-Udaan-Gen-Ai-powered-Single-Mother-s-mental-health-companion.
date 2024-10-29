import { useEffect, useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs"
import { useSelector } from "react-redux"
import { Link, matchPath, useLocation } from "react-router-dom"
import { FiLogIn } from "react-icons/fi";
import logo from "../../assets/Images/logo.png"
import { NavbarLinks } from "../../data/navbar-links"
import { apiConnector } from "../../services/apiconnector"
import { categories } from "../../services/apis"
import { ACCOUNT_TYPE } from "../../utils/constants"
import ProfileDropdown from "../core/Auth/ProfileDropDown"
import { FaCartArrowDown } from "react-icons/fa6";
import Nammasakhi from "../../assets/Images/nammasakhi.png"
import '../../assets/css/Home.css'

function Navbar() {
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const { totalItems } = useSelector((state) => state.cart)
  const location = useLocation()

  const [subLinks, setSubLinks] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API)
        setSubLinks(res.data.data)
      } catch (error) {
        console.log("Could not fetch Categories.", error)
      }
      setLoading(false)
    })()
  }, [])


  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }

  return (
    <div
      className={`flex h-14 items-center justify-center border-b-[1px] border-b-black smmedianavbar ${
        location.pathname !== "/" ? "bg-black" : ""
      } transition-all duration-200`}
    >
      <div className="flex  max-w-maxContent items-center justify-between ">
        <div className="mt-8">
        <Link to="/">
          <img src={logo} alt="Logo" width={200} height={40} loading="lazy" />
        </Link>
        </div>
        <div className="text-white w-72 mt-9 ml-10 font-bold">
         <a href="http://localhost:8501" target="_blank" rel="noopener noreferrer" className="flex flex-row">
          <img src={Nammasakhi} alt="not loaded" width="48px" height="8px"/>
           Namma-Sakhi Gen AI
          </a>
        </div>
        
        <nav className=" md:block ">
          <ul className="flex flex-row  mt-5 text-white font-semibold">
          
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <>
                    <div
                      className={`group relative flex cursor-pointer items-center gap-1 ${
                        matchRoute("/catalog/:catalogName")
                          ? "text-yellow-25"
                          : "text-white"
                      }`}
                    > 
                      <div className="flex flex-row px-5 gap-1">
                        <div className=" mt-1 ">{link.icon}</div>
                        <p className="font-bold">{link.title}</p>
                      </div>
                      <BsChevronDown />
                      <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                        <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
                        {loading ? (
                          <p className="text-center">Loading...</p>
                        ) : (subLinks && subLinks.length) ? (
                          <>
                            {subLinks
                              ?.filter(
                                (subLink) => subLink?.courses?.length > 0
                              )
                              ?.map((subLink, i) => (
                                <Link
                                  to={`/catalog/${subLink.name
                                    .split(" ")
                                    .join("-")
                                    .toLowerCase()}`}
                                  className="rounded-lg bg-transparent py-4 pl-4 text-black hover:bg-tealbg hover:text-white"
                                  key={i}
                                >
                                  <p>{subLink.name}</p>
                                </Link>
                              ))}
                          </>
                        ) : (
                          <p className="text-center">No Courses Found</p>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link to={link?.path}>
                    <p
                      className={`${
                        matchRoute(link?.path)
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    > 
                    <div className="flex flex-row px-5 gap-1">
                      <div className="mt-1 ">
                      {link.icon}
                      </div>
                      <div className="font-bold ">
                      {link.title}
                      </div>
                      </div>
                      
                     
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
       
        <div className=" items-center gap-x-4 md:flex smmediaprofile">
          {user && user?.accountType !== ACCOUNT_TYPE.NGOSUPPORT && (
            <Link to="/dashboard/cart" className="relative">
              <FaCartArrowDown className="text-2xl font-semibold text-richblack-100" />
              {totalItems > 0 && (
                <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
                  {totalItems}
                </span>
              )}
            </Link>
          )}
          {token === null && (
            <Link to="/login">
              <button className="rounded-[8px] border px-[12px] py-[4px]">
                Log in
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button className="rounded-[8px] border  px-[12px] py-[4px] flex ">
               Sign up <FiLogIn className="mt-[5px]"/>
              </button>
            </Link>
          )}
          {token !== null && <ProfileDropdown />}
        </div>
      </div>
    </div>
  )
}

export default Navbar
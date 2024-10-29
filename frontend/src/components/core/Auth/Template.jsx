import { FcGoogle } from "react-icons/fc"
import { useSelector } from "react-redux"
import LoginForm from "./LoginForm"
import divlogo from "../../../assets/Images/divlogo.png"
import SignupForm from "./SignupForm"
import giphy2 from "../../../assets/Images/giphy2.gif"
function Template({ title, description1, description2, image, formType }) {
  const { loading } = useSelector((state) => state.auth)

  return (
    <div className="grid bg-white min-h-[calc(100vh-3.5rem)] mt-2 place-items-center">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="mx-auto  flex w-11/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12">
          <div className="mx-auto w-11/12 max-w-[450px] md:mx-0">
            <h1 className="text-[1.875rem] mt-10 font-bold leading-[2.375rem] text-dblue">
              {title}
            </h1>
            <p className="mt-4 text-[1.125rem] leading-[1.625rem]">
              <span className="text-green font-bold">{description1}</span>{" "}
              <span className=" font-bold  text-green">
                {description2}
              </span>
            </p>
            {formType === "signup" ? <SignupForm /> : <LoginForm />}
          </div>
          <div className="relative mx-auto mt-28 w-11/12 max-w-[450px] md:mx-0">
            <div className="absolute ml-72 z-10 w-36 h-20 bg-white">
              
            </div>
            <img
              src={giphy2}
              alt="SINGLEMOTHERs"
              width={558}
              height={504}
              loading="lazy"
             className="absolute -top-4 h-[408px] right-4 -z-0"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Template
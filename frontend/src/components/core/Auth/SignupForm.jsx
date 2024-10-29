import { useState } from "react"
import { toast } from "react-hot-toast"
import {  AiFillCheckCircle, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { sendOtp } from "../../../services/operations/authAPI"
import { setSignupData } from "../../../slices/authSlice"
import { ACCOUNT_TYPE } from "../../../utils/constants"
import Tab from "../../common/Tab"
import { MdDoNotDisturbOn } from "react-icons/md";
function SignupForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.SINGLEMOTHER)
  const [validation, setValidation] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const { firstname, lastname, email, password, confirmPassword } = formData
  const uppercaseRegExp = /(?=.*?[A-Z])/;
  const lowercaseRegExp = /(?=.*?[a-z])/;
  const digitsRegExp = /(?=.*?[0-9])/;
  const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
  const minLengthRegExp = /.{6,}/;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    if(e.target.value.length === 0 ){
      setValidation(false)
    }else{
      setValidation(true)
    }
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      toast.error("Passwords Do Not Match");
      setFormData({
        password: "",
        confirmPassword: "",
      });
      return
    }
    const uppercasePassword = uppercaseRegExp.test(password);
    const lowercasePassword = lowercaseRegExp.test(password);
    const digitsPassword = digitsRegExp.test(password);
    const specialCharPassword = specialCharRegExp.test(password);
    const minLengthPassword = minLengthRegExp.test(password);

    if (!minLengthPassword) {
      setFormData({
        password: "",
        confirmPassword: "",
      });
      return toast.error("Password Too Short");
    } else if (!uppercasePassword) {
      setFormData({
        password: "",
        confirmPassword: "",
      });
      return toast.error("Atleast have one Uppercase");
    } else if (!lowercasePassword) {
      setFormData({
        password: "",
        confirmPassword: "",
      });
      return toast.error("Atleast have one Lowercase");
    } else if (!digitsPassword) {
      setFormData({
        password: "",
        confirmPassword: "",
      });
      return toast.error("Atleast have one digit");
    } else if (!specialCharPassword) {
      setFormData({
        password: "",
        confirmPassword: "",
      });
      return toast.error("Atleast have one special charater");
    }
    const signupData = {
      ...formData,
      accountType,
    }
    dispatch(setSignupData(signupData))
    dispatch(sendOtp(formData.email, navigate))

    
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
    })
    setAccountType(ACCOUNT_TYPE.SINGLEMOTHER)
  }

  
  const tabData = [
    {
      id: 1,
      tabName: "SINGLEMOTHER",
      type: ACCOUNT_TYPE.SINGLEMOTHER,
    },
    {
      id: 2,
      tabName: "NGOSUPPORT",
      type: ACCOUNT_TYPE.NGOSUPPORT,
    },
  ];
  const ValidationData = [
    {
      id: 1,
      name: "one lowercase charater",
      regx: lowercaseRegExp,
    },
    {
      id: 2,
      name: "one special charater",
      regx: specialCharRegExp,
    },
    {
      id: 3,
      name: "one uppercase charater",
      regx: uppercaseRegExp,
    },
    {
      id: 4,
      name: "8 character minimum",
      regx: minLengthRegExp,
    },
    {
      id: 5,
      name: "one number",
      regx: digitsRegExp,
    },
  ];

  return (
    <div onClick={(e)=>e.stopPropagation()}>
     
      <Tab tabData={tabData} field={accountType} setField={setAccountType} />
     
      <form onSubmit={handleOnSubmit} className="flex w-full flex-col gap-y-4">
        <div className="flex gap-x-4">
          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-dblue">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstname"
              value={firstname}
              onChange={handleOnChange}
              placeholder="Enter first name"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem]  p-[12px] text-dblue"
            />
          </label>
          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-dblue">
              Last Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastname"
              value={lastname}
              onChange={handleOnChange}
              placeholder="Enter last name"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem]  p-[12px] text-dblue"
            />
          </label>
        </div>
        <label className="w-full">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-dblue">
            Email Address <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="text"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Enter email address"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem]  p-[12px] text-dblue"
          />
        </label>
        <div className="flex gap-x-4">
          <label className="relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-dblue">
              Create Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={handleOnChange}
              onClick={()=>setValidation(true)}
              placeholder="Enter Password"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem]  p-[12px] pr-10 text-dblue"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] z-[10] cursor-pointer"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
          <label className="relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-dblue">
              Confirm Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleOnChange}
              placeholder="Confirm Password"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem]  p-[12px] pr-10 text-dblue"
            />
            <span
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] z-[10] cursor-pointer"
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>
        {console.log(validation)}
        <div className={`mt-5 justify-start items-center flex-wrap gap-4 ${validation ? "flex":"hidden"}`}>
          {ValidationData.map((item) => (
            <div className="flex gap-2 items-center" key={item.id}>
              {item.regx.test(password) ? (
                <AiFillCheckCircle className="text-green" />
              ) : (
                <MdDoNotDisturbOn className="text-pink-200" />
              )}
              <p
                className={`${
                  item.regx.test(password)
                    ? "text-green"
                    : "text-pink-200"
                } transition-all duration-100`}
              >
                {item.name}
              </p>
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="mt-6 rounded-[8px]  py-[8px] px-[12px] font-medium"
        >
          Create Account
        </button>
      </form>
    </div>
  )
}

export default SignupForm
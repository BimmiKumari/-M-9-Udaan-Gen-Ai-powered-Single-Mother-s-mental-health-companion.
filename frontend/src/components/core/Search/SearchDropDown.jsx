import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getAllCourses,
  getQueryCourses,
} from "../../../services/operations/searchAPI";
import { useState } from "react";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import { useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Skeleton from "react-loading-skeleton";

const SearchDropDown = ({
  subLinks,
  searchList,
  setSearchList,
  customClass,
  query,
  setQuery,
  setSearchOpen,
}) => {
  

  const searchRef = useRef(null);
  useOnClickOutside(searchRef, () => setSearchList(false));
  const [loading, setLoading] = useState(false);
  const [querySearchCourses, setQuerySearchCourses] = useState([]);
  const [NGOSUPPORTProfile, setNGOSUPPORTProfile] = useState([]);
  const [autoComplete, setAutoComplete] = useState([]);
  const [autoCompleteTags, setAutoCompleteTags] = useState([]);

  useEffect(() => {
    const fetchAllCourses = async () => {
     
      const res = await getAllCourses();
      if (res) {
       
      }
     
    };

    fetchAllCourses();
  }, []);

  useEffect(() => {
    if (query.length > 3) {
      const fetchSearchQuery = async () => {
        setLoading(true);
        const res = await getQueryCourses(query);
        if (res) {
          console.log(res)
          setQuerySearchCourses(res?.data?.populatedCourses);
          setNGOSUPPORTProfile(res?.data?.NGOSUPPORTDetails);
          setAutoComplete(res?.data?.autoComplete);
          setAutoCompleteTags(res?.data?.allAutoCompleteTags);
        }
        setLoading(false);
      };

      fetchSearchQuery();
    }
  }, [query]);

  const handleClick = () => {
    setSearchList(false);
    setSearchOpen(false);
  };

  return (
    <div
      className={`absolute top-14 ml-2 z-[1000] rounded-xl overflow-hidden bg-white text-black ${
        searchList ? "flex" : "hidden"
      } ${customClass} text-black`}
      ref={searchRef}
    >
      {loading ? (
        <div className="w-full ">
          <Skeleton
            count={
              querySearchCourses?.length === 0
                ? NGOSUPPORTProfile?.length === 0
                  ? autoComplete?.length === 0
                    ? autoCompleteTags?.length === 0
                      ? 5
                      : autoCompleteTags?.length
                    : autoComplete?.length
                  : NGOSUPPORTProfile?.length
                : querySearchCourses?.length
            }
            className="w-[90%] m-5"
            baseColor="#585D69"
            highlightColor="#F2F4FF"
          />
        </div>
      ) : query?.length === 0 ? (
        <ul className="overflow-auto w-full flex">
          <li className="w-full my-2 flex flex-col items-center justify-start gap-y-4 text-black">
            {subLinks
              ?.filter((subLink) => subLink?.courses?.length > 0)
              ?.map((subLink, i) => (
                <Link
                  to={`/catalog/${subLink.name
                    .split(" ")
                    .join("-")
                    .toLowerCase()}`}
                  className="w-full px-5 py-4 bg-transparent hover:bg-caribbeangreen-50"
                  key={i}
                  onClick={handleClick}
                >
                  <div className="flex items-center justify-start gap-4 text-black hover:text-white">
                    <AiOutlineSearch className="font-semibold text-2xl font-mono " />
                    <p className="font-semibold">{subLink.name}</p>
                  </div>
                </Link>
              ))}
           
          </li>
        </ul>
      ) : loading ? (
        <div className="w-full">
          <Skeleton
            count={
              querySearchCourses?.length === 0
                ? NGOSUPPORTProfile?.length === 0
                  ? autoComplete?.length === 0
                    ? autoCompleteTags?.length === 0
                      ? 5
                      : autoCompleteTags?.length
                    : autoComplete?.length
                  : NGOSUPPORTProfile?.length
                : querySearchCourses?.length
            }
            className="w-[100%] m-5"
            baseColor="#585D69"
            highlightColor="#F2F4FF"
          />
        </div>
      ) : (
        <div className="w-full my-5 flex flex-col items-center justify-start gap-y-7 overflow-auto">
          {querySearchCourses?.length > 0 ||
          NGOSUPPORTProfile?.length > 0 ||
          autoComplete?.length > 0 ||
          autoCompleteTags.length > 0 ? (
            <>
              {autoCompleteTags.map((tag, i) => (
                <div
                  className="w-full px-5 py-4 bg-transparent hover:bg-caribbeangreen-25"
                  key={i}
                >
                  <button
                    className="flex items-center justify-start gap-4"
                    onClick={() => {
                      setQuery(tag);
                      setAutoCompleteTags([]);
                    }} >
                    <AiOutlineSearch className="font-semibold text-3xl font-mono text-black " />
                    <div>
                      <p className="font-semibold text-left">{tag}</p>
                    </div>
                  </button>
                </div>
              ))}

              {autoComplete?.map((item, i) => (
                <div
                  className="w-full px-5 py-4 bg-transparent text-black "
                  key={i}
                >
                  <button
                    className="flex items-center justify-start gap-4"
                    onClick={() => {
                      setQuery(item.courseName);
                      setAutoComplete([]);
                    }}
                  >
                    <AiOutlineSearch className="font-semibold text-3xl font-mono" />
                    <div>
                      <p className="font-semibold text-left">
                        {item.courseName}
                      </p>
                    </div>
                  </button>
                </div>
              ))}

              {autoComplete?.length < 5 &&
                querySearchCourses?.map((course, i) => (
                  <Link
                    to={`/courses/${course._id}`}
                    className="w-full bg-transparent gap-3 px-5 flex xs:flex-row flex-col py-4"
                    key={i}
                    onClick={handleClick}
                  >
                    <img
                      src={course.thumbnail}
                      alt="course-img"
                      className="w-full h-40 xs:w-36 xs:h-20 mx-auto xs:mx-0"
                    />
                    <div className="flex flex-col items-start justify-center gap-3 mt-5 xs:mt-0">
                      <p className="font-semibold">{course?.courseName}</p>
                      <p className="text-yellow-50 font-medium">
                        {course.NGOSUPPORT?.[0]} {course.NGOSUPPORT?.[1]}
                      </p>
                    </div>
                  </Link>
                ))}

              {NGOSUPPORTProfile.map((item, i) => (
                <Link
                  to={`/NGOSUPPORT/${item._id}`}
                  className="w-full bg-transparent  gap-3 px-5 flex py-4"
                  key={i}
                  onClick={handleClick}
                >
                  <img
                    src={item.image}
                    alt="course-img"
                    className="w-[48px] h-[48px] rounded-full xs:w-[68px] xs:h-[68px]"
                  />
                  <div className="flex flex-col items-start justify-center">
                    <p className="font-bold text-lg">
                      {" "}
                      {item?.firstname} {item?.lastname}
                    </p>
                    <p className="font-medium text-yellow-50 ml-4">
                      NGOSUPPORT
                    </p>
                  </div>
                </Link>
              ))}
            </>
          ) : (
            <div
              className="w-full px-5 py-4 bg-transparent text-black hover:text-transparent hover:bg-caribbeangreen-50"
              onClick={() => setSearchList(false)}
            >
              <Link
                className="flex items-center justify-start gap-4 "
                to={`/search/${query}`}
              >
                <AiOutlineSearch className="font-semibold text-2xl text-black  font-mono" />
                <p className="font-semibold text-black">{query}</p>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchDropDown;

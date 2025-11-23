import { useEffect, useRef, useState } from "react";
import Image from "../../assets/images/logo-jb.png";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";
import { PiHandbagSimpleFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { IoHeartOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Home = () => {
  const scrollRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const toggleFilter = () => setIsOpen(!isOpen);

  useEffect(() => {
    const navbar = document.querySelector(".job-list-content");
    const search = document.querySelector(".search-input");
    const handleScroll = () => {
      if (window.scrollY > 90) {
        navbar?.classList.add("bg-header");
        search?.classList.add("search-bg");
      } else {
        navbar?.classList.remove("bg-header");
        search?.classList.remove("search-bg");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="container-fluid job-list-content position-sticky">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mt-3">
            <div className="d-flex gap-2 align-items-center">
              <div
                className="job-list-back align-items-center d-flex justify-content-center"
                onClick={scrollLeft}
              >
                <IoIosArrowBack />
              </div>

              <div className="job-scroll d-flex">
                <Link className="nav-link" to="/">
                  Web Developer
                </Link>
                <Link className="nav-link" to="/features">
                  Graphic Designer
                </Link>
                <Link className="nav-link" to="/mobile-app">
                  Network Enginerring
                </Link>
                <Link className="nav-link" to="/mobile-app">
                  IT Project Manager
                </Link>
                <Link className="nav-link" to="/mobile-app">
                  DevOps
                </Link>
                <Link className="nav-link" to="/mobile-app">
                  Full-StackDeveloper
                </Link>
              </div>

              <div
                className="job-list-prev align-items-center d-flex justify-content-center"
                onClick={scrollRight}
              >
                <IoIosArrowForward />
              </div>
            </div>

            <div className="job-filter">
              <button className="filter-toggle" onClick={toggleFilter}>
                ស្វែងរកទីកន្លែងធ្វើការ
                <span className={`fs-5 fw-bold arrow ${isOpen ? "open" : ""}`}>
                  <IoIosArrowDown />
                </span>
              </button>

              <div className={`filter-content ${isOpen ? "show" : ""}`}>
                <p className="bg-info p-2 mb-0">Content inside filter…</p>
                <p className="bg-danger p-2 mb-0">Content inside filter…</p>
                <p className="bg-warning p-2 mb-0">Content inside filter…</p>
                <p className="bg-success p-2 mb-0">You can add: dropdowns</p>
              </div>
            </div>

            <div className="search-container position-relative mb-lg-0 mb-4">
              <input
                type="text"
                className="px-3 search-input"
                placeholder="Search jobs..."
              />
              <i className="bi bi-search search-icon position-absolute top-50 start-0 translate-middle-y text-muted"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="container home-bg mt-2">
        <div className="row">
          <div className="col-12 col-md-5">
            <div className="d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <div className="home-image">
                  <img src={Image} alt="" />
                </div>
                <div>
                  <h2 className="short-text">@ReactJs</h2>
                  <p className="lead text-mute">3 positions available</p>
                </div>
              </div>
              <div>
                <IoHeartOutline className="fs-2 mt-3" />
                {/* <IoHeartSharp /> */}
              </div>
            </div>

            <div className="row">
              <p className="fw-bold mb-0">Web Developer</p>
              <p className="text-lgiht">1000$-2000$</p>
              <div className="col-6">
                <p className="fw-bold mb-0">Office</p>
                <p className="mb-0 short-text">
                  <FaLocationDot /> #6 ផ្លូវ 2004 សង្កាត់ទឹកថ្លា ខណ្ឌសែនសុខ
                  រាជនីភ្នំពេញ
                </p>
              </div>
              <div className="col-6">
                <p className="fw-bold mb-0">Location</p>
                <p className="mb-0 short-text">
                  <FaLocationDot /> #6 ផ្លូវ 2004 សង្កាត់ទឹកថ្លា ខណ្ឌសែនសុខ
                </p>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-6">
                <p className="fw-bold mb-0">Closing Date</p>
                <p className="mb-0 short-text">
                  <HiOutlineCalendarDateRange /> 13 NOV 2025
                </p>
              </div>
              <div className="col-6">
                <p className="fw-bold mb-0">Employement</p>
                <p className="mb-0 short-text">
                  <PiHandbagSimpleFill /> Full-Time
                </p>
              </div>
            </div>
            <div className="d-flex py-3">
              <button className="view-more">View More</button>
            </div>
          </div>
          <div className="col-12 col-md-5"></div>
        </div>
      </div>
    </>
  );
};

export default Home;

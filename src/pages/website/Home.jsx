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
          <div className="row mt-3 align-items-center">
            <div className="col-lg-6 col-12 d-flex gap-2 align-items-center">
              <button
                className="job-list-back align-items-center d-flex justify-content-center border-0"
                onClick={scrollLeft}
              >
                <IoIosArrowBack />
              </button>

              <div className="job-scroll d-flex" ref={scrollRef}>
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

              <button
                className="job-list-prev align-items-center d-flex justify-content-center border-0"
                onClick={scrollRight}
              >
                <IoIosArrowForward />
              </button>
            </div>

            <div className="job-filter col-lg-3">
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

            <div className="col-lg-3 search-container position-relative mb-lg-0 mb-4">
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
      <div className="container home-bg my-5">
        <div className="row justify-content-between">
          <div className="job-card col-12 col-lg-5">
            {/* Top Section */}
            <div className="d-flex justify-content-between">
              <div className="d-flex align-items-center gap-3">
                <div className="job-card-logo">
                  <img src={Image} alt="Company Logo" />
                </div>

                <div>
                  <h4 className="job-card-company">@ReactJs</h4>
                  <p className="job-card-sub">3 positions available</p>
                </div>
              </div>

              <IoHeartOutline className="job-card-fav" />
            </div>

            {/* Title + Salary */}
            <h3 className="job-card-title">Web Developer</h3>
            <p className="job-card-salary">1000$ – 2000$</p>

            {/* 2 Columns Info */}
            <div className="row g-3 mt-2">
              <div className="col-6">
                <p className="info-label">Office</p>
                <p className="info-value short-text">
                  <FaLocationDot /> #6 ផ្លូវ 2004 សង្កាត់ទឹកថ្លា ខណ្ឌសែនសុខ
                </p>
              </div>

              <div className="col-6">
                <p className="info-label">Location</p>
                <p className="info-value short-text">
                  <FaLocationDot /> #6 ផ្លូវ 2004 សង្កាត់ទឹកថ្លា សែនសុខ
                </p>
              </div>
            </div>

            {/* Bottom */}
            <div className="row g-3 mt-3">
              <div className="col-6">
                <p className="info-label">Closing Date</p>
                <p className="info-value">
                  <HiOutlineCalendarDateRange /> 13 NOV 2025
                </p>
              </div>

              <div className="col-6">
                <p className="info-label">Employment</p>
                <p className="info-value">
                  <PiHandbagSimpleFill /> Full-Time
                </p>
              </div>
            </div>

            {/* Button */}
            <button className="job-card-btn">View More</button>
          </div>
          <div className="job-card col-12 col-lg-5">
            {/* Top Section */}
            <div className="d-flex justify-content-between">
              <div className="d-flex align-items-center gap-3">
                <div className="job-card-logo">
                  <img src={Image} alt="Company Logo" />
                </div>

                <div>
                  <h4 className="job-card-company">@ReactJs</h4>
                  <p className="job-card-sub">3 positions available</p>
                </div>
              </div>

              <IoHeartOutline className="job-card-fav" />
            </div>

            {/* Title + Salary */}
            <h3 className="job-card-title">Web Developer</h3>
            <p className="job-card-salary">1000$ – 2000$</p>

            {/* 2 Columns Info */}
            <div className="row g-3 mt-2">
              <div className="col-6">
                <p className="info-label">Office</p>
                <p className="info-value short-text">
                  <FaLocationDot /> #6 ផ្លូវ 2004 សង្កាត់ទឹកថ្លា ខណ្ឌសែនសុខ
                </p>
              </div>

              <div className="col-6">
                <p className="info-label">Location</p>
                <p className="info-value short-text">
                  <FaLocationDot /> #6 ផ្លូវ 2004 សង្កាត់ទឹកថ្លា សែនសុខ
                </p>
              </div>
            </div>

            {/* Bottom */}
            <div className="row g-3 mt-3">
              <div className="col-6">
                <p className="info-label">Closing Date</p>
                <p className="info-value">
                  <HiOutlineCalendarDateRange /> 13 NOV 2025
                </p>
              </div>

              <div className="col-6">
                <p className="info-label">Employment</p>
                <p className="info-value">
                  <PiHandbagSimpleFill /> Full-Time
                </p>
              </div>
            </div>

            {/* Button */}
            <button className="job-card-btn">View More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

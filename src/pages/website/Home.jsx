import { useEffect } from "react";
import Image from "../../assets/images/logo-jb.png";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { PiHandbagSimpleFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { IoHeartOutline } from "react-icons/io5";

const Home = () => {
  useEffect(() => {
    const navbar = document.querySelector(".job-list-content");
    const search = document.querySelector(".search-input");
    const handleScroll = () => {
      if (window.scrollY > 88) {
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
          <div className="d-flex justify-content-between align-items-center mt-3 py-3">
            <div className="d-flex gap-3">
              <Link className="nav-link" to="/">
                Web Developer
              </Link>
              <Link className="nav-link" to="/features">
                Graphic Designer
              </Link>
              <Link className="nav-link" to="/mobile-app">
                Mobile App
              </Link>
              <Link className="nav-link" to="/mobile-app">
                Mobile App
              </Link>
              <Link className="nav-link" to="/mobile-app">
                Mobile App
              </Link>
              <Link className="nav-link" to="/mobile-app">
                Mobile App
              </Link>
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

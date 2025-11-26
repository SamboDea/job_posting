import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="jp-footer">
      <div className="container">
        <div className="row">
          {/* Company */}
          <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
            <h5 className="footer-title">JobPosting</h5>
            <p className="footer-text">
              Find your dream job from thousands of opportunities. We connect
              employers and job seekers every day.
            </p>

            <div className="footer-social">
              <Link to="">
                <FaFacebookF />
              </Link>
              <Link to="">
                <FaLinkedinIn />
              </Link>
              <Link to="">
                <FaInstagram />
              </Link>
              <Link to="">
                <FaTwitter />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
            <h5 className="footer-subtitle">Quick Links</h5>
            <ul className="footer-links">
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="">Find Jobs</Link>
              </li>
              <li>
                <Link to="">Companies</Link>
              </li>
              <li>
                <Link to="">Post a Job</Link>
              </li>
            </ul>
          </div>

          {/* Job Categories */}
          <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
            <h5 className="footer-subtitle">Categories</h5>
            <ul className="footer-links">
              <li>
                <Link to="">IT & Software</Link>
              </li>
              <li>
                <Link to="">Design</Link>
              </li>
              <li>
                <Link to="">Marketing</Link>
              </li>
              <li>
                <Link to="">Sales</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
            <h5 className="footer-subtitle">Contact Us</h5>
            <ul className="footer-contact">
              <li>Email: support@jobposting.com</li>
              <li>Phone: +855 96 123 4567</li>
              <li>Phnom Penh, Cambodia</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} JobPosting. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

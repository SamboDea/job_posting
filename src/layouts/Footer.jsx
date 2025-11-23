import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="jp-footer">
      <div className="container">
        <div className="row">
          {/* Company */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="footer-title">JobPosting</h5>
            <p className="footer-text">
              Find your dream job from thousands of opportunities. We connect
              employers and job seekers every day.
            </p>

            <div className="footer-social">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaLinkedinIn />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="footer-subtitle">Quick Links</h5>
            <ul className="footer-links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Find Jobs</a>
              </li>
              <li>
                <a href="#">Companies</a>
              </li>
              <li>
                <a href="#">Post a Job</a>
              </li>
            </ul>
          </div>

          {/* Job Categories */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="footer-subtitle">Categories</h5>
            <ul className="footer-links">
              <li>
                <a href="#">IT & Software</a>
              </li>
              <li>
                <a href="#">Design</a>
              </li>
              <li>
                <a href="#">Marketing</a>
              </li>
              <li>
                <a href="#">Sales</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3 col-sm-6 mb-4">
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


import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const AnimatedLink = ({ to, children }) => (
    <Link
      to={to}
      className="group relative inline-block text-[#4b5a87]"
    >
      <span className="inline-block">{children}</span>

      <span
        className="
          absolute
          left-0
          -bottom-1
          h-[1px]
          w-full
          bg-current
          origin-left
          scale-x-0
          transition-transform
          duration-300
          ease-out
          group-hover:scale-x-100
        "
      />
    </Link>
  );

  return (
    <footer className="bg-[#f5f5f5]">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-2 py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Subsidiaries */}

          <div>
            <h3 className="text-2xl font-medium text-[#2d3f7c] mb-8">
              Subsidiaries
            </h3>

            <ul className="space-y-4">
              <li>
                <AnimatedLink to="/edgeverve">
                  EdgeVerve Systems
                </AnimatedLink>
              </li>
              <li>
                <AnimatedLink to="/infosys-bpm">
                  Infosys BPM
                </AnimatedLink>
              </li>
              <li>
                <AnimatedLink to="/infosys-consulting">
                  Infosys Consulting
                </AnimatedLink>
              </li>
              <li>
                <AnimatedLink to="/infosys-public-services">
                  Infosys Public Services
                </AnimatedLink>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-2xl font-medium text-[#2d3f7c] mb-8">
              Programs
            </h3>
            <ul className="space-y-4">
              <li>
                <AnimatedLink to="/foundation">
                  Infosys Foundation
                </AnimatedLink>
              </li>
              <li>
                <AnimatedLink to="/foundation-usa">
                  Infosys Foundation USA
                </AnimatedLink>
              </li>
              <li>
                <AnimatedLink to="/science-foundation">
                  Infosys Science Foundation
                </AnimatedLink>
              </li>
              <li>
                <AnimatedLink to="/leadership-institute">
                  Infosys Leadership Institute
                </AnimatedLink>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-2xl font-medium text-[#2d3f7c] mb-8">
              Company
            </h3>

            <ul className="space-y-4">
              <li>
                <AnimatedLink to="/about">About Us</AnimatedLink>
              </li>
              <li>
                <AnimatedLink to="/investors">Investors</AnimatedLink>
              </li>
              <li>
                <AnimatedLink to="/navigate-next">
                  Navigate your next
                </AnimatedLink>
              </li>
              <li>
                <AnimatedLink to="/careers">Careers</AnimatedLink>
              </li>
              <li>
                <AnimatedLink to="/esg">ESG</AnimatedLink>
              </li>
              <li>
                <AnimatedLink to="/newsroom">Newsroom</AnimatedLink>
              </li>
              <li>
                <AnimatedLink to="/alumni">Alumni</AnimatedLink>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-2xl font-medium text-[#2d3f7c] mb-8">
              Support
            </h3>

            <ul className="space-y-4">
              <li>
                <AnimatedLink to="/terms">
                  Terms of Use
                </AnimatedLink>
              </li>
              <li>
                <AnimatedLink to="/privacy">
                  Privacy Statement
                </AnimatedLink>
              </li>
              <li>
                <AnimatedLink to="/cookie-policy">
                  Cookie Policy
                </AnimatedLink>
              </li>
              <li>
                <AnimatedLink to="/safe-harbour">
                  Safe Harbour Provision
                </AnimatedLink>
              </li>
              <li>
                <AnimatedLink to="/site-map">
                  Site Map
                </AnimatedLink>
              </li>
              <li>
                <AnimatedLink to="/modern-slavery">
                  Modern Slavery Statement
                </AnimatedLink>
              </li>
              <li>
                <AnimatedLink to="/supplier-guide">
                  Payment Guide for Suppliers
                </AnimatedLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Social Icons */}
          <div className="flex items-center gap-8 text-[#4b5a87] text-xl">
            <Link to="#">
              <FaFacebookF />
            </Link>

            <Link to="#">
              <FaLinkedinIn />
            </Link>

            <Link to="#">
              <FaXTwitter />
            </Link>

            {/* <Link to="#">
              <FaYoutube />
            </Link> */}
          </div>

          {/* Copyright */}
          <p className="text-[#4b5a87] text-sm">
            Copyright © Azzunique. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

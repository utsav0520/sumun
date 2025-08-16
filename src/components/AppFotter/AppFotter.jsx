import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import sumun from '../../Storage/fottorLogo.svg';

function AppFooter() {
  return (
    <footer className="color-footer text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* LEFT: Logo + Socials */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          <img src={sumun} alt="Symposium Logo" className="h-40 object-contain" />

          <div className="flex justify-center lg:justify-start space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <InstagramIcon className="text-pink-400 hover:text-pink-500" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FacebookIcon className="text-blue-500 hover:text-blue-600" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className="text-blue-300 hover:text-blue-400" />
            </a>
          </div>
        </div>

        {/* CENTER: Secretaries / Jury */}
        <div className="text-center sm:text-left">
          <h3 className="font-color-primary text-lg font-semibold mb-4">Secretaries / Jury</h3>
          <ul className="space-y-1 text-sm font-color-primary">
            <li>Dr. Ramesh K</li>
            <li>Prof. Anita S</li>
            <li>Mr. Vignesh R</li>
            <li>Ms. Priya D</li>
            <li>Mrs. Keerthi N</li>
          </ul>
        </div>

        {/* RIGHT: Web Team */}
        <div className="text-center sm:text-left">
          <h3 className="font-color-primary text-lg font-semibold mb-4">Web Team</h3>
          <ul className="space-y-1 text-sm font-color-primary">
            <li>Harish R – Frontend</li>
            <li>Neha K – Backend</li>
          </ul>
        </div>

      </div>

      {/* Bottom line */}
      <div className="mt-10 text-center text-xs text-gray-500 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Your College Symposium. All rights reserved.
      </div>
    </footer>
  );
}

export default AppFooter

import React from "react";
const Footer = () => {
  return (
    <footer className="text-center py-4 bg-light mt-5">
      <div className="d-flex justify-content-center gap-4 mb-3">
        {/* Facebook */}
        <a
          href="https://x.com/reda_redar"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fab fa-x fa-lg"></i>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/redar8/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fab fa-instagram fa-lg"></i>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/redar8"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fab fa-github fa-lg"></i>
        </a>

        {/* LinkedIn */}
        <a
          href="https://tr.linkedin.com/in/redar-abdulkareem-a8a944228"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fab fa-linkedin-in fa-lg"></i>
        </a>
      </div>

      <p className="mb-0 text-muted">
        Developed by <span className="fw-bold">Redar Abdulkareem</span> | © 2025
        All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white p-4 mt-10">
      <div className="container mx-auto text-center text-sm">
        © {new Date().getFullYear()} Carbon Footprint Estimator. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-gray-100 dark:bg-gray-800 text-sm p-4 text-center text-gray-600 dark:text-white">
      Copyright {currentYear} DEVJPM. All Rights reserved.
    </div>
  );
};

export default Footer;

import React from "react";

function Footer() {
  return (
    <footer className="footer bg-neutral text-neutral-content p-2 md:p-10">
      <nav>
        <h6 className="footer-title">Springdale Public School</h6>
        <div className="flex gap-4 flex-wrap">
          <div>
            <a className="link link-hover block font-semibold text-lg">Address</a>
            <p>
              Springdale Public School, 123 Education Lane, Cityville, State,
              ZIP Code
            </p>
          </div>
          <div>
            <a className="link link-hover block font-semibold text-lg">Phone</a>
            <p>(123) 456-7890</p>
          </div>
          <div>
            <a className="link link-hover block font-semibold text-lg">Email</a>
            <p>info@springdalepublicschool.edu</p>
          </div>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;

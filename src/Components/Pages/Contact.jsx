import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      {/* Page Title */}
      <div className="container text-center py-4">
        <h3>Contact Us</h3>
        <span>
          <i className="fa-solid fa-home" style={{ color: "#3f3f79" }}></i>
          &nbsp;
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Home
          </Link>{" "}
          / Contact Us
        </span>
      </div>

      {/* Branches Section */}
      <div
        className="jumbotron  py-4"
        style={{ backgroundColor: "#1b1b52", color: "white" }}
      >
        <h3 className="text-center">Our Branches</h3>
        <div className="row g-3 mt-3">
          {[
            {
              city: "Chennai",
              specialty: "Web & Mobile Development",
              mapUrl:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1567423803447!2d78.48667197500056!3d17.385044987920673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb973dbc5b100b%3A0xe5bb4b2c6cbb4e9d!2sHITEC%20City%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1707200000003!5m2!1sen!2sin",
            },
            {
              city: "Bangalore",
              specialty: "Cloud & DevOps Solutions",
              mapUrl:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.2583924383017!2d77.59456287506065!3d12.971598987389796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670f4d3df3d%3A0x2cbbf2b2c8e55d08!2sMG%20Road%2C%20Bangalore!5e0!3m2!1sen!2sin!4v1707200000001!5m2!1sen!2sin",
            },
            {
              city: "Coimbatore",
              specialty: "AI & Data Analytics",
              mapUrl:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.1293840360786!2d76.96163227507196!3d11.016844992154588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8590d42336d23%3A0xb7a802b1c1a6c07!2sBrookefields%20Mall%2C%20Coimbatore!5e0!3m2!1sen!2sin!4v1707200000002!5m2!1sen!2sin",
            },
          ].map((branch, index) => (
            <div key={index} className="col-lg-4 col-md-4 col-sm-6">
              <div
                className="card p-3 shadow-sm"
                style={{
                  minHeight: "20vh",
                  borderRadius: "30px 10px",
                  margin: "10px 10px",
                }}
              >
                <h6
                  className="card-title text-center"
                  style={{ fontSize: "24px" }}
                >
                  {branch.city}
                </h6>
                <h6>&nbsp; Tech Stacks.</h6>
                <span className="card-body fs-18">{branch.specialty}</span>
                <iframe
                  src={branch.mapUrl}
                  width="100%"
                  height="250"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form Heading */}
        <h2 className="mt-4 text-center">
          Have any questions? Let's answer them
        </h2>

        {/* Contact Form */}
        <div className="container mt-4">
          <form className="row g-3">
            {/* First Name */}
            <div className="col-md-6">
              <label htmlFor="fname" className="form-label">
                First Name
              </label>
              <input
                type="text"
                id="fname"
                name="firstname"
                className="form-control"
                placeholder="Your first name"
                required
              />
            </div>

            {/* Last Name */}
            <div className="col-md-6">
              <label htmlFor="lname" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                id="lname"
                name="lastname"
                className="form-control"
                placeholder="Your last name"
                required
              />
            </div>

            {/* Email */}
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Your email address"
                required
              />
            </div>

            {/* Phone */}
            <div className="col-md-6">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-control"
                placeholder="Your phone number"
                required
              />
            </div>

            {/* Message */}
            <div className="col-12">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                rows="4"
                placeholder="Your message"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="col-12 ">
              <button
                type="submit"
                className="btn btn-primary px-4 py-2"
                style={{ borderRadius: "50px 20px" }}
              >
                Send Your Message{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Career() {
  const [data, setData] = useState({
    Name: "",
    LastName: "",
    Email: "",
    Role: "",
    Number: "",
    Years: " ",
    Message: " ",
  });
  console.log(data);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const [roleData, setRoleData] = useState([]);

  const fetchData = async () => {
    try {
      const url = `https://api.sheetbest.com/sheets/a1fbb418-52e4-4dec-a5dd-144237536005`;
      const response = await fetch(url);
      const res = await response.json();
      console.log(res, "vanisri");
      return res; // Returns an array of values
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://api.sheetbest.com/sheets/a1fbb418-52e4-4dec-a5dd-144237536005",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data), // Convert JavaScript object to JSON string
        }
      );

      if (response.ok) {
        console.log("Data submitted successfully!");
      } else {
        console.error("Failed to submit data.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  return (
    <div>
      <div className="container text-center py-4">
        <h3>Career</h3>

        <span>
          <i className="fa-solid fa-home" style={{ color: "#3f3f79" }}></i>
          &nbsp;
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Home
          </Link>{" "}
          / Career
        </span>
      </div>
      <div className="container mt-4">
        <form className="row g-3" onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="col-md-6">
            <label htmlFor="fname" className="form-label">
              First Name
            </label>
            <input
              type="text"
              id="fname"
              name="Name"
              value={data.Name}
              className="form-control"
              placeholder="Your first name"
              onChange={handleChange}
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
              name="LastName"
              value={data.LastName}
              className="form-control"
              placeholder="Your last name"
              onChange={handleChange}
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
              name="Email"
              value={data.Email}
              className="form-control"
              placeholder="Your email address"
              onChange={handleChange}
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
              name="Number"
              value={data.Number}
              className="form-control"
              placeholder="Your phone number"
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="phone" className="form-label">
              Role
            </label>
            <select
              name="Jobs"
              value={data.Role}
              className="form-select"
              id="cars"
              onChange={handleChange}
            >
              <option value="FrontEnd Developer">FrontEnd Developer</option>
              <option value="BcankEnd Developer">BcankEnd Developer</option>
              <option value="FullStack Developer">FullStack Developer</option>
              <option value="Software Testing">Software Testing</option>
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="phone" className="form-label">
              Years of Experiance{" "}
            </label>
            <input
              type="tel"
              id="phone"
              name="Years"
              value={data.Years}
              className="form-control"
              placeholder="Your phone number"
              onChange={handleChange}
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
              name="Message"
              value={data.Message}
              className="form-control"
              rows="4"
              placeholder="Your message"
              onChange={handleChange}
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
              Submit{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Career;

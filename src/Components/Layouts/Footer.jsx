import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <>
      <Typography
        variant="body2"
        color="textSecondary"
        style={{ textAlign: "center", color: "white" }}
      >
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          www.abc.com
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </>
  );
}

function Footer() {
  return (
    <div
      className="jumbotran"
      style={{
        backgroundColor: "black",
        margin: "50px 0px 0px 0px",
        padding: "20px 0px",
      }}
    >
      {" "}
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-xl-3 col-sm-6 col-md-6">
            <h4 style={{ marginBottom: "15px", color: "white" }}>IT FIRM</h4>
            {/* <ul> */}
            <i
              class="fa-brands fa-twitter me-3"
              style={{ fontSize: "30px", color: "#3f3f79" }}
            ></i>

            <i
              class="fa-brands fa-instagram me-3"
              style={{ fontSize: "30px", color: "#3f3f79" }}
            ></i>

            <i
              class="fa-brands fa-linkedin me-3"
              style={{ fontSize: "30px", color: "#3f3f79" }}
            ></i>

            <i
              class="fa-brands fa-github me-3"
              style={{ fontSize: "30px", color: "#3f3f79" }}
            ></i>
            {/* </ul> */}
          </div>
          <div className="col-lg-3 col-xl-3 col-sm-6 col-md-6">
            <h4 style={{ marginBottom: "15px", color: "white" }}>
              Our Services
            </h4>
            <ul style={{ listStyle: "none", paddingLeft: "0", color: "white" }}>
              <li>
                {" "}
                <i
                  className="fa-solid  fa-arrow-right me-2"
                  style={{ color: "#3f3f79" }}
                ></i>
                Talent Management Solutions
              </li>
              <li>
                {" "}
                <i
                  className="fa-solid fa-arrow-right me-2"
                  style={{ color: "#3f3f79" }}
                ></i>
                Digital IT Solutions
              </li>
              <li>
                {" "}
                <i
                  className="fa-solid fa-arrow-right me-2"
                  style={{ color: "#3f3f79" }}
                ></i>
                Learning and Development
              </li>
              <li>
                {" "}
                <i
                  className="fa-solid fa-arrow-right me-2"
                  style={{ color: "#3f3f79" }}
                ></i>
                BPO-KPO
              </li>
              <li>
                {" "}
                <i
                  className="fa-solid fa-arrow-right me-2"
                  style={{ color: "#3f3f79" }}
                ></i>
                Financial Shared Services
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-xl-3 col-sm-6 col-md-6">
            <h4 style={{ marginBottom: "15px", color: "white" }}>Resources</h4>
            <ul style={{ listStyle: "none", paddingLeft: "0", color: "white" }}>
              <li>
                {" "}
                <i
                  className="fa-solid fa-arrow-right me-2"
                  style={{ color: "#3f3f79" }}
                ></i>
                About Us
              </li>
              <li>
                {" "}
                <i
                  className="fa-solid fa-arrow-right me-2"
                  style={{ color: "#3f3f79" }}
                ></i>
                Contact Us
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-xl-3 col-sm-6 col-md-6">
            <h4 style={{ marginBottom: "15px", color: "white" }}>
              Contact Information
            </h4>

            <ul style={{ listStyle: "none", paddingLeft: "0", color: "white" }}>
              <li>
                {" "}
                <i
                  class="fa-solid fa-envelope me-3"
                  style={{ color: "#3f3f79" }}
                ></i>
                info@gmail.com{" "}
              </li>
              <li>
                {" "}
                <i
                  class="fa-solid fa-map-marker-alt me-3"
                  style={{ color: "#3f3f79" }}
                ></i>
                7, Main Road, <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Anna Salai, <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chennai.{" "}
              </li>
              <li>
                {" "}
                <i
                  class="fa-solid fa-phone me-3"
                  style={{ color: "#3f3f79" }}
                ></i>
                +91 2345667789{" "}
              </li>{" "}
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <Copyright />
          </div>
          <div className="col-lg-6 ">
            <Typography
              variant="body1"
              style={{ textAlign: "center", color: "white" }}
            >
              Terms & Conditions | Privacy Policy.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

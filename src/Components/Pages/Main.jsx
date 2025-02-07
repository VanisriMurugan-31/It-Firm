import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ResponsiveSlider from "../Layouts/Card";
import "@fortawesome/fontawesome-free/css/all.min.css";

const imgStyle = {
  width: "100%",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  height: "auto", // Full height background
  display: "flex",
  alignItems: "center",
  justifyContent: "center", // Ensures proper scaling without distortion
};

function Main() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.3 } // Triggers when 30% of the element is visible
    );

    const elements = document.querySelectorAll(".animated-text");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const text = `Consulting IT Firm is a company that provides expert advice,
  strategic guidance, and technical solutions to businesses looking
  to optimize their IT infrastructure and
  digital transformation efforts. These firms specialize in offering
  customized IT services, including software development,
  cybersecurity, and IT strategy
  consulting With a focus on innovation, IT consulting firms 
  help organizations stay ahead of technological advancements while ensuring 
  security and scalability. By leveraging cutting-edge technologies and industry 
  best practices, these firms empower businesses to achieve long-term success in the digital 
  era.`.split(" ");

  return (
    <>
      <div
        className="jumbotran"
        style={{ backgroundColor: "white", padding: "30px 20px " }}
      >
        <div className="row">
          <div className="col-xl-6 col-md-12 col-lg-6 col-sm-12 animation">
            {text.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.25,
                  delay: i / 10,
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
          </div>
          {/* <div className="col-1"></div> */}
          <div className="col-xl-6 col-md-12 col-lg-6 col-sm-12">
            <img
              src="https://www.slidekit.com/wp-content/uploads/2022/09/Consulting-Presentation-Template-Title-Slide-2.jpg"
              alt="Slide 1"
              style={imgStyle}
            />
          </div>
        </div>
      </div>

      <div
        style={{
          border: "none",
          padding: "30px 10px ",
          backgroundColor: "#3f3f79",
          width: "100%", // Ensures full width
          // minHeight: "80vh",
          // // display: "flex",
          // // flexDirection: "column",
          // // alignItems: "center",
          // // justifyContent: "center",
        }}
      >
        <h2 style={{ color: "white" }}>
          <emp>Our Services</emp>{" "}
        </h2>
        <div
          className="row g-3"
          style={{ width: "100%", position: "relative", top: "10px" }}
        >
          <div className="col-ld-4 col-xl-4 col-md-4 col-sm-6 ">
            <div
              className=" card content-card  "
              style={{
                width: "80%%",
                padding: "10px",
                minHeight: "20vh",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.2) ",
              }}
            >
              <div className="icon-container ">
                <i className="fa-solid fa-lightbulb font-icon  fa-3x"></i>
              </div>
              <p
                className="card-title icon-container "
                style={{ fontSize: "22px" }}
              >
                Talent Management Solutions
              </p>
              <p className="card-body fs-18 icon-container">
                Discover a new paradigm in workforce optimization with our
                comprehensive Talent Management Solutions
              </p>
            </div>
          </div>
          <div className="col-ld-4 col-xl-4 col-md-4 col-sm-6 ">
            <div
              className=" card content-card  "
              style={{
                width: "80%%",
                padding: "10px",
                minHeight: "20vh",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.2) ",
              }}
            >
              <div className="icon-container ">
                <i class="fa-solid fa-book font-icon fa-3x"></i>
              </div>
              <p
                className="card-title icon-container "
                style={{ fontSize: "22px" }}
              >
                Learning and Development
              </p>
              <p className="card-body fs-18 icon-container">
                Explore a meticulously crafted, transformative approach to
                learning that aligns seamlessly with your organizational goals.
              </p>
            </div>
          </div>
          <div className="col-ld-4 col-xl-4 col-md-4 col-sm-6 ">
            <div
              className=" card content-card  "
              style={{
                width: "80%%",
                padding: "10px",
                minHeight: "20vh",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.2) ",
              }}
            >
              <div className="icon-container ">
                <i className="fa-solid fa-lightbulb font-icon  fa-3x"></i>
              </div>
              <p
                className="card-title icon-container "
                style={{ fontSize: "22px" }}
              >
                BPO/KPO
              </p>
              <p className="card-body fs-18 icon-container">
                Rely on our customized services for a smooth outsourcing
                experience, providing delivering results of the highest quality.
              </p>
            </div>
          </div>
          <div className="col-ld-4 col-xl-4 col-md-4 col-sm-6 ">
            <div
              className=" card content-card  "
              style={{
                width: "80%%",
                padding: "10px",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.2) ",
              }}
            >
              <div className="icon-container ">
                <i className="fa-solid fa-money-check-dollar font-icon fa-3x"></i>
              </div>
              <p
                className="card-title icon-container "
                style={{ fontSize: "22px" }}
              >
                Financial Shared Services
              </p>
              <p className="card-body fs-18 icon-container">
                Trust us to elevate your financial operations, allowing you to
                focus on what truly matters - the success of your business.
              </p>
            </div>
          </div>
          <div className="col-ld-4 col-xl-4 col-md-4 col-sm-6 ">
            <div
              className=" card content-card  "
              style={{
                width: "80%%",
                padding: "10px",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.2) ",
              }}
            >
              <div className="icon-container ">
                <i className="fa-solid fa-wallet font-icon  fa-3x"></i>
              </div>
              <p
                className="card-title icon-container "
                style={{ fontSize: "22px" }}
              >
                Fintech solutions
              </p>
              <p className="card-body fs-18 icon-container">
                Our diverse range of services caters to a wide array of
                financial needs, including substantial business loans, personal
                loans and credit cards.
              </p>
            </div>
          </div>
          <div className="col-ld-4 col-xl-4 col-md-4 col-sm-6 ">
            <div
              className=" card content-card  "
              style={{
                width: "80%%",
                padding: "10px",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.2) ",
              }}
            >
              <div className="icon-container ">
                <i className="fa-solid fa-code font-icon  fa-3x"></i>
              </div>
              <p
                className="card-title icon-container "
                style={{ fontSize: "22px" }}
              >
                Digital IT Solutions
              </p>
              <p className="card-body fs-18 icon-container">
                We specialize in crafting industry-specific solutions for
                seamless user experiences through intuitive interfaces
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="container" style={{ border: "none", padding: "30px 10px " }}>
        <div className="row">
          <div className="col-xl-6 col-md-6 col-sm-12">
            <ReactPlayer
              width={"100%"}
              height="100%"
              url="https://www.cisco.com/content/dam/cisco-cdc/site/images/poster-image/explainer-544x306.png"
              playing={true}
              muted={true}
              controls={true}
            />
          </div>
          <div className="col-xl-1 col-md-1"></div>
          <div className="col-xl-5 col-md-5  col-sm-12 line">
            <h3 style={{ color: "#2f2455" }}>
              <emp>Challenges of the hybrid Environment</emp>
            </h3>
            <p className="line-h animated-text ">
              Many IT leaders are scrambling to support the evolving needs of
              hybrid workers, which takes them away from working on digital
              transformation efforts to streamline processes and improve
              efficiency.
            </p>
            <p className="line-h animated-text">
              To help regain focus on strategic imperatives, many IT leaders are
              leveraging trusted suppliers to manage functional workloads and
              free up their valuable IT resources.
            </p>
          </div>
        </div>
      </div>

      <div style={{ border: "none", padding: "30px 10px " }}>
        <div style={{ position: "relative", width: "100%", height: "300px" }}>
          {/* Background Card */}
          <div
            className="card card-container"
            style={{
              backgroundColor: "#2f2455",
              width: "100%",
              height: "90%",
              position: "absolute",
              top: "30%",
              left: 0,
              zIndex: 1, // Background should be below
            }}
          ></div>

          {/* Overlapping Content Card */}
          <div
            className="card content-card"
            style={{
              backgroundColor: "white",
              width: "60%", // Adjust width as needed
              padding: "20px",
              position: "absolute",
              top: "35%",
              left: "40%",
              transform: "translate(-50%, -50%)", // Centers the card
              boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
              zIndex: 2, // Content should be above
            }}
          >
            <div className="card-body">
              <h5 className="card-title"> Are you ready for generative AI?</h5>
              <p className="card-text">
                The world has changed, and the data center is ready. Now is the
                time to prepare for AI so you can uncover deeper insights than
                ever before. But where do you start? We asked the experts, and
                they shared guidance for what you should expect from a modern
                data center.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container"
        style={{ border: "none", padding: "30px 10px " }}
      >
        <h4>Career</h4>
        <hr />
        <p>Build a future you believe in</p>
        <ResponsiveSlider />
        <button
          type="submit"
          className="btn btn-primary px-4 py-2"
          style={{ borderRadius: "50px 20px" }}
        >
          <Link to='/career' style={{color:"white",textDecoration:"none"}}>Apply Now{" "}</Link>
        </button>
      </div>
    </>
  );
}

export default Main;

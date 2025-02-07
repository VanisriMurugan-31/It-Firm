
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";





const ResponsiveSlider = () => {



    const[data,setData]=useState([]);
    const fetchData = async () => {
        try {
          const url = `https://api.sheetbest.com/sheets/a1fbb418-52e4-4dec-a5dd-144237536005`;
          const response = await fetch(url);
          const res = await response.json();
          setData(res);
          console.log(res, "sri");
          return res; // Returns an array of values
        } catch (error) {
          console.error("Error fetching data:", error);
          return [];
        }
      };
    
      useEffect(() => {
          fetchData().then(setData);
        }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: false,
    centerPadding: "20px",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div style={{ padding: "20px", maxWidth: "90%", margin: "auto" }}>
      <Slider {...settings}>
        {data.map((card) => (
          <div key={card.id} style={{ padding: "15px" }}>
            <div
              style={{
                background: card.bgColor,
                padding: "20px",
                borderRadius: "15px",
                textAlign: "center",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                color: "#fff",
                fontSize: "18px",
                fontWeight: "bold",
                transition: "transform 0.3s ease-in-out",
                width: "100%",
                margin: "0 10px",
              }}
            >
             
              
              {/* Title */}
              <h3 style={{ fontSize: "22px", margin: "10px 0" }}>{card.title}</h3>
              
              {/* Content */}
              <p style={{ fontSize: "16px", fontWeight: "normal", margin: "0 10px" }}>
                {card.content}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ResponsiveSlider;

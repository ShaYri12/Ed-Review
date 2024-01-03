import React from 'react'
import Internships from "./Internships_data";
import "./Internships_section.css";
import "../Courses_section/Courses_section.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="slick-arrow my-auto"
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      <img className="slide-right" src="/src/assets/slide-right.png" alt=".."/>
    </div>

  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="slick-arrow my-auto {className}"
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >
    <img className="slide-left" src="/src/assets/slide-left.png" alt=".."/>
    </div>
  );
}

function Internships_section() {
  var settings = {
    arrows:true,
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,    
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <div className="courses-section container ">
      <h2 className="common-heading p-4 mt-5 text-center"> Latest Internships</h2>
      <Slider {...settings}  className="d-flex justify-content-center ">  
      {Internships.map((internships)=>(
        <div key={internships.id} className="card-body border border-2">
            <div className="pt-3 ps-3 d-flex flex-row align-item-start justify-content-start ">
              <img className="internship-img rounded-2 img-fluid " src={internships.img}/>
              <div className="ms-3 d-flex flex-column align-item-start justify-content-start">
                <h6 className="text-heading  d-flex  justify-content-start pe-3">{internships.main_heading}</h6>
                <div className="extra-data d-flex justify-content-between">
                  <div className="icons d-flex">
                    <img className="icon img-fluid " src="/src/assets/briefcase.png" alt="..."/>
                    <span className="icon-text px-2 pe-3">{internships.company}</span>
                  </div>
                  <div className="icons d-flex">
                    <img className="icon img-fluid "  src="/src/assets/calendar.png" alt="..."/>
                    <span className="icon-text px-2 pe-3">{internships.time}</span>
                  </div>
                </div>  
              </div>
            </div>
          <div className="coins d-flex mt-2 pt-2 ms-3 align-item-center">
            <img className="coin img-fluid "  src="/src/assets/dollar.png" alt="..."/> <span className=" px-2 pe-3 coin-text ">{internships.coins}</span>
          </div>
          <hr className="divider mb-auto"/>
          <div className="d-flex mx-auto my-2 align-item-center justify-content-between">
            <button className="btn apply-btn mx-auto">Apply Now</button>
            <button className="btn btn-outline-secondary mx-auto detail-btn">View Program</button>
          </div>
        </div>
      ))}
      </Slider>
      </div>
  );
}

export default Internships_section;
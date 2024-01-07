import React from 'react'
import {Link } from "react-router-dom";
import Courses from "./Courses_data";
import "../Internships_section/Internships_section.css";
import "./Courses_section.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="slick-arrow my-auto"
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      <img className="slide-right" src="/public/assets/slide-right.png" alt=".."/>
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
    <img className="slide-left" src="/public/assets/slide-left.png" alt=".."/>
    </div>
  );
}

function Courses_section() {
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
      <h2 className="common-heading p-4 mt-5 text-center"> Courses We Offer</h2>
      <Slider {...settings}  className="d-flex justify-content-center ">  
      {Courses.map((course) => (  
            <div key={course.id} className="card-body border border-2">
                <div className="pt-3 ps-3 d-flex flex-row align-item-start justify-content-start">
                    <img className="internship-img rounded-2 img-fluid " src={course.img}/>
                    <div className="ms-3 d-flex flex-column align-item-start justify-content-start">
                      <h6 className="text-heading text-top mb-1 d-flex justify-content-start pe-3">{course.main_heading}</h6>
                      <span className="icon-text py-auto d-flex justify-content-start">{course.sub_heading}</span>
                    </div>
                </div>
                <div className="card-extra d-flex mt-2 pt-2 ms-3 align-item-center justify-content-between">
                  <div className="d-flex">
                    <img className="location img-fluid mb-auto"  src="/public/assets/location.png" alt="..."/> <span className=" px-2 pe-3 coin-text ">{course.location}</span>
                  </div>
                  <div className="d-flex">
                    <img className="star img-fluid mb-auto"  src="/public/assets/star-2.png" alt="..."/> <span className="pe-2 coin-text ">{course.stars}</span>
                    <span className=" pe-3 coin-text ">({course.reviews})</span>
                  </div>
                </div>
                <hr className="divider mb-auto"/>
                <div className="d-flex mx-auto my-2 py-auto align-item-center justify-content-between">
                    <ul className="course-level-ul mb-auto"><li className="course-level">Beginner Level Course</li></ul>
                    <Link className="btn-detail mx-auto px-3">View Detail</Link>
                </div>
              </div>  
      ))}
      </Slider>
      </div>
  );
}

export default Courses_section;
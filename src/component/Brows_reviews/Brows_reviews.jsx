import React from 'react';
import "./Brows_reviews.css";
import Reviews from "./Reviews_data.jsx";
import "../Courses_section/Courses_section.css";
import "../Internships_section/Internships_section.css";
import Marquee from "react-fast-marquee";
// import Slider from "react-slick";

function Brows_reviews() {
  var settings = {
      speed:50,
      pauseOnHover:true,
      
  };
  
  return (
    <div className="reviews-section">
      <h2 className="common-heading p-4 mt-5 text-center"> Brows Reviews</h2>
      <Marquee {...settings}  direction="right">
      {Reviews.map((reviews)=>(
        
                <div key={reviews.id}  className="card-body border rounded-2 mx-2">
                  <div className="pt-3 ps-3 d-flex flex-row align-item-start justify-content-start">
                      <img className="profile-img rounded-circle img-fluid " src={reviews.img}/>
                      <div className="ms-3 d-flex flex-column align-item-center justify-content-start">
                        <h6 className="profile-name d-flex justify-content-start">{reviews.name}</h6>
                        {(() => {
                          switch (reviews.stars) {
                            case 1:
                              return (
                                <>
                                  <div className='stars d-flex'>
                                    <img className="star img-fluid" src="/public/assets/star.png" alt="Star" />
                                  </div>
                                </>
                              );
                            case 2:
                              return (
                                <>
                                  <div className='stars d-flex'>
                                    <img className="star img-fluid" src="public//assets/star.png" alt="Star" />
                                    <img className="star img-fluid" src="public//assets/star.png" alt="Star" />
                                  </div>
                                </>
                              );
                            case 3:
                              return (
                                <>
                                  <div className='stars d-flex'>
                                    <img className="star img-fluid" src="public//assets/star.png" alt="Star" />
                                    <img className="star img-fluid" src="public//assets/star.png" alt="Star" />
                                    <img className="star img-fluid" src="public//assets/star.png" alt="Star" />
                                  </div>
                                </>
                              );
                            case 4:
                              return (
                                <>
                                  <div className='stars d-flex'>
                                    <img className="star img-fluid" src="public//assets/star.png" alt="Star" />
                                    <img className="star img-fluid" src="public//assets/star.png" alt="Star" />
                                    <img className="star img-fluid" src="public//assets/star.png" alt="Star" />
                                    <img className="star img-fluid" src="public//assets/star.png" alt="Star" />
                                  </div>
                                </>
                              );
                            case 5:
                              return (
                                <>
                                  <div className='stars d-flex'>
                                    <img className="star img-fluid" src="/public/assets/star.png" alt="Star" />
                                    <img className="star img-fluid" src="/public/assets/star.png" alt="Star" />
                                    <img className="star img-fluid" src="/public/assets/star.png" alt="Star" />
                                    <img className="star img-fluid" src="/public/assets/star.png" alt="Star" />
                                    <img className="star img-fluid" src="/public/assets/star.png" alt="Star" />
                                  </div>
                                </>
                              );
                            default:
                              return null;
                          }
                        })()}
                          </div>
                      </div>
                      <div className="d-flex mt-2 pt-2 align-item-center justify-content-arround">
                        <span className="review text-wrap pb-3 ps-3">"{reviews.review}</span>
                      </div>
                </div>
              
        ))}
      </Marquee>

      <Marquee {...settings} className="mt-4">
      {Reviews.map((reviews)=>(
        
                <div key={reviews.id}  className="card-body border rounded-2 mx-2">
                  <div className="pt-3 ps-3 d-flex flex-row align-item-start justify-content-start">
                      <img className="profile-img rounded-circle img-fluid " src={reviews.img}/>
                      <div className="ms-3 d-flex flex-column align-item-center justify-content-start">
                        <h6 className="profile-name d-flex justify-content-start">{reviews.name}</h6>
                        {(() => {
                          switch (reviews.stars) {
                            case 1:
                              return (
                                <>
                                  <div className='stars d-flex'>
                                    <img className="star img-fluid" src="/public/assets/star.png" alt="Star" />
                                  </div>
                                </>
                              );
                            case 2:
                              return (
                                <>
                                  <div className='stars d-flex'>
                                    <img className="star img-fluid" src="/public/assets/star.png" alt="Star" />
                                    <img className="star img-fluid" src="/public/assets/star.png" alt="Star" />
                                  </div>
                                </>
                              );
                            case 3:
                              return (
                                <>
                                  <div className='stars d-flex'>
                                    <img className="star img-fluid" src="/public/assets/star.png" alt="Star" />
                                    <img className="star img-fluid" src="/public/assets/star.png" alt="Star" />
                                    <img className="star img-fluid" src="/public/assets/star.png" alt="Star" />
                                  </div>
                                </>
                              );
                            case 4:
                              return (
                                <>
                                  <div className='stars d-flex'>
                                    <img className="star img-fluid" src="/public/assets/star.png" alt="Star" />
                                    <img className="star img-fluid" src="/public/assets/star.png" alt="Star" />
                                    <img className="star img-fluid" src="/public/assets/star.png" alt="Star" />
                                    <img className="star img-fluid" src="/public/assets/star.png" alt="Star" />
                                  </div>
                                </>
                              );
                            case 5:
                              return (
                                <>
                                  <div className='stars d-flex'>
                                    <img className="star img-fluid" src="/public/assets/star.png" alt="Star" />
                                    <img className="star img-fluid" src="/public/assets/star.png" alt="Star" />
                                    <img className="star img-fluid" src="/public/assets/star.png" alt="Star" />
                                    <img className="star img-fluid" src="/public/assets/star.png" alt="Star" />
                                    <img className="star img-fluid" src="/public/assets/star.png" alt="Star" />
                                  </div>
                                </>
                              );
                            default:
                              return null;
                          }
                        })()}
                          </div>
                      </div>
                      <div className="d-flex mt-2 pt-2 align-item-center justify-content-arround">
                        <span className="review text-wrap pb-3 ps-3">"{reviews.review}</span>
                      </div>
                </div>
              
        ))}
      </Marquee>
      </div>
  );
}

export default Brows_reviews;
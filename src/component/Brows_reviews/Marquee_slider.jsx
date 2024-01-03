import React from 'react';
import "./Brows_reviews.css";
import Reviews from "./Reviews_data.jsx";

function Marquee_slider() {
  return (
    <div className="container-fluid marquee-slider d-flex justify-content-center  text-center overflow-hidden">
    {Reviews.map((reviews)=>(
      <div key={reviews.id} className="divs col-12 col-md-6 col-lg-2 d-flex align-item-center justify-content-center">
            <div  className="card-body border rounded-2">
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
                                <img className="star img-fluid" src="/assets/star.png" alt="Star" />
                              </div>
                            </>
                          );
                        case 2:
                          return (
                            <>
                              <div className='stars d-flex'>
                                <img className="star img-fluid" src="/assets/star.png" alt="Star" />
                                <img className="star img-fluid" src="/assets/star.png" alt="Star" />
                              </div>
                            </>
                          );
                        case 3:
                          return (
                            <>
                              <div className='stars d-flex'>
                                <img className="star img-fluid" src="/assets/star.png" alt="Star" />
                                <img className="star img-fluid" src="/assets/star.png" alt="Star" />
                                <img className="star img-fluid" src="/assets/star.png" alt="Star" />
                              </div>
                            </>
                          );
                        case 4:
                          return (
                            <>
                              <div className='stars d-flex'>
                                <img className="star img-fluid" src="/assets/star.png" alt="Star" />
                                <img className="star img-fluid" src="/assets/star.png" alt="Star" />
                                <img className="star img-fluid" src="/assets/star.png" alt="Star" />
                                <img className="star img-fluid" src="/assets/star.png" alt="Star" />
                              </div>
                            </>
                          );
                        case 5:
                          return (
                            <>
                              <div className='stars d-flex'>
                                <img className="star img-fluid" src="/assets/star.png" alt="Star" />
                                <img className="star img-fluid" src="/assets/star.png" alt="Star" />
                                <img className="star img-fluid" src="/assets/star.png" alt="Star" />
                                <img className="star img-fluid" src="/assets/star.png" alt="Star" />
                                <img className="star img-fluid" src="/assets/star.png" alt="Star" />
                              </div>
                            </>
                          );
                        default:
                          return null;
                      }
                    })()}
                      </div>
                  </div>
                  <div className="d-flex mt-2 pt-2 ms-3 align-item-center justify-content-arround">
                    <span className="review text-wrap pb-3 ps-3">"{reviews.review}</span>
                  </div>
            </div>
          </div>
    ))}
    {Reviews.map((reviews)=>(
      <div key={reviews.id} className="divs col-12 col-md-6 col-lg-2 d-flex align-item-center justify-content-center">
            <div  className="card-body border rounded-2">
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
                                <img className="star img-fluid" src="/assets/star.png" alt="Star" />
                              </div>
                            </>
                          );
                        case 2:
                          return (
                            <>
                              <div className='stars d-flex'>
                                <img className="star img-fluid" src="/assets/star.png" alt="Star" />
                                <img className="star img-fluid" src="/assets/star.png" alt="Star" />
                              </div>
                            </>
                          );
                        case 3:
                          return (
                            <>
                              <div className='stars d-flex'>
                                <img className="star img-fluid" src="/assets/star.png" alt="Star" />
                                <img className="star img-fluid" src="/assets/star.png" alt="Star" />
                                <img className="star img-fluid" src="/assets/star.png" alt="Star" />
                              </div>
                            </>
                          );
                        case 4:
                          return (
                            <>
                              <div className='stars d-flex'>
                                <img className="star img-fluid" src="/assets/star.png" alt="Star" />
                                <img className="star img-fluid" src="/assets/star.png" alt="Star" />
                                <img className="star img-fluid" src="/assets/star.png" alt="Star" />
                                <img className="star img-fluid" src="/assets/star.png" alt="Star" />
                              </div>
                            </>
                          );
                        case 5:
                          return (
                            <>
                              <div className='stars d-flex'>
                                <img className="star img-fluid" src="/assets/star.png" alt="Star" />
                                <img className="star img-fluid" src="/assets/star.png" alt="Star" />
                                <img className="star img-fluid" src="/assets/star.png" alt="Star" />
                                <img className="star img-fluid" src="/assets/star.png" alt="Star" />
                                <img className="star img-fluid" src="/assets/star.png" alt="Star" />
                              </div>
                            </>
                          );
                        default:
                          return null;
                      }
                    })()}
                      </div>
                  </div>
                  <div className="d-flex mt-2 pt-2 ms-3 align-item-center justify-content-arround">
                    <span className="review text-wrap pb-3 ps-3">"{reviews.review}</span>
                  </div>
            </div>
          </div>
    ))}
      </div>
  )
}

export default Marquee_slider
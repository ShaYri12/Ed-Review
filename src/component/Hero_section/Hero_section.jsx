import "../Hero_section/Hero_section.css";

function Hero_section() {
  return (
    <div className="hero-section overflow-hidden">
    <div className="bg-img img-fluid">
      <div className="container-fluid">
        <div className="row pt-3 hero d-flex align-item-center  ">
          <div className="col-12 col-md-6 col-lg-6 hero-text  my-auto d-flex flex-column align-item-center justify-content-center">
            <h1>
              To be the best,<br/>
              <span className="h1-other">Choose the best...</span>
            </h1>
            <p className="hero-para">Company reviews, Course review, Internship</p>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Search by course" aria-label="Search" aria-describedby="basic-addon1"/>
              <button className="btn btn-course rounded-end bg-white dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">Course</button>
              <ul className="dropdown-menu dropdown-menu-end me-3">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">Separated link</a></li>
              </ul>
              <div className="ms-3">
                <button className="btn-search btn btn-lg btn-success">Search</button>
              </div>
            </div>
            
          </div>
          <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-end align-items-center person-box">
            <div className="hero-person img-fluid d-flex justify-content-start align-items-end "></div>  
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Hero_section;

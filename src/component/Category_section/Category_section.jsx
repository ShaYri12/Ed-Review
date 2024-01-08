import {Link } from "react-router-dom";
import "../Category_section/Category_section.css";

function Category_section() {
  return (
    <div className="category-section">
        <div className="container text-center">
            <h2 class="common-heading p-4 mt-5"> Explore Categories</h2>
        </div>
        <div className="container text-center ">
            <div className="row categories g-3 d-flex align-item-center justify-content-center mb-3">
                <Link className="nav-link mx-3 col-md-3 col-lg-2 bg-white category-box rounded-2 p-5 d-flex flex-column align-item-center justify-content-center text-center ">
                    <div className="img-circle mx-auto d-flex align-item-center justify-content-center text-center">
                        <img className="category-img img-fluid my-auto" src="/assets/clg&uni.png"/>
                    </div>
                    <h6 className="pt-3">College & Universities</h6>
                </Link>
                <Link className="nav-link mx-3 col-md-3 col-lg-2 bg-white category-box p-5 d-flex flex-column align-item-center justify-content-center text-center">
                    <div className="img-circle mx-auto d-flex align-item-center justify-content-center text-center">
                        <img className="category-img img-fluid my-auto" src="/assets/courses&classes.png"/>
                    </div>
                    <h6 className="pt-3">Courses & Classes</h6>
                </Link>
                <Link className="nav-link mx-3 col-md-3 col-lg-2 bg-white category-box p-5 d-flex flex-column align-item-center justify-content-center text-center">
                    <div className="img-circle mx-auto d-flex align-item-center justify-content-center text-center">
                        <img className="category-img img-fluid my-auto" src="/assets/educ&services.png"/>
                    </div>
                    <h6 className="pt-3">Educational Services</h6>
                </Link>
                <Link className="nav-link mx-3 col-md-3 col-lg-2 bg-white category-box p-5 d-flex flex-column align-item-center justify-content-center text-center">
                    <div className="img-circle mx-auto d-flex align-item-center justify-content-center text-center">
                        <img className="category-img img-fluid my-auto" src="/assets/language.png"/>
                    </div>
                    <h6 className="pt-3">Language Learning</h6>
                </Link>

                <Link className="nav-link mx-3 col-md-3 col-lg-2 bg-white category-box rounded-2 p-5 d-flex flex-column align-item-center justify-content-center text-center ">
                    <div className="img-circle mx-auto d-flex align-item-center justify-content-center text-center">
                        <img className="category-img img-fluid my-auto" src="/assets/music&theater.png"/>
                    </div>
                    <h6 className="pt-3">Music & Theater Classes</h6>
                </Link>
                <Link className="nav-link mx-3 col-md-3 col-lg-2 bg-white category-box p-5 d-flex flex-column align-item-center justify-content-center text-center">
                    <div className="img-circle mx-auto d-flex align-item-center justify-content-center text-center">
                        <img className="category-img img-fluid my-auto" src="/assets/vocational.png"/>
                    </div>
                    <h6 className="pt-3">Vocational Training Center</h6>
                </Link>
                <Link className="nav-link mx-3 col-md-3 col-lg-2 bg-white category-box p-5 d-flex flex-column align-item-center justify-content-center text-center">
                    <div className="img-circle mx-auto d-flex align-item-center justify-content-center text-center">
                        <img className="category-img img-fluid my-auto" src="/assets/clg&uni.png"/>
                    </div>
                    <h6 className="pt-3">College & Universties</h6>
                </Link>
                <Link className="nav-link mx-3 col-md-3 col-lg-2 bg-white category-box p-5 d-flex flex-column align-item-center justify-content-center text-center">
                    <div className="img-circle mx-auto d-flex align-item-center justify-content-center text-center">
                        <img className="category-img img-fluid my-auto" src="/assets/courses&classes.png"/>
                    </div>
                    <h6 className="pt-3">College & Universities</h6>
                </Link>
            </div>

        </div>
    </div>
  )
}

export default Category_section
import { NavLink, Link } from "react-router-dom";
import "../Navbar/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white fixed-top ">
  <div className="container d-flex justify-content-center align-item-center">
    <Link className="navbar-brand brand-name" to="/">ED Review</Link>
    <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon ms-auto"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 bg-white ">
        <li className="nav-item my-auto mx-auto">
          <NavLink className="nav-link" aria-current="page" to="#">Companies</NavLink>
        </li>  
        <li className="nav-item my-auto mx-auto">
          <NavLink className="nav-link" to="#">Course</NavLink>
        </li>
        <li className="nav-item my-auto mx-auto">
          <NavLink className="nav-link" to="#">Booka demo</NavLink>
        </li>
        <li className="nav-item my-auto mx-auto">
          <NavLink className="nav-link" to="#">Internships</NavLink>
        </li>
        <li className="nav-item dropdown my-auto mx-auto">
          <Link className="nav-link " to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="assets/bell icon.svg" className="img-fluid rounded-top" alt="notification"/>
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">Some Notifications</Link></li>
          </ul>
        </li> 
        <li className="nav-item dropdown my-auto mx-auto">
          <a className="nav-link dropdown-toggle justify-content-start" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="assets/profile.png" className="img-fluid profile" alt="Profile"/>
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">My Review</Link></li>
            <li><Link className="dropdown-item" to="#">Internship Applied</Link></li>
            <li><Link className="dropdown-item" to="#">Setting</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="#">Logout</Link></li>
          </ul>
        </li>        
        <button className="btn-post btn mx-auto">Post a Review</button>
      </ul>
      
    </div>
  </div>
</nav>
  );
}

export default Navbar;

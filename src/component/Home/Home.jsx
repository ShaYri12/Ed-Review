import React from 'react'
import Navbar from '../Navbar/Navbar.jsx';
import Hero_section from '../Hero_section/Hero_section.jsx';
import Category_section from '../Category_section/Category_section.jsx';
import Internships_section from '../Internships_section/Internships_section.jsx';
import Courses_section from '../Courses_section/Courses_section.jsx';
import Brows_reviews from '../Brows_reviews/Brows_reviews.jsx';
import Footer from '../Footer/Footer.jsx';

function Home() {
  return (
    <div>
      <Navbar />
      <Hero_section />
      <Category_section />
      <Internships_section />
      <Courses_section />
      <Brows_reviews />
      <Footer />
    </div>
  )
}

export default Home;
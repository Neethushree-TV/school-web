import React, { useEffect } from 'react';
import Hero from "../../components/layouts/Common/Hero";
import Footer from "../../components/layouts/Footer";
import PaperTear1 from "../../components/layouts/PaperTear1";
import AdmissionInfo from "./AdmissionInfo";
// import Faculty from "./Faculty";
import OurPrograms from "./OurPrograms";
// import Resource from "./Resource";
import image from "../../assets/Images/AcademicsImages/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg";
import BreadCrumb from "../../components/layouts/Common/BreadCrumb";
import PaperTear2 from "../../components/layouts/PaperTear2";
import OurVision from "./OurVision";
import Testimonials from "./Testimonials";
import Timelines  from "./Timelines";
import MetaData from '../../components/MetaData';
const Academics = () => {
  useEffect(() => {
    // Update document head with meta tags
    const metaTitle = document.createElement('meta');
    metaTitle.setAttribute('name', 'title');
    metaTitle.content = 'Academics - Mysore International School';
    document.head.appendChild(metaTitle);

    const metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.content = 'Explore the academic programs at Mysore International School, focusing on holistic education and comprehensive learning experiences.';
    document.head.appendChild(metaDescription);

    return () => {
      // Clean up added meta tags when component unmounts
      document.head.removeChild(metaTitle);
      document.head.removeChild(metaDescription);
    };
  }, []);
  return (
    <div className="">
                <MetaData title={"Academics"} />

      <Hero
        text={"Academics"}
        image={image}
        description={`Welcome to Mysore international school, where academic excellence is at the core of our mission. We are committed to providing students with a rigorous and well-rounded education that prepares them for success in a rapidly changing world. Our dedicated faculty and staff are passionate about nurturing the intellectual growth of every student, fostering critical thinking, creativity, and a love for learning.`}
      />
      <BreadCrumb 
      Currentlink={"academics"}
      Currentpage={"Academics"}/>
      <OurPrograms />
      <PaperTear1 />
      <Testimonials />
      {/* <Faculty /> */}
      <PaperTear2 />
      <PaperTear1 />
      <Timelines />
      <PaperTear2 />
      {/* <OurVision /> */}
      <PaperTear1 />
      <AdmissionInfo />
      {/* <Resource /> */}
      <PaperTear2 />
      <Footer />
    </div>
  );
};

export default Academics;

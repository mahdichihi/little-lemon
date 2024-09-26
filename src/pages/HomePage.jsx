import React from "react";
import Hero from "../sections/hero/Hero";
import Highlights from "../sections/highlights/Highlights";
import Testimonials from "../sections/testimonials/Testimonials";
import About from "../sections/about/About";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Hero
        text={
          "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist."
        }
        showButton
        onClick={() => {
          navigate("/booking");
        }}
      />
      <Highlights />
      <Testimonials />
      <About />
    </>
  );
};

export default HomePage;

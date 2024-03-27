import React from "react";
import multiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/about.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${multiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          "Welcome to MehdiPizzas, where passion for pizza meets convenience.{" "}
          <br /> At MehdiPizzas, we believe in crafting not just pizzas, but
          experiences that delight your taste buds and bring joy to your table.{" "}
          <br />
          Our journey began with a simple idea: to create delicious,
          high-quality pizzas using the finest ingredients and authentic
          recipes. <br />
          Each pizza is carefully handcrafted by our skilled chefs, ensuring
          every bite is bursting with flavor and freshness. But our commitment
          goes beyond just great pizza. We're dedicated to providing exceptional
          service and convenience to our customers. Whether you're ordering
          online for delivery or stopping by our cozy restaurant, we strive to
          make your experience seamless and enjoyable. <br />
          At MehdiPizzas, we're not just a pizza restaurant. We're a part of
          your community, a place where friends and families gather to share
          moments of joy and laughter over a piping hot slice of pizza. Join us
          on this delicious journey, and let us be your go-to destination for
          all your pizza cravings."
        </p>
      </div>
    </div>
  );
}

export default About;

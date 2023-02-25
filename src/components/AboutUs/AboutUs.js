import React from 'react';
import './AboutUs.module.css';
import { Link } from 'react-router-dom';


function AboutUs() {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis sapien id elit faucibus, at tristique nunc mollis. Vivamus eget congue lacus, ut pellentesque ipsum. Sed non metus quis mi placerat bibendum. Integer condimentum suscipit quam, nec malesuada risus mattis sed.
      </p>
      <p>
        In hac habitasse platea dictumst. Sed vel lobortis velit. Donec et mi augue. Nulla facilisi. Nullam at ultrices elit. Integer nec dignissim elit, in aliquam tellus. Sed posuere augue ut tortor fermentum, id malesuada tellus dapibus. Sed sit amet lectus in velit hendrerit aliquet. Proin pharetra nibh justo, vitae dictum augue congue id. Sed vel neque sit amet ipsum ultrices elementum. In eget purus et augue consectetur pharetra. Suspendisse potenti.
      </p>
      <br />
      <Link to="/"> Home </Link>
    </div>
  );
}

export default AboutUs;
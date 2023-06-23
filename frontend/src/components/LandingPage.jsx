import React from 'react';
import '../styles/landingpage.css'; // Import the CSS file for styling

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="hero" className="hero-section">
        <div className="hero-content">
          <h1>Capturing Beautiful Moments</h1>
          <p>Preserving Memories to Last a Lifetime</p>
          <a href="#contact" className="btn">Get in Touch</a>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="container">
          <h2>About Me</h2>
          <p>
            Welcome! I am a passionate photographer based in Liverpool, dedicated to capturing the beauty and essence of everyday life. With each click of the shutter, I freeze moments that will be cherished forever in timeless images.
          </p>
          <p>
            Unlike staged photography, I believe in capturing authentic, candid moments. I want you to look back at your photos and remember the genuine happiness and emotions you experienced. That's why I avoid excessive editing and Photoshop. I embrace your unique beauty, as it truly reflects who you are. Your partner, friends, and family fell in love with the real you, and that's what I aim to capture.
          </p>
          <p>
            "Accidentally on purpose" is not just a business name for me; it's a philosophy. Life unfolds naturally, and my role is to be there intentionally, ready to seize those serendipitous moments. I hope my photographs serve as a window to the joy and authenticity of your life, frozen in time for you to relive and cherish.
          </p>
          <p>
            I understand the debates about living in the moment versus capturing it, but I've come to realize the power and significance of photographs. They become our treasures, bringing back memories and emotions long after they have passed. If something brings you joy, capture it, for one day it may be the only reminder you have. I can't wait to connect with you and embark on this wonderful journey together.
          </p>
          <p>Looking forward to hearing from you,</p>
          <p>Daisy</p>
        </div>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} Daisy Photography</p>
      </footer>
    </div>
  );
};

export default LandingPage;

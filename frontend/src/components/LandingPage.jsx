import React from "react";
import "../styles/landingpage.css"; // Import the CSS file for styling

const LandingPage = () => {
  // Add a boolean flag to indicate whether the site is under construction
  const isUnderConstruction = false;

  // Define the content to be displayed when the site is under construction
  const underConstructionContent = (
    <div className="under-construction-container">
      <div className="under-construction-content">
        <h2 className="under-construction-heading">
          Website Under Construction
        </h2>
        <p className="under-construction-text">
          Thank you for visiting Accidentally on Purposy by Daisy. We are
          currently working on our website to bring you an exceptional
          photography experience. In the meantime, please feel free to contact
          us for any inquiries or bookings:
        </p>
        <img className="hero-section" src="./assets/contact.jpeg" alt='' />

        <ul className="contact-details">
          <li>Email: AccidentallyOnPurposeByDaisy@Hotmail.com</li>
          <li>Phone: 07792-805278</li>
        </ul>
      </div>
    </div>
  );

  // Define the regular content to be displayed when the site is not under construction
  const regularContent = (
    <div className="landing-page">
      <header>
        <nav>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <section id="hero" className="hero-section">
        <div className="hero-content">
         
        </div>
      </section>

      <section id="about" className="about-section">
      <div className="under-construction-container">
      <div className="under-construction-content">
        <h2 className="under-construction-heading">
          Website Under Construction
        </h2>
        <p className="under-construction-text">
          Thank you for visiting Accidentally on Purposy by Daisy. We are
          currently working on our website to bring you an exceptional
          photography experience. In the meantime, please feel free to contact
          us for any inquiries or bookings:
        </p>
        <img className="hero-section" src="./assets/contact.jpeg" alt='' />

        <ul className="contact-details">
        <li>Email: AccidentallyOnPurposeByDaisy@Hotmail.com</li>
          <li>Phone: 07792-805278</li>
        </ul>
      </div>
    </div>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} Daisy Photography</p>
      </footer>
    </div>
  );

  return (
    <div>
      {/* Conditionally render the appropriate content based on the isUnderConstruction flag */}
      {isUnderConstruction ? underConstructionContent : regularContent}
    </div>
  );
};

export default LandingPage;

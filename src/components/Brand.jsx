import { useState } from "react";
import { Card } from "react-bootstrap";
import imgOne from "../assets/images/brand-img-1.png";
import imgTwo from "../assets/images/customized-interface-image.png";
import imgThree from "../assets/images/power-up-protection-image.png";
import imgFour from "../assets/images/secure-app-ecosystem.png";
import imgFive from "../assets/images/easy-to-use-interface-image.png";
import '../assets/css/Brand.css';

const sections = [
  {
    title: "Effortless kiosk deployment & management",
    content: "Deploy kiosk-enabled devices straight out of the box. Flash a custom Android Enterprise, Samsung Knox or ROM with Hexnode App on the devices by collaborating with OEM vendors who provide specially configured ROMs.",
    image: imgOne,
    tooltip: "Effortless deployment",
  },
  {
    title: "Customized interface for brand visibility",
    content: "Create a locked-down environment with customized interface. Maximize brand visibility and leave a lasting impression by showcasing products, services and key messages directly to users through the customized interface.",
    image: imgTwo,
    tooltip: "Branded UI experience",
  },
  {
    title: "What more can you do with Hexnode kiosk?",
    content: "Ensure compliance of your devices by remotely deploying the latest OS version while the device is still in kiosk mode. Prevent your data from falling into the wrong hands even in case of device loss/theft with the various remote management features.",
    image: imgThree,
    tooltip: "Advanced security",
  },
  {
    title: "Secure and update your app ecosystem",
    content: "Streamline the deployment and management on apps on your kiosk devices. Save your time and effort, ensure security and improve your efficiency using Hexnode’s silent app installation and update features.",
    image: imgFour,
    tooltip: "Seamless app updates",
  },
  {
    title: "Provide an easy-to-use interface for end-users",
    content: "Give your end-users the power to control their devices without overwhelming them with options. An intuitive interface to let them access only the essential settings they need. Make it easy for them to unlock the full potential of your devices hassle-free.",
    image: imgFive,
    tooltip: "Easy to use interface",
  },
];

const Brand = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="brand-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="brand-title">
              <h3>What additional possibilities does the Kiosk mode offer?</h3>
            </div>
            <div className="row">
              <div className="col-md-5">
                <div className="brand-image">
                   <img loading='lazy' src={sections[selectedIndex].image} alt={sections[selectedIndex].title} className="img-fluid" />
                  
                  {/* Tooltip */}
                  <div className="tooltip-box">
                    <p className="mb-0">{sections[selectedIndex].tooltip}</p>
                   
                  </div>
                </div>
              </div>

              <div className="col-md-7">
                <div className="content-container">
                  {sections.map((section, index) => (
                    <Card
                      key={index}
                      className="mb-3 brandSideCard"
                      onClick={() => setSelectedIndex(index)}
                      style={{
                        cursor: "pointer",
                        border: selectedIndex === index ? "2px solid #000" : "1px solid #ddd",
                      }}
                    >
                      <Card.Header style={{ fontWeight: "bold" }}>{section.title}</Card.Header>
                      {selectedIndex === index && (
                        <Card.Body>
                          <div className="brandSideContent">
                            <p>{section.content}</p>
                          </div>

                          <div className="creditCard">
                            <p className="text-start fw-normal">
                              <span className="tryFor">
                                TRY FOR FREE <span className="arrow">&gt;</span>
                              </span>
                            </p>
                          </div>
                        </Card.Body>
                      )}
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;

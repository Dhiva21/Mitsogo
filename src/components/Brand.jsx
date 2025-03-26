import { useState } from "react";
import { Card } from "react-bootstrap";
import singleApp from "../assets/images/single-app-kios-image.png";
import multiApp from "../assets/images/multi-app-kiosk-image.png";
import '../assets/css/Brand.css'

const sections = [
  {
    title: "Customized interface for brand visibility",
    content: "Create a locked-down environment with customized interface. Maximize brand visibility and leave a lasting impression by showcasing products, services and key messages directly to users through the customized interface.",
    image: singleApp,
  },
  {
    title: "Secure and update your app ecosystem",
    content: "Ensure your applications remain up-to-date...",
    image: multiApp,
  },
  {
    title: "Provide an easy-to-use interface for end-users",
    content: "Simplify navigation and enhance user experience...",
   image: multiApp,
    },
  {
    title: "Secure and update your app ecosystem",
    content: "Ensure your applications remain up-to-date...",
    image: multiApp,
  },
  {
    title: "Provide an easy-to-use interface for end-users",
    content: "Simplify navigation and enhance user experience...",
   image: multiApp,
  },
];

const Brand = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

    return (
       <section className="brand-section">

      <div className="container ">
          <div className="row">
              <div className="col-md-12">
                  <div className="brand-title">
                      <h3>What additional possibilities does the Kiosk mode offer?</h3>
                  </div>
                  <div className="row">
                         <div className="col-md-5">
                   <div className="brand-image" >
        <img
          src={sections[selectedIndex].image}
          alt="Kiosk" className="img-fluid"
          
        />
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
            {selectedIndex === index && <Card.Body>{section.content}</Card.Body>}
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

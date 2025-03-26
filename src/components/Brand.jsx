import { useState } from "react";
import { Card } from "react-bootstrap";
import imgOne from "../assets/images/brand-img-1.png";
import imgTwo from "../assets/images/brand-img-1.png";
import '../assets/css/Brand.css'

const sections = [
  {
    title: "Customized interface for brand visibility",
    content: "Create a locked-down environment with customized interface. Maximize brand visibility and leave a lasting impression by showcasing products, services and key messages directly to users through the customized interface.",
    image: imgOne,
  },
  {
    title: "Secure and update your app ecosystem",
    content: "Ensure your applications remain up-to-date...",
    image: imgOne,
  },
  {
    title: "Provide an easy-to-use interface for end-users",
    content: "Simplify navigation and enhance user experience...",
   image: imgOne,
    },
  {
    title: "Secure and update your app ecosystem",
    content: "Ensure your applications remain up-to-date...",
    image: imgOne,
  },
  {
    title: "Provide an easy-to-use interface for end-users",
    content: "Simplify navigation and enhance user experience...",
   image: imgOne,
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

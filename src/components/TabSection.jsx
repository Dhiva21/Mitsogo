import React, { useState, useEffect } from "react";
import { Tabs, Tab, Row, Col, Accordion } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import singleApp from "../assets/images/single-app-kios-image.png";
import multiApp from "../assets/images/multi-app-kiosk-image.png";
import "../assets/css/TabSection.css";

const TabSection = () => {
  const [key, setKey] = useState("single");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const tabsData = [
    {
      eventKey: "single",
      title: "Single App Kiosk",
      heading: "Powerful Single-App Kiosk solutions for enhanced control",
      image: singleApp,
      features: [
        "Provision the devices to run one specialized application, with limited functionalities.",
        "Customize the device settings to cater to a specific use-case each time.",
        "Use advanced kiosk settings for additional restrictions or expanded functionalities.",
        "Empower administrators with full control over kiosk devices.",
      ],
    },
    {
      eventKey: "multi",
      title: "Multi-App Kiosk",
      heading: "Flexible Multi-App Kiosk solutions for versatile usage",
      image: multiApp,
      features: [
        "Run multiple applications on a single kiosk device securely.",
        "Switch between apps with predefined user permissions.",
        "Customize user access based on security policies.",
        "Enhanced device control for IT administrators.",
      ],
    },
    {
      eventKey: "web",
      title: "Web-based Kiosk",
      heading: "Secure Web-based Kiosk for browser-based applications",
      image: singleApp,
      features: [
        "Lock devices to a single website or a set of web applications.",
        "Prevent unauthorized browsing with web filtering.",
        "Ideal for self-service kiosks and digital check-ins.",
        "Ensures a seamless and controlled user experience.",
      ],
    },
    {
      eventKey: "digital",
      title: "Digital Signages",
      heading: "Engaging Digital Signage solutions for displays",
      image: singleApp,
      features: [
        "Turn devices into interactive digital signage displays.",
        "Schedule and automate content playback.",
        "Supports images, videos, and web content.",
        "Remote management and content updates.",
      ],
    },
    {
      eventKey: "asam",
      title: "ASAM Kiosk",
      heading: "ASAM Kiosk - Advanced Security & Access Management",
      image: singleApp,
      features: [
        "Secure access management for restricted environments.",
        "Supports biometric and RFID authentication.",
        "Monitor and log kiosk activities in real-time.",
        "Ideal for corporate and government institutions.",
      ],
    },
  ];

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="tabSectionTitle">
              <h2>Specific kiosk modes for unique use cases</h2>
            </div>

            {isMobile ? (
              <Accordion defaultActiveKey="0">
                {tabsData.map((tab, index) => (
                  <Accordion.Item eventKey={index.toString()} key={tab.eventKey}>
                    <Accordion.Header>{tab.title}</Accordion.Header>
                    <Accordion.Body>
                      <motion.div
                        key={tab.eventKey}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >  

                      <div className="tabContentTitle">
                                                  <h2>{tab.heading}</h2>
                                                  </div>
                        <ul>
                          {tab.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                        <div className="tabContentImg">
                            <img src={tab.image} alt={tab.title} className="img-fluid" />
                            </div>
                      </motion.div>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            ) : (
              <Tabs id="kiosk-tabs" activeKey={key} onSelect={(k) => setKey(k)} className="tabSection">
                {tabsData.map((tab) => (
                  <Tab eventKey={tab.eventKey} title={tab.title} key={tab.eventKey}>
                    <AnimatePresence mode="wait">
                      {key === tab.eventKey && (
                        <motion.div
                          key={tab.eventKey}
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 50 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                          <Row className="align-items-center">
                            <Col md={7}>
                            <div className="tabContentTitle">
                            <h2>{tab.heading}</h2>
                            </div>
                              
                              <ul className="tabContentList">
                                {tab.features.map((feature, index) => (
                                  <li key={index}>{feature}</li>
                                ))}
                              </ul>
                            </Col>
                            <Col md={5}>
                            <div className="tabContentImg">
                            <img src={tab.image} alt={tab.title} className="img-fluid" />
                            </div>
                              
                            </Col>
                          </Row>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Tab>
                ))}
              </Tabs>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabSection;

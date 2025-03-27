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
      heading: "Elevate efficiency with Multi-App Kiosk",
      image: multiApp,
      features: [
        "Limit device access to approved apps, ensuring focus and productivity.",
        "With default phone and settings app inclusion, reduce distractions by providing users access to essential functions only.",
        "With Hexnode's peripheral settings admins can allow necessary device settings while retaining control.",
        "Simplify device management while empowering user productivity by deploying Multi-App Kiosk Mode.",
      ],
    },
    {
      eventKey: "web",
      title: "Web-based Kiosk",
      heading: "Explore the new way to manage web apps and websites",
      image: singleApp,
      features: [
       "Let users access essential and approved web apps, website and files only.",
        "Make the best use of website kiosk with Hexnode's advanced settings.",
        "Tailor your experience to match your unique use case.",
        "From configuring toolbar options to scheduling page refresh, remote debugging, and limiting incognito tabs, take full control of your website kiosk experience.",
      ],
    },
    {
      eventKey: "digital",
      title: "Digital Signages",
      heading: "Capture attention with Digital Signage Kiosks",
      image: singleApp,
      features: [
        "Transform your devices into captivating digital signage kiosks that grab attention.",
        "Engage your audience with vibrant images and seamless video streaming.",
        "Customize media files with trimming, muting, and background music.",
        "Advertise and show off your brand aesthetics to attract customers in different ways.",
         "Take control with Hexnode to reestablish your brand's presence.",
      ],
    },
    {
      eventKey: "asam",
      title: "ASAM Kiosk",
      heading: "Unlock the power of Autonomous Single App Mode (ASAM)",
      image: singleApp,
      features: [
        "A feature that empowers your iOS app to seamlessly secure itself in the foreground.",
        "Transform tablets or devices into dedicated point-of-sale (POS) systems by preventing interruptions from other applications or notifications.",
        "Create focused, efficient and secure digital environments to match your requirements.",
        "Configure ASAM effortlessly and elevate your user experience like never before.",
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
  <div className="tabContentImg">
                             <img loading='lazy' src={tab.image} alt={tab.title} className="img-fluid" />
                            </div>
                      <div className="tabContentTitle">
                                                  <h2>{tab.heading}</h2>
                                                  </div>
                        <ul className="tabContentList">
                          {tab.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      
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
                            <Col xl={7} md={12} className="order-xl-1 order-md-2" >
                            <div className="tabContentTitle">
                            <h2>{tab.heading}</h2>
                            </div>
                              
                              <ul className="tabContentList ">
                                {tab.features.map((feature, index) => (
                                  <li key={index}>{feature}</li>
                                ))}
                              </ul>
                            </Col>
                            <Col xl={5} md={12} className=" order-xl-2 order-md-1">
                            <div className="tabContentImg">
                             <img loading='lazy' src={tab.image} alt={tab.title} className="img-fluid" />
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

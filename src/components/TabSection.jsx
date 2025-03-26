import React from 'react'
import { useState } from "react";
import { Tabs, Tab, Row, Col } from "react-bootstrap";
import singleApp from "../assets/images/single-app-kios-image.png";
import multiApp from "../assets/images/multi-app-kiosk-image.png";
import { motion } from "framer-motion";
import '../assets/css/TabSection.css'


const TabSection = () => {
    const [key, setKey] = useState("single");
  return <>
    
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className='tabSectionTitle'>
               <h2>Specific kiosk modes for unique use cases</h2>
            </div>

                   <Tabs
        id="kiosk-tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="tabSection"
      >
        <Tab eventKey="single" title="Single App Kiosk">
        <motion.div
            key={key}
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: 50 }} 
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Row className="align-items-center">
              <Col md={7}>
                <div className="tabContentTitle">
                  <h2>Powerful Single-App Kiosk solutions for enhanced control</h2>
                </div>
                <ul className="tabContentList">
                  <li>Provision the devices to run one specialized application, with limited functionalities.</li>
                  <li>Customize the device settings to cater to a specific use-case each time.</li>
                  <li>Use advanced kiosk settings for additional restrictions or expanded functionalities.</li>
                  <li>Empower administrators with full control over kiosk devices.</li>
                </ul>
              </Col>
              <Col md={5}>
                <div className="tabContentImg">
                  <img src={singleApp} alt="Kiosk" className="img-fluid" />
                </div>
              </Col>
            </Row>
          </motion.div>
        </Tab>
        <Tab eventKey="multi" title="Multi-App Kiosk">
         <motion.div
            key={key}
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: 50 }} 
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Row className="align-items-center">
              <Col md={7}>
                <div className="tabContentTitle">
                  <h2>Powerful Single-App Kiosk solutions for enhanced control</h2>
                </div>
                <ul className="tabContentList">
                  <li>Provision the devices to run one specialized application, with limited functionalities.</li>
                  <li>Customize the device settings to cater to a specific use-case each time.</li>
                  <li>Use advanced kiosk settings for additional restrictions or expanded functionalities.</li>
                  <li>Empower administrators with full control over kiosk devices.</li>
                </ul>
              </Col>
              <Col md={5}>
                <div className="tabContentImg">
                  <img src={multiApp} alt="Multi" className="img-fluid" />
                </div>
              </Col>
            </Row>
          </motion.div>
        </Tab>
        <Tab eventKey="web" title="Web-based Kiosk">
           <motion.div
            key={key}
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: 50 }} 
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Row className="align-items-center">
              <Col md={7}>
                <div className="tabContentTitle">
                  <h2>Powerful Single-App Kiosk solutions for enhanced control</h2>
                </div>
                <ul className="tabContentList">
                  <li>Provision the devices to run one specialized application, with limited functionalities.</li>
                  <li>Customize the device settings to cater to a specific use-case each time.</li>
                  <li>Use advanced kiosk settings for additional restrictions or expanded functionalities.</li>
                  <li>Empower administrators with full control over kiosk devices.</li>
                </ul>
              </Col>
              <Col md={5}>
                <div className="tabContentImg">
                  <img src={singleApp} alt="Kiosk" className="img-fluid" />
                </div>
              </Col>
            </Row>
          </motion.div>
        </Tab>
        <Tab eventKey="digital" title="Digital Signages">
           <motion.div
            key={key}
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: 50 }} 
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Row className="align-items-center">
              <Col md={7}>
                <div className="tabContentTitle">
                  <h2>Powerful Single-App Kiosk solutions for enhanced control</h2>
                </div>
                <ul className="tabContentList">
                  <li>Provision the devices to run one specialized application, with limited functionalities.</li>
                  <li>Customize the device settings to cater to a specific use-case each time.</li>
                  <li>Use advanced kiosk settings for additional restrictions or expanded functionalities.</li>
                  <li>Empower administrators with full control over kiosk devices.</li>
                </ul>
              </Col>
              <Col md={5}>
                <div className="tabContentImg">
                  <img src={singleApp} alt="Kiosk" className="img-fluid" />
                </div>
              </Col>
            </Row>
          </motion.div>
        </Tab>
        <Tab eventKey="asam" title="ASAM Kiosk">
             <motion.div
            key={key}
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: 50 }} 
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Row className="align-items-center">
              <Col md={7}>
                <div className="tabContentTitle">
                  <h2>Powerful Single-App Kiosk solutions for enhanced control</h2>
                </div>
                <ul className="tabContentList">
                  <li>Provision the devices to run one specialized application, with limited functionalities.</li>
                  <li>Customize the device settings to cater to a specific use-case each time.</li>
                  <li>Use advanced kiosk settings for additional restrictions or expanded functionalities.</li>
                  <li>Empower administrators with full control over kiosk devices.</li>
                </ul>
              </Col>
              <Col md={5}>
                <div className="tabContentImg">
                  <img src={singleApp} alt="Kiosk" className="img-fluid" />
                </div>
              </Col>
            </Row>
          </motion.div>
        </Tab>
      </Tabs>
            </div>
         </div>
       </div>
    </section>
  
  </>
}

export default TabSection
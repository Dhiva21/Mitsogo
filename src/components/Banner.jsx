import React,{useState,useEffect} from 'react'
import { Navbar, Nav, Container, Row, Col,Offcanvas } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import dark_logo from "../assets/images/logo.svg";
import white_logo from "../assets/images/white_logo.svg";
import bannerImg from "../assets/images/banner_image.png";
import forrester from "../assets/images/forrester.png";
import gartner from "../assets/images/gartner.png";
import idc from "../assets/images/idc.png";
import '../assets/css/Banner.css'

const Banner = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scroll, setScroll] = useState(false);
    const [hover, setHover] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScroll(true);
          
            } else {
                setScroll(false);
        
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);








    return <>
     
        <section className='bannerBg'>
            <div className="container-fluid">
                <div className="row mb-5">
                    <div className="col-md-12">
                                              <Navbar
                            expand="lg"
                            className={`fixed-top ${scroll || hover ? "scrolled-navbar" : ""}`}
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                          >
                            <Container className="d-flex justify-content-between">
                              {/* Logo */}
                              <Navbar.Brand href="#">
                                <img
                                  loading="lazy"
                                  src={scroll || hover ? dark_logo : white_logo}
                                  alt="Logo"
                                  className={`logoWidth ${scroll || hover ? "scrolled-logo" : ""}`}
                                />
                              </Navbar.Brand>

                              
                              <Navbar.Toggle
                                aria-controls="offcanvasNavbar"
                                onClick={() => setIsOpen(!isOpen)}
                              >
                                <i
                                  className={`fa ${isOpen ? "fa-times" : "fa-bars"}`}
                                  style={{
                                    color: isOpen || scroll ? "black" : "white", 
                                    fontSize: "24px",
                                  }}
                                />
                              </Navbar.Toggle>

                              <Navbar.Offcanvas
                                id="offcanvasNavbar"
                                placement="end"
                                show={isOpen}
                                onHide={() => setIsOpen(false)}
                              >
                                <Offcanvas.Header closeButton>
                                  <Offcanvas.Title></Offcanvas.Title>
                                </Offcanvas.Header>

                                <Offcanvas.Body>
                                  <Nav className="ms-auto">
                                    <div className="trialBtn">
                                      <button>14 Days Free Trial</button>
                                    </div>
                                  </Nav>
                                </Offcanvas.Body>
                              </Navbar.Offcanvas>
                            </Container>
                          </Navbar>

                     </div>
                </div>
                <div className="container pt_40">
                    <div className="row align-items-center justify-content-center">
                    <div className="col-xl-5 col-lg-7 col-md-9 order-xl-1 order-2  mb-3">
                        <div className='bannerContent'>
                            <h3>
                                Turn your devices into kiosks in a few minutes with Hexnode UEM
                            </h3>
                        </div>
                        <div>
                            <div className="row">
                                <div className="col-xl-7 col-lg-6 col-md-6 pe-xl-0 mb-3">
                                       <div className='trialForm'>
                                <Form.Control
                                            required
                                            type="text"
                                            placeholder="Your Work Mail"
                                        
                                        />
                            </div>
                                </div>
                                <div className="col-xl-5 col-lg-6 col-md-6 col-12 ps-xl-1">
                                      <div className='trialBtn trialBtn2'>
                                        <button>
                                        GET STARTED NOW!                                       
                                                    </button>
                                            </div>
                                 </div>
                            </div>
                         
                         
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-8 order-xl-2 order-lg-1 offset-xl-1">
                        <div>
                             <img loading='lazy' src={bannerImg}  alt="Banner" className='img-fluid' />
                        </div>
                       
                    </div>
                    </div>
                           </div>
               
            </div>
        </section>
    
        <section className='bannerBelowBg'>
            <div className="container">
                   <div className="row">
                        <div className="col-md-4 ">
                            <div className='rightContent'>
                               <div className='bannerBelowContent'>
                                <div className='mobileResCenter'>
                                 <img loading='lazy' src={idc} alt="IDC" className='img-fluid' />
                                <p>
                                    Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.
                                </p>
                                </div>
                               
                               
                            </div>
                            <div className='sideBorder'>
                            </div>
                            </div>
                           
                        </div>
                         <div className="col-md-4 ">
                            <div className='rightContent'>
                               <div className='bannerBelowContent'>
                               <div className='mobileResCenter'>
                                 <img loading='lazy' src={gartner} alt="Gartner" className='img-fluid' />
                                <p>
                                   Hexnode was recognized in the 2025 Gartner® Market Guide for Unified Endpoint Management Tools.
                                </p>
                                </div>
                            </div>
                            <div className='sideBorder'>
                            </div>
                            </div>
                           
                        </div>
                         <div className="col-md-4">
                            <div className='rightContent'>
                               <div className='bannerBelowContent'>
                               <div className='mobileResCenter'>
                                 <img loading='lazy' src={forrester} alt="Forrester" className='img-fluid' />
                                <p>
                                   Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023.
                                </p>
                            </div>
                            </div>
                            </div>
                           
                          </div>
  </div>
            </div>
    </section>
    
    </>
}

export default Banner
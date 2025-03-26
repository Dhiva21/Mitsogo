import React from 'react'
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import logo from "../assets/images/logo.svg";
import bannerImg from "../assets/images/banner_image.png";
import forrester from "../assets/images/forrester.png";
import gartner from "../assets/images/gartner.png";
import idc from "../assets/images/idc.png";
import '../assets/css/Banner.css'

const Banner = () => {
    return <>
     
        <section className='bannerBg'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                           <Navbar  className='bg-light' expand="lg">
                            <Container>
                                <Row className='w-100 align-items-baseline'>
                                    <Col md={8} sm={12} xs={8}>
                                       <Navbar.Brand href="#">
                                    <div>
                                        <img src={logo} alt="Logo"  className='img-fluid logoWidth' />
                                    </div>
                                        </Navbar.Brand>
                                    </Col>
                                    <Col md={4} sm={12} xs={4}>
                                          <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                         <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="ms-auto">
                                        <div className='trialBtn'>
                                    <button>
                                       14 Days Free Trial                                         
                                                </button>
                                        </div>
                                       
          </Nav>
                                    </Navbar.Collapse>
                                        </Col>
                             
      
       
                                    </Row>
      </Container>
    </Navbar>
                     </div>
                </div>
                <div className="container">
 <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className='bannerContent'>
                            <h3>
                                Turn your devices into kiosks in a few minutes with Hexnode UEM
                            </h3>
                        </div>
                        <div>
                            <div className="row">
                                <div className="col-md-6 pe-0">
                                       <div className='trialForm'>
                                <Form.Control
                                            required
                                            type="text"
                                            placeholder="Your Work Mail"
                                        
                                        />
                            </div>
                                </div>
                                <div className="col-md-6 ps-1">
                                      <div className='trialBtn trialBtn2'>
                                        <button>
                                        GET STARTED NOW!                                       
                                                    </button>
                                            </div>
                                 </div>
                            </div>
                         
                         
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <img src={bannerImg} alt="Banner" className='img-fluid' />
                        </div>
                       
                    </div>
                    </div>
                           </div>
               
            </div>
        </section>
    
        <section className='bannerBelowBg'>
            <div className="container">
                   <div className="row">
                        <div className="col-md-4">
                            <div className='rightBorder'>
                               <div className='bannerBelowContent'>
                                <img src={idc} alt="IDC" className='img-fluid' />
                                <p>
                                    Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.
                                </p>
                            </div>
                            </div>
                           
                        </div>
                         <div className="col-md-4">
                            <div className='rightBorder'>
                               <div className='bannerBelowContent'>
                                <img src={gartner} alt="Gartner" className='img-fluid' />
                                <p>
                                   Hexnode was recognized in the 2025 Gartner® Market Guide for Unified Endpoint Management Tools.
                                </p>
                            </div>
                            </div>
                           
                        </div>
                         <div className="col-md-4">
                            <div className=''>
                               <div className='bannerBelowContent'>
                                <img src={forrester} alt="Forrester" className='img-fluid' />
                                <p>
                                   Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023.
                                </p>
                            </div>
                            </div>
                           
                          </div>
  </div>
            </div>
    </section>
    
    </>
}

export default Banner
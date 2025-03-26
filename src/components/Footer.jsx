import React from 'react'
import Form from 'react-bootstrap/Form';
import '../assets/css/Footer.css'
const Footer = () => {
  return (
   <section className='footerBg'>
      <div className="container">
          <div className="row">
             <div className="col-md-12">
                <div className='footer-title'>
                     <h3>Sign up and try Hexnode free for 14 days!</h3>
                </div>
                <div className='footerSign'>
                <div className="row">
                                <div className="col-md-6 pe-xl-0">
                                       <div className='footerForm'>
                                <Form.Control
                                            required
                                            type="text"
                                            placeholder="Your Work Mail"
                                        
                                        />
                            </div>
                                </div>
                                <div className="col-md-6 ps-xl-1">
                                      <div className='footerBtn'>
                                        <button>
                                        GET STARTED NOW!                                       
                                                    </button>
                                            </div>
                                 </div>
                            </div>
                                                <div className="creditCard">
                    <p>
                        No credit cards required . 
                        <span className="request">
                         Request a demo <span className="arrow">&gt;</span>
                        </span>
                    </p>
                    </div>
                
                </div>
             
                      
             </div>
          </div>
      </div>
   </section>
  )
}

export default Footer

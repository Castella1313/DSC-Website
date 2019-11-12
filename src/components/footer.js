import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';


const s1={
    background: '#303C42',
    color: '#FFFFFF',
    textAlign: 'center',
    padding: '5% 5% 5% 5%'
}
const s2={
    background: '#C4C4C4'
}

class Footer extends Component{
    render()
    {
        return(
          <footer className="page-footer">
                <Row style={{marginTop:'60vh', width:'100%'}}>
                  <style dangerouslySetInnerHTML={{__html: `
                      @media (max-width: 640px) {
                        .footerGrey {
                          height: 30vh;
                        }
                      }
                      `}} />
                        <Col md={6} style={s1}>
                        <h1>Contact Us</h1>
                        <p style={{
                            marginTop: '50px'
                          }}>
                        Add Number and posts of Fahad sir, Lakshya, Ayush and Tushar, Shubham and Satyam, in a proper list :),
                        and add social links and address here, you can use right side as map.
                        </p>
                        </Col>
                        <Col md={6} style={s2} className="footerGrey">
                        </Col>
                  </Row>
          </footer>
        );
    }
}

export default Footer;

import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';


class Intro extends Component{

    render()
    {
        return(
            <Container>
              <br />
              <br />
              <Row>
                <Col md={{ size:3, offset:1 }}>
                  <img alt="logo" style= {{
                    display: 'block',
                    margin: 'auto',
                    position: 'relative'
                  }} src='./images/1.png' width="50%" height="80%" />
                </Col>
                <Col md={6}>
                  <img alt="dsc" style= {{position: 'relative',
                                display: 'block',
                                margin: 'auto'
                              }} src='./images/2.png' width="100%" height="60%" />
                </Col>
              </Row>
              <br />
              <Row className="d-md-none">
                <Col xs={{ size:6 }}>
                  <Button color="secondry" size="lg" block >About Us</Button>
                </Col>
                <Col xs={{ size:6 }}>
                  <Button color="secondary" size="lg" block >Contact Us</Button>
                </Col>
              </Row>
              <br />
              <Row className="d-none d-md-block" >
                <Col xs={0} md={12}>
                  <p style={{textAlign:'center',fontStyle:'normal',fontWeight: '300',fontSize: '14px',
                  lineHeight: '19px',color: 'rgba(0, 0, 0, 0.5)',position:'relative'}}>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisl dui, sollicitudin
                       ultrices hendrerit<br/> vel, dignissim in arcu. Phasellus bibendum aliquet pellentesque. Curabitur
                       aliquet scelerisque tempor.<br/> Pellentesque aliquam elit a metus imperdiet euismod.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col md={{ size:8, offset:2 }}>
                  <img alt="intro_Pic" style={{
                    position: 'relative',
                    display: 'block',
                    margin: 'auto'
                    }} src='./images/intro-pic.png' width="100%" height="100%" />
                </Col>
              </Row>
              <br />
              <br />
              <br />
              <br />
            </Container>
        );
    }
}

export default Intro;

import React,{Component} from 'react';
import { Row, Col} from 'reactstrap';

const s3={
    position: 'relative',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '48px',
    lineHeight: '65px',
    textAlign: 'center'
}

class About extends Component{
    render(){
        return(
          <>
          <style dangerouslySetInnerHTML={{__html: `
              .aboutus {
                background-color: #FFF;
                color: rgba(0, 0, 0, 0.6);
              }
              .columnContent {
                text-align: center;
              }
                  @media (max-width: 640px) {
                    .aboutus {
                      background-color: #F44336;
                      color: white;
                      font-size: 0.8em;
                     }
                    .columnImg {
                      position: absolute;
                      margin-top: 380px;
                      margin-left: 10%;
                    }
                    .columnContent {
                      height: 499px;
                      padding: 0 10% 0 10%;
                    }
                  }
                `}} />
            <Row className="aboutus" style={{display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          maxWidth: '100%'
                          }} >
                          <Row style={{
                              width: '100%'
                            }}>
                            <Col style={{
                                width: '100%'
                              }} md={{size:11,offset:1}}>
                              <h1 style={s3}>About Us</h1>
                            </Col>
                          </Row>
                          <Row style={{
                              width: '100%',
                              marginLeft: '5%',
                              marginTop: '10%'
                            }}>
                            <Col md={{size:4, offset:2}} >
                              <p className="columnContent">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisl dui, sollicitudin ultrices
                              hendrerit vel, dignissim in arcu. Phasellus bibendum aliquet pellentesque. Curabitur aliquet scelerisque tempor.
                              Pellentesque aliquam elit a metus imperdiet euismod. Sed a metus a felis consectetur consequat. Ut a bibendum elit,
                               vitae mattis velit. Mauris vitae felis dolor. Duis porttitor iaculis varius. Quisque leo orci, finibus et
                               sollicitudin a, molestie at dolor. Vestibulum facilisis euismod felis, at commodo arcu iaculis ut. Vivamus
                               efficitur vestibulum odio sit amet porttitor. Aliquam imperdiet sodales odio at blandit. Vivamus rutrum ut
                               eros at tincidunt. Donec pretium dolor ac quam faucibus,
                              et fermentum sapien vehicula. Fusce in sem est. Suspendisse et tortor justo.
                              </p>
                            </Col>
                            <Col className="columnImg" md={{size:4, offset:1}} >
                              <img alt="teamImg1" style={{
                                  marginTop: '0px',
                                  position: 'absolute',
                                  zIndex: '1'
                                }} src="./images/team.jpg" width= '249px' height= '237px' />
                              <img alt="teamImg2" style={{
                                  position: 'absolute',
                                  paddingLeft: '22px',
                                  marginTop: '165px',
                                  zIndex: '2'
                                }} src="./images/team1.jpg" width= '324px' height= '240px' />
                            </Col>
                          </Row>
            </Row>
          </>
        );
    }
}

export default About;

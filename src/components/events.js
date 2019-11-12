import React,{ Component } from 'react';
import {Row, Card, CardText, CardTitle} from  'reactstrap';

const s1={
    position: 'relative',
    width: '70%',
    height: '100%',
    background: '#FFFFFF',
    border: '0.5px solid #000000',
    borderRadius: '20px',
}

const s3={
    position: 'relative',
    width: '90%',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '48px',
    lineHeight: '65px'
}

class Events extends Component{
    render()
    {
        return(
            <Row style={{height: '100%',
              width: '100%',
              marginTop: '20%'
            }}>
            <style dangerouslySetInnerHTML={{__html: `
                .eventsHead {
                  margin-left: 5%;
                }
                .eventsBody {
                  margin-top: 100px;
                  margint-left: -100px
                }
                @media (max-width: 640px) {
                .events {
                  width: 100vw;
                  height: 200px;
                  background-color: #F50057;
                }
                .eventsHead {
                  color: #FFFCFC;
                  height: 100%;
                  margin-left: 5%;
                }
                .eventsBody {
                  margin-top: -100px;
                  margin-left: 10px;
                }
                }
                `}} />
              <div className="row events">
                <h1 style={s3} className="eventsHead">Events</h1>
              </div>
                <Card body style={s1} className="eventsBody">
                  <CardTitle>#1</CardTitle>
                  <CardTitle>Title</CardTitle>
                  <CardText>
                      <p>Date and Time</p>
                      <p>Some brief, content team don’t let me down!</p>
                  </CardText>
                </Card>
            </Row>
        );
    }
}

export default Events;

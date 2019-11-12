import React, { Component } from 'react';
import { Media } from 'reactstrap';

const s4={
    position: 'relative',
    width: '100%',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '48px',
    lineHeight: '65px',
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.6)',
    marginTop:'264px'
}

const s5={
    marginLeft: '10%',
    marginTop:'40px',
    width: '90%'
}

const s1={
    position: 'relative',
    marginTop: '100px',
    marginLeft:'10%',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '30px',
    lineHeight: '41px'
}
const e1={
    position: 'relative',
    width: 'auto',
    height: '40px',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '20px',
    lineHeight: '27px',
    color: '#000000',
    marginLeft:'10%',
    marginTop:'100px'

}
const line1={
    position: 'relative',
    width: '60%',
    height:'0px',
    border: '1px solid rgba(0, 0, 0, 0.5)',
    marginTop:'0px',
    marginLeft:'8%'
}
const line2={
    position: 'relative',
    width: '0px',
    height:'180px',
    border: '1px solid rgba(0, 0, 0, 0.5)',
    marginTop:'40px',
    marginLeft: '50%'
}
const border1={
    border: '1px solid #000000',
    boxSizing: 'border-box',
    borderRadius: '250px'
}

class Team extends Component{

    render() {
        return(
            <div className="row">
              <style dangerouslySetInnerHTML={{__html: `
                  .head1 {
                    margin-top: 40px;
                    margin-left: 15%;
                  }
                  .head2 {
                    margin-top: 40px;
                  }
                  .e2 {
                    position: relative;
                    width: auto;
                    height: 63px;
                    font-style: normal;
                    font-weight: 300;
                    font-size: 13px;
                    color: #000000;
                    margin-left: 8%;
                    margin-top: 30px;
                  }
                        @media (max-width: 640px) {
                          .head {
                            margin-top: 15%;
                            margin-left: -5%;
                          }
                          .headInfo {
                            margin-top: -5%;
                            margin-left: 2%;
                            color: #FFF;
                          }
                          .leadImg {
                            position: absolute;
                            z-index: 3;
                            height: 280px;
                            width: 250px;
                            border-radius: 7px;
                            margin-top: -90px;
                            margin-left: 50px;
                          }
                          .headCard {
                            margin-top: 5%;
                            margin-left: 15%;
                            padding-left: 5%;
                            border-radius: 10px;
                            background-color: #00695C;
                          }
                          .e2 {
                            padding-top: 300px;
                            position: relative;
                            width: auto;
                            height: 100%;
                            font-style: normal;
                            fonts-weight: 300;
                            font-size: 13px;
                            color: #FFF;
                            margin-left: 0%;
                            margin-top: 0px;
                          }
                          .leadInfo {
                            border-radius: 10px;
                            padding-left: 5%;
                            padding-right: 5%;
                            position: relative;
                            background-color: #D32F2F;
                            height: 496px;
                            width: 365px
                          }
                        }
                    `}} />
                <div className="row" style={{width: '100%'}}>
                    <h1 style={s4}>Our Team</h1>
                </div>
                <div className="row d-none d-md-block" style={{width: '100%'}}>
                    <h2 style={s1}>Campus Lead</h2>
                </div>
                <div className="row" style={s5}>
                <Media>
                    <Media left href="#" style={{marginTop:'100px'}}>
                        <img alt="leadImg" className="leadImg" src="./images/demo.png"/>
                    </Media>
                        <Media className="leadInfo" body>
                            <Media className="d-none d-md-block" heading style={e1}>
                                Fahad Sir is God
                            </Media>
                            <div style={line1} className="d-none d-md-block"></div>
                            <p className="e2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisl dui, sollicitudin ultrices hendrerit vel,
                            dignissim in arcu. Phasellus bibendum aliquet pellentesque. Curabitur aliquet scelerisque tempor. Pellentesque
                            aliquam elit a metus imperdiet euismod.
                            Sed a metus a felis consectetur consequat. Ut a bibendum elit, vitae mattis velit
                            </p>
                        </Media>
                </Media>
                </div>
                <div className="row" style={{width: '100%'}}>
                    <h2 style={{fontStyle:'normal',fontWeight: '300',fontSize: '30px',lineHeight:'41px',marginLeft:'10%',marginTop:'129px'}}>Our Heads</h2>
                </div>
                <div className="row" style={{width: '100%'}}>
                    <div className="col col-md-5 headCard">
                    <Media>
                        <Media className="head1 head" left href="#" >
                            <img alt="head1"  src="./images/demo.png" width='133px' height='127px'/>
                        </Media>
                        <Media className="headInfo" body>
                            <Media heading style={{marginTop: '40px'}}>
                                Media heading
                            </Media>
                            <p style={{marginTop: '14px',fontStyle:'normal',fontWeight: '300',fontSize: '13px'}}>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                            sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                            Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                            </p>
                        </Media>
                     </Media>
                    </div>
                    <div className="d-none d-md-block col-md-1">
                      <div style={line2}>
                      </div>
                    </div>
                    <div className="col col-md-5 headCard">
                    <Media>
                        <Media className="head2 head" left href="#">
                            <img alt="head2" src="./images/demo.png" width='133px' height='127px' style={{borderRadius: '7px'}}/>
                        </Media>
                        <Media className="headInfo" body>
                            <Media heading style={{marginTop: '40px'}}>
                                Media heading
                            </Media>
                            <p style={{marginTop: '14px',fontStyle:'normal',fontWeight: '300',fontSize: '13px'}}>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                            sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                            Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                            </p>
                        </Media>
                     </Media>
                    </div>
                </div>
                <div className="row" style={{width: '100%'}}>
                    <h1 style={{fontStyle:'normal',fontWeight: '300',fontSize: '30px',lineHeight:'41px',marginLeft:'10%',marginTop:'129px'}}>Our Coordinators</h1>
                </div>
                <br />
                <br />
                <div className="row" style={{width: '100%'}}>
                    <div className="col col-md-2.5 offset-md-2">
                        <Media left href="#" style={{marginLeft:'10%',marginTop:'42px'}}>
                            <img alt="coordinator1" src="./images/demo.png"  width='133px' height='127px' style={border1} />
                        </Media>
                        <Media body>
                          <Media heading >
                              Name here
                          </Media>
                        </Media>
                    </div>
                    <div className="col col-md-2.5">
                        <Media left href="#" style={{marginTop:'42px'}}>
                            <img alt="coordinator2" src="./images/demo.png"  width='133px' height='127px' style={border1}/>
                        </Media>
                        <Media body>
                          <Media heading >
                              Name here
                          </Media>
                        </Media>
                    </div>
                    <div className="col col-md-2.5">
                        <Media left href="#" style={{marginTop:'42px'}}>
                            <img alt="coordinator3" src="./images/demo.png"  width='133px' height='127px' style={border1}/>
                        </Media>
                        <Media body>
                          <Media heading >
                              Name here
                          </Media>
                        </Media>
                    </div>
                    <div className="col col-md-2.5">
                        <Media left href="#" style={{marginTop:'42px'}}>
                            <img alt="coordinator4" src="./images/demo.png"  width='133px' height='127px' style={border1} />
                        </Media>
                        <Media body>
                          <Media heading >
                              Name here
                          </Media>
                        </Media>
                    </div>
                </div>

            </div>
        );
    }

}
export default Team;

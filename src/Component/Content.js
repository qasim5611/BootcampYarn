import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Container } from 'react-bootstrap';
// import { sendToActionFORRetrive } from '../Redux/Action/action';

export class Welcom extends Component {

  // componentWillMount() {
  //   this.props.sendToActionFORRetrive();
  // }

  render() {
    return (
      <div>
     

        <Container>
        <Row style={{backgroundColor: 'gray'}}>
    {/*............................................Top Left Corner*/}
    <Col xs={12} sm={12} lg={6} md={6}  style={{backgroundColor:'',height:"150px",boxShadow:"1px 1px 3px black"}}>
   
    <center><p style={{ marginTop:"50px", fontFamily:"cursive", fontSize:"50px"}}>Expence Tracker By Qasim Tahir </p></center>
   <center> <p style={{ fontFamily:"cursive", fontSize:"20px"}}>Current Balance $0 </p></center>


<Row style={{backgroundColor: 'purple'}} >
  <Col xs={6} sm={6} lg={6} md={6} style={{backgroundColor: 'white'}}>
    INCOME<br/>
    0.00
  </Col>
  <Col xs={6} sm={6} lg={6} md={6} style={{backgroundColor: 'white'}}>
  Expence<br/>
    0.00
  </Col>
</Row>



<Row>
  <Col>Transaction History</Col>
  <hr/>
</Row>

    </Col>
   
   
{/*............................................End of Top Right Corner*/}
</Row>
</Container>
      </div>
    )
  }
}

export default connect(null, {  })(Welcom);
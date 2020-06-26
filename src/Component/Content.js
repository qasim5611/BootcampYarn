import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
// import { sendToActionFORRetrive } from '../Redux/Action/action';

export class Welcom extends Component {

  // componentWillMount() {
  //   this.props.sendToActionFORRetrive();
  // }

  render() {
    return (
      <div>
        Welcom To Expense Tracker App By Qasim


        <Container>
        <Row>
    {/*............................................Top Left Corner*/}
    <Col xs={12} sm={12} lg={12} md={12}  style={{backgroundColor:'',height:"150px",boxShadow:"1px 1px 3px black"}}>
   
    <p style={{display:"inline",marginLeft:"20px", marginTop:"50px", fontFamily:"cursive", fontSize:"20px"}}>Qasim<br/>Join Date: 10-03-2019 </p>
    
    </Col>
   
   
{/*............................................End of Top Right Corner*/}
</Row>
</Container>
      </div>
    )
  }
}

export default connect(null, {  })(Welcom);
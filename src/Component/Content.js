import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Container } from 'react-bootstrap';
// import { sendToActionFORRetrive } from '../Redux/Action/action';
import TransactionHistory from './transactionHistory';
export class Welcom extends Component {

  // componentWillMount() {
  //   this.props.sendToActionFORRetrive();
  // }

  render() {
    return (
      <div>
     

        <Container>
        <Row >
    {/*............................................Top Left Corner*/}
    <Col xs={4} sm={4} lg={4} md={4}></Col>


    <Col xs={12} sm={12} lg={4} md={4}  style={{boxShadow:"1px 1px 3px black"}}>
   
   <center><p style={{ marginTop:"50px", fontFamily:"cursive", fontSize:"27px"}}>Expence Tracker App </p></center>
  <center> <p style={{ fontFamily:"cursive", fontSize:"20px"}}>Current Balance $0 </p></center>


<Row style={{backgroundColor: 'purple'}} >
 <Col xs={6} sm={6} lg={6} md={6} style={{color: 'green'}}>
   INCOME<br/>
   0.00
 </Col>
 <Col xs={6} sm={6} lg={6} md={6} style={{color: 'red'}}>
 Expence<br/>
   0.00
 </Col>
</Row>



<Row>
 <Col>
 <center> <p style={{ fontFamily:"cursive", fontSize:"20px"}}>Transaction History </p></center>
 </Col>
 <hr/>
</Row>

   </Col>
    <Col xs={4} sm={4} lg={4} md={4}></Col>



   
   
   
{/*............................................End of Top Right Corner*/}
</Row>
<Row>
<ul>
    <li className="plus" style={{borderRight: '10px green solid'}}>
       <center> Project 1 income
        <span>$ 1000</span> </center>
    </li>
    <li className="minus" style={{borderRight: '10px red solid'}}>
        <center> Project 1 salaries
        <span>$ 1000</span> </center>
    </li>
</ul>

</Row>
</Container>

      </div>
    )
  }
}

export default connect(null, {  })(Welcom);
import React, { Component } from 'react';
import './../App.css';
class transactionHistory extends Component {
    render() {
        return (
            <div>
               <h3>Transaction History</h3>
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

            </div>
        );
    }
}

export default transactionHistory;
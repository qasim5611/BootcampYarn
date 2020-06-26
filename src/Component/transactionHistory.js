import React, { Component } from 'react';
import './../App.css';
class transactionHistory extends Component {
    render() {
        return (
            <div>
               <h3>Transaction History</h3>
<ul>
    <li className="plus" style={{borderRight: '2px green solid'}}>
        Project 1 income
    </li>
    <li className="minus" style={{borderRight: '2px red solid'}}>
        Project 1 salaries
        <span>$ 1000</span>
    </li>
</ul>

            </div>
        );
    }
}

export default transactionHistory;
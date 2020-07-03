import React, { Component } from 'react';

class addTransaction extends Component {
    render() {
        return (
            <div>
                <h3>Add New Transaction</h3>

<form>
    <div className="form-control">
<label htmlFor='description'>
    Description
</label>

<input type="text"  id="description" placeholder="Detail of transaction" />
    </div>



    <div className="form-control">
<label htmlFor='transactionamount'>
    Transaction Amount
</label>

<input type="number"  id="transactionamount" placeholder="Enter Transaction Amount" />
    </div>


<button className="btn">Add Transaction</button>
</form>

            </div>
        );
    }
}

export default addTransaction;
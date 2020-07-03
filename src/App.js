import React from 'react';

// Import CSS
import './App.css';

// Import Components
import { Header } from './Component/Header';
import { Balance } from './Component/Balance';
import { AccountSummary } from './Component/accountSummary';
import { TransactionHistory } from './Component/transactionHistory';
import { AddTransaction } from './Component/addTransaction';

// Import Provider
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
      <GlobalProvider>
        <Header />
        <div className="container">
          <Balance />
          <AccountSummary />
          <TransactionHistory />
          <AddTransaction />
        </div>
      </GlobalProvider>
  );
}

export default App;

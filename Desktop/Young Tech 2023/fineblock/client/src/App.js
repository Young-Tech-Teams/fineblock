import React from 'react';
import HomePage from './components/HomePage';
import AccountPage from './components/AccountPage';

class App extends React.Component {
  render() {
    return (
      <div>
        <HomePage />
        <AccountPage />
      </div>
    );
  }
}

export default App;
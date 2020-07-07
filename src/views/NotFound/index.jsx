import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="App">
    <header className="App-header">
      <Link to="/">
        <div>VFCrypto</div>
      </Link>
      <p>
        Not Found
      </p>
    </header>
  </div>
)

export default NotFound;

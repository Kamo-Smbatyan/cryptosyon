import React from 'react';
import { Link } from 'react-router-dom';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Header = () => {
  return (
    <header>
      <h1>Solana DEX</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/trade">Trade</Link></li>
          <li><Link to="/wallet">Wallet</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/trading-dashboard">Trading Dashboard</Link></li> {/* Add Trading Dashboard link */}
        </ul>
      </nav>
      <WalletMultiButton />
    </header>
  );
};

export default Header;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dropdown from './Dropdown';
import '../styles/dca.css';

const DCA = () => {
  const [tokens, setTokens] = useState([]);
  const [fromToken, setFromToken] = useState('SOL');
  const [toToken, setToToken] = useState('USDC');
  const [amount, setAmount] = useState('');
  const [frequency, setFrequency] = useState('minute');
  const [interval, setInterval] = useState(1);
  const [numOrders, setNumOrders] = useState(1);
  const [orderStatus, setOrderStatus] = useState('');
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/tokens');
        setTokens(response.data);
      } catch (error) {
        console.error('Error fetching tokens:', error);
        setOrderStatus('Failed to fetch tokens');
      }
    };

    fetchTokens();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('DCA strategy submitted:', { fromToken, toToken, amount, frequency, interval, numOrders });
  };

  const handleSelectToken = (token, type) => {
    if (type === 'from') {
      setFromToken(token);
      setShowFromDropdown(false);
    } else {
      setToToken(token);
      setShowToDropdown(false);
    }
  };

  return (
    <div className="card small-card">
      <h2>Dollar Cost Averaging (DCA)</h2>
      {orderStatus && <p>{orderStatus}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="from-token">I want to sell:</label>
          <div className="inline-fields">
            <Dropdown
              tokens={tokens}
              selectedToken={fromToken}
              onSelectToken={(token) => handleSelectToken(token, 'from')}
              showDropdown={showFromDropdown}
              setShowDropdown={setShowFromDropdown}
            />
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount to Invest"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="to-token">To buy:</label>
          <Dropdown
            tokens={tokens}
            selectedToken={toToken}
            onSelectToken={(token) => handleSelectToken(token, 'to')}
            showDropdown={showToDropdown}
            setShowDropdown={setShowToDropdown}
          />
        </div>
        <div className="form-group">
          <label htmlFor="interval">Every</label>
          <div className="inline-fields">
            <input
              type="number"
              id="interval"
              value={interval}
              onChange={(e) => setInterval(e.target.value)}
              required
            />
            <select
              id="frequency"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              required
            >
              <option value="minute">Minute</option>
              <option value="hour">Hour</option>
              <option value="daily">Day</option>
              <option value="weekly">Week</option>
              <option value="monthly">Month</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="num-orders">Over</label>
          <div className="inline-fields">
            <input
              type="number"
              id="num-orders"
              value={numOrders}
              onChange={(e) => setNumOrders(e.target.value)}
              required
            />
            <label htmlFor="num-orders">orders</label>
          </div>
        </div>
        <button type="submit">Start DCA</button>
      </form>
    </div>
  );
};

export default DCA;

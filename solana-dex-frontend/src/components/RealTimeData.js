import React, { useEffect, useState } from 'react';

const RealTimeData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const ws = new WebSocket('wss://example.com/realtime'); // Replace with your WebSocket URL

    ws.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      setData((prevData) => [...prevData, newData]);
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div>
      <h2>Real-Time Data</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default RealTimeData;

import React, { useState } from 'react';

const App: React.FC = () => {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState<number | string>('');
  const [response, setResponse] = useState<any>(null);

  const handleSubmit = async () => {
    const itemData = {
      name: itemName,
      price: parseFloat(itemPrice as string),
    };

    try {
      const res = await fetch('http://127.0.0.1:8000/items/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(itemData),
      });

      if (res.ok) {
        const data = await res.json();
        setResponse(data);
      } else {
        console.error('Request failed with status:', res.status);
      }
    } catch (error) {
      console.error('Error sending request:', error);
    }
  };

  return (
    <div>
      <h1>FastAPI & React with Fetch</h1>
      <input
        type="text"
        placeholder="Item name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Item price"
        value={itemPrice}
        onChange={(e) => setItemPrice(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>

      {response && (
        <div>
          <h2>Response from API:</h2>
          <p>Name: {response.name}</p>
          <p>Price: {response.price}</p>
        </div>
      )}
    </div>
  );
};

export default App;

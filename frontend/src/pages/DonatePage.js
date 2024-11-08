import React, { useState } from 'react';

function DonatePage() {
  const [donationAmount, setDonationAmount] = useState('');

  const handleDonate = () => {
    alert(`Thank you for donating $${donationAmount}!`);
  };

  return (
    <div>
      <h2>Donate to Support Poverty Eradication</h2>
      <input 
        type="number" 
        value={donationAmount}
        onChange={(e) => setDonationAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <button onClick={handleDonate}>Donate</button>
    </div>
  );
}

export default DonatePage;

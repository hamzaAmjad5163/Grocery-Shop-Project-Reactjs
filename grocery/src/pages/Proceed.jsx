import React from 'react';

const Proceed = ({ userDetails, quantityOfOrder }) => {
  return (
    <div>
      {/* Left side: Display user details and quantity of order */}
      <div>
        <h3>User Details:</h3>
        <p>Name: {userDetails.name}</p>
        <p>Email: {userDetails.email}</p>
        <p>Phone Number: {userDetails.phoneNumber}</p>
        {/* Display other user details as needed */}
        
        <h3>Quantity of Order:</h3>
        <p>{quantityOfOrder} items</p>
      </div>

      {/* Right side: Display payment methods */}
      <div>
        {/* Implement the payment methods here */}
      </div>
    </div>
  );
};

export default Proceed;

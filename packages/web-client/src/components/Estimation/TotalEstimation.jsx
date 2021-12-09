import React from 'react';

function TotalEstimation({ data, ...rest }) {
  let { gasTotalPrice, totalRentCost, totalEatingCost, ticketPrice } = data;
  !gasTotalPrice ? gasTotalPrice = 0 : null;
  !totalRentCost ? totalRentCost = 0 : null;
  !totalEatingCost ? totalEatingCost = 0 : null;
  !ticketPrice ? ticketPrice = 0 : null;

  const total = gasTotalPrice + ticketPrice + totalRentCost + totalEatingCost;

  return (
    <div>
      <br /><br />
      <div className='item-description'>
        <div><strong>TOTAL</strong></div>
        <div><strong>R$ {total.toFixed(2).replace('.', ',')} <small>/pessoa</small></strong></div>
      </div>
      <br />
    </div>
  );
}

export default TotalEstimation;

import React from 'react';

function TotalEstimation() {
  const gasTotalPrice = 173.91786666666667;
  !gasTotalPrice ? gasTotalPrice = 0 : null;
  const totalRentCost = 693.2;
  !totalRentCost ? totalRentCost = 0 : null;
  const totalEatingCost = 600;
  !totalEatingCost ? totalEatingCost = 0 : null;

  const total = gasTotalPrice + totalRentCost + totalEatingCost;

  return (
    <div>
      <br /><br />
      <div className='item-description'>
        <div><strong>TOTAL</strong></div>
        <div><strong>R$ {total.toFixed(2).replace('.', ',')} /pessoa</strong></div>
      </div>
      <br />
    </div>
  );
}

export default TotalEstimation;
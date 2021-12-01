import React from 'react';

function RentEstimation() {
  
  const dailyRentCharge = 86.655;
  !dailyRentCharge ? dailyRentCharge = 0 : null;
  const totalRentCost = 693.2561;
  !totalRentCost ? totalRentCost = 0 : null;

  return (
    <div>
      <div className='item-description'>
        <div>Aluguel diária</div>
        <div>R$ {dailyRentCharge.toFixed(2).replace('.', ',')}</div>
      </div>
      <br />
      <div className='item-description'>
        <div><strong>Subtotal</strong></div>
        <div>R$ {totalRentCost.toFixed(2).replace('.', ',')} /pessoa</div>
      </div>
    </div>
  );
};

export default RentEstimation;
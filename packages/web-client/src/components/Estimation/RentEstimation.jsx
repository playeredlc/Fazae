import React from 'react';

function RentEstimation({ data, ...rest }) {
  
  let { dailyRentCharge, totalRentCost } = data;
  !dailyRentCharge ? dailyRentCharge = 0 : null;
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

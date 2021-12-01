import React from 'react';

function EatingEstimation() {
  
  const dailyEatingCost = 75;
  const totalEatingCost = 600;

  return (
    <div>
      <div className='item-description'>
        <div>Custo diário alimentação</div>
        <div>R$ {dailyEatingCost.toFixed(2).replace('.', ',')}</div>
      </div>
      <br />
      <div className='item-description'>
        <div><strong>Subtotal</strong></div>
        <div>R$ {totalEatingCost.toFixed(2).replace('.', ',')} /pessoa</div>
      </div>
    </div>
  );
};

export default EatingEstimation;
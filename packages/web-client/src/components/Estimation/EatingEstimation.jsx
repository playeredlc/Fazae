import React from 'react';

function EatingEstimation({ data, ...rest }) {
  let { dailyEatingCost, totalEatingCost } = data;
  !dailyEatingCost ? dailyEatingCost = 0 : null;
  !totalEatingCost ? totalEatingCost = 0 : null;

  return (
    <div>
      <div className='item-description'>
        <div className='item'>Custo diário alimentação</div>
        <div className='item'>R$ {dailyEatingCost.toFixed(2).replace('.', ',')}</div>
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

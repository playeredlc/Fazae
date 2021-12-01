import React from 'react';
function TransportEstimation() {
  
  const numCars = 2;
  const gasTotalPrice = 173.917867;
  !gasTotalPrice ? gasTotalPrice = 0 : null;
  const ticketPrice = 162;
  !ticketPrice ? ticketPrice = 0 : null;
  let totalTransportCost = gasTotalPrice + ticketPrice;

  return (
    <div>      
      { gasTotalPrice ? 
        <div>
          <div className='item-description' >
            <div>{numCars === 1 ? 'Carro necessário' : 'Carros necessários'}</div>
            <div>{numCars}</div>
          </div>
          <div className='item-description' >
            <div>Gasolina</div>
            <div>R${gasTotalPrice.toFixed(2).replace('.', ',')}</div>
          </div>
        </div>
      : null
      }
      { ticketPrice ?
        <div className='item-description'>
          <div>Passagem</div>
          <div>R$ {ticketPrice.toFixed(2).replace('.', ',')}</div>
        </div>
        : null
      }
      <br />
      <div className='item-description'>
        <div><strong>Subtotal</strong></div>
        <div>R$ {totalTransportCost.toFixed(2).replace('.', ',')} /pessoa</div>
      </div>
    </div>
  );
};

export default TransportEstimation;
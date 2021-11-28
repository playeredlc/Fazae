import React, { useState } from 'react';
import { TextField, CheckboxWithLabel } from 'formik-mui';
import { Field } from 'formik';
import { Grid } from '@material-ui/core';
function TransportForm() {
  const [carChecked, setCarChecked] = useState(false);
  const [busPlaneChecked, setBusPlaneChecked] = useState(false);
  
  function handleCarChange() {
    setCarChecked(!carChecked);
  }

  function handleBusPlaneChange() {
    setBusPlaneChecked(!busPlaneChecked);
  }

  return (
    <Grid container spacing={4} >
      <Grid item >
        <Field checked={carChecked} onChange={handleCarChange} name='byCar' type='checkbox' size='small' component={ CheckboxWithLabel } Label={{ label: 'Carro' }} />
        <Field checked={busPlaneChecked} onChange={handleBusPlaneChange} name='byBusPlane' type='checkbox' size='small' component={CheckboxWithLabel} Label={{ label: 'Ônibus/Avião' }} />
      </Grid>
      
      { 
        carChecked ? 
          <Grid item >
            <Field name='fuelPrice' type='number' component={ TextField } label='Preço combustível' />
          </Grid>
        : null
      }
      
      {
        carChecked ?
          <Grid item >
            <Field name='fuelConsumption' type='number' component={ TextField } label='Consumo (Km/L)' />
          </Grid>
        : null
      }

      { busPlaneChecked ? 
        <Grid item >
          <Field name='transportTicket' type='number' component={ TextField } label='Passagem' />
        </Grid>
      : null
      }
    </Grid>
  );
}

export default TransportForm;
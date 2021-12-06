import React, { useState } from 'react';
import { TextField, CheckboxWithLabel } from 'formik-mui';
import { Field } from 'formik';
import { Grid, Divider } from '@material-ui/core';
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
      <Grid item xs={12} > <Divider textAlign='left'>Transporte</Divider>  </Grid>

      <Grid item xs={12}>
        <Field onClick={handleCarChange} name='byCar' type='checkbox' size='small' component={ CheckboxWithLabel } Label={{ label: 'Carro' }} />
        <Field onClick={handleBusPlaneChange} name='byBusPlane' type='checkbox' size='small' component={CheckboxWithLabel} Label={{ label: 'Ônibus/Avião' }} />
      </Grid>
      
      { 
        carChecked ? 
          <Grid item >
            <Field name='fuelPrice' type='number' component={ TextField } label='Preço combustível' size='small' />
          </Grid>
        : null
      }
      
      {
        carChecked ?
          <Grid item >
            <Field name='fuelConsumption' type='number' component={ TextField } label='Consumo (Km/L)' size='small' />
          </Grid>
        : null
      }

      { busPlaneChecked ? 
        <Grid item >
          <Field name='transportTicket' type='number' component={ TextField } label='Passagem' size='small' />
        </Grid>
      : null
      }
    </Grid>
  );
}

export default TransportForm;
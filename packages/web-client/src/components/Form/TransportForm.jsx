import React from 'react';
import { TextField, CheckboxWithLabel } from 'formik-mui';
import { Field } from 'formik';
function TransportForm() {
  return (
    <div>
      <Field name='byCar' type='checkbox' component={ CheckboxWithLabel } Label={{ label: 'Carro' }} />
      <Field name='byBusPlane' type='checkbox' component={CheckboxWithLabel} Label={{ label: 'Ônibus/Avião' }} />
      <Field name='fuelPrice' type='number' component={ TextField } label='Preço combustível' />
      <Field name='fuelConsumption' type='number' component={ TextField } label='Consumo (Km/L)' />
      <Field name='transportTicket' type='number' component={ TextField } label='Passagem' />
    </div>
  );
}

export default TransportForm;
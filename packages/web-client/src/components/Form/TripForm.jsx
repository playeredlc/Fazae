import React from 'react';
import { TextField } from 'formik-mui';
import { Field } from 'formik';
import CityInput from './CityInput';

function TripForm() {
  return (
    <div id='trip-form'>
      <div className='city-input'>
        <Field name='origin' component={ CityInput } label='Origem'/>
      </div>
      <div className='city-input'>
        <Field name='destination' component={ CityInput } label='Destino' />
      </div>
      <Field name='numDays' type='number' component={ TextField } label='Dias de viagem' />
      <Field name='numPeople' type='number' component={ TextField } label='Número de pessoas' />
    </div>
  );
}

export default TripForm;
import React from 'react';
import { TextField } from 'formik-mui';
import { Field } from 'formik';

function RentForm() {
  return (
    <div>
      <Field name='houseCharge' type='number' component={ TextField } label='Preço diária' />
      <Field name='extraCharge' type='number' component={ TextField } label='Taxas' />
      <Field name='breakfastCost' type='number' component={ TextField } label='Café' />
      <Field name='lunchCost' type='number' component={ TextField } label='Almoço' />
      <Field name='dinnerCost' type='number' component={ TextField } label='Janta' />
      <Field name='extraEatingCost' type='number' component={ TextField } label='Extra' />
    </div>
  );
}

export default RentForm;
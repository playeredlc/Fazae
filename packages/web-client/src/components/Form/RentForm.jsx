import React from 'react';
import { TextField } from 'formik-mui';
import { Field } from 'formik';
import { Divider, Grid } from '@material-ui/core';

function RentForm() {
  return (
    <Grid container spacing={4} >
      <Grid item xs={12} > <Divider textAlign='left' >Acomodação</Divider>  </Grid>

      <Grid item xs={12} >
        <Field name='houseCharge' type='number' component={ TextField } label='Preço diária *' size='small' helperText='Valor total cobrado pela diária.' />
      </Grid>

      <Grid item item xs={12} >
        <Field name='extraCharge' type='number' component={ TextField } label='Taxas' size='small' />
      </Grid>
      
      <Grid item xs={12} > <Divider textAlign='left' >Alimentação <small>/pessoa</small></Divider>  </Grid>

      <Grid item item xs={6} >
        <Field name='breakfastCost' type='number' component={ TextField } label='Café' size='small' />
      </Grid>

      <Grid item item xs={6} >
        <Field name='lunchCost' type='number' component={ TextField } label='Almoço' size='small' />
      </Grid>

      <Grid item item xs={6} >
        <Field name='dinnerCost' type='number' component={ TextField } label='Janta' size='small' />
      </Grid>

      <Grid item item xs={6} >
        <Field name='extraEatingCost' type='number' component={ TextField } label='Extra' size='small' />
      </Grid>

    </Grid>
  );
}

export default RentForm;
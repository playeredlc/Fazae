import React, { useState } from 'react';
import { TextField } from 'formik-mui';
import { Field } from 'formik';
import CityInput from './CityInput';
import { Grid, Divider } from '@material-ui/core';
import { FormLabel } from '@material-ui/core';

function TripForm({ originHandler, destinationHandler, ...rest }) {

  return (
    <Grid container spacing={4} flexDirection='row' >
      <Grid item xs={12} > <Divider textAlign='left'>Informações Gerais</Divider>  </Grid>
      
      <Grid item xs={12} align='left'>
        <Field sx={{ width: '75%' }} name='numDays' type='number' component={ TextField } label='Dias de viagem *' size='small' />
      </Grid>
      
      <Grid item xs={12} align='left' >
        <Field sx={{ width: '75%' }} name='numPeople' type='number' component={ TextField } label='Número de pessoas *' size='small' />
      </Grid>
     
      <Grid item xs={6} >
        <FormLabel component="legend" sx={{pb: 1}} >Origem</FormLabel>
        <Field name='origin' component={ CityInput } label='Origem' locationHandler={originHandler} />        
      </Grid>

      <Grid item xs={6} >
        <FormLabel component="legend" sx={{pb: 1}} >Destino</FormLabel>
        <Field name='destination' component={ CityInput } label='Destino' locationHandler={destinationHandler} />
      </Grid>

    </Grid>
  );
}

export default TripForm;
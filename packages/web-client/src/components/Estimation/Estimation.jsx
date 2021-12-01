import React from 'react';
import { Card, Divider } from '@material-ui/core';
import { LocalGasStationOutlined, HomeWorkOutlined, FastfoodOutlined } from '@material-ui/icons'
import EstimationHeader from './EstimationHeader';
import TransportEstimation from './TransportEstimation';
import RentEstimation from './RentEstimation';
import EatingEstimation from './EatingEstimation';
import TotalEstimation from './TotalEstimation'


function Estimation() {

  return (
    <Card sx={{ mx: {
      xs: 2,
      sm: 16,
      md: 32,
      lg: 56,
      xl: 64,
     },
     my: 5,
     px: 2,
     textAlign: 'left'
    }}>
      <EstimationHeader />
      <Divider textAlign='left' ><LocalGasStationOutlined fontSize='small' color='disabled' /></Divider>
      <TransportEstimation />
      <br />
      <Divider textAlign='left' ><HomeWorkOutlined fontSize='small' color='disabled' /></Divider>
      <RentEstimation />
      <br />
      <Divider textAlign='left' ><FastfoodOutlined fontSize='small' color='disabled' /></Divider>
      <EatingEstimation />
      <br /><br />
      <Divider textAlign='right' variant='inset' >Total</Divider>
      <TotalEstimation />
    </Card>
    
  );
};

export default Estimation;

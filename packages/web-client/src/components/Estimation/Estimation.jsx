import React from 'react';
import { useLocation } from 'react-router-dom';
import { Card, Divider } from '@material-ui/core';
import { LocalGasStationOutlined, HomeWorkOutlined, FastfoodOutlined } from '@material-ui/icons'
import EstimationHeader from './EstimationHeader';
import TransportEstimation from './TransportEstimation';
import RentEstimation from './RentEstimation';
import EatingEstimation from './EatingEstimation';
import TotalEstimation from './TotalEstimation'


function Estimation() {
  const location = useLocation();

  return (
    <Card sx={{ mx: {
      xs: 2,
      sm: 16,
      md: 32,
      lg: 48,
      xl: 64,
     },
     my: 5,
     px: 2,
     textAlign: 'left'
    }}>
      <EstimationHeader data={location.state} />
      <Divider textAlign='left' ><LocalGasStationOutlined fontSize='small' color='disabled' /></Divider>
      <TransportEstimation data={location.state} />
      <br />
      <Divider textAlign='left' ><HomeWorkOutlined fontSize='small' color='disabled' /></Divider>
      <RentEstimation data={location.state} />
      <br />
      <Divider textAlign='left' ><FastfoodOutlined fontSize='small' color='disabled' /></Divider>
      <EatingEstimation data={location.state} />
      <br /><br />
      <Divider textAlign='right' variant='inset' >Total</Divider>
      <TotalEstimation data={location.state} />
    </Card>
    
  );
};

export default Estimation;

import React, { useState } from "react";
import { Card, CardContent, Typography } from '@material-ui/core';

import { FormikStepper } from "./FormikStepper";
import TripForm from "./TripForm";
import TransportForm from "./TransportForm";
import RentForm from "./RentForm";

export default function FormsHolder() {

  const [origin, setOrigin] = useState({});
  const [destination, setDestination] = useState({});
  
  function originHandler(originObject) {
    if(!originObject){
      console.log('Origin empty!');
    } else {
      setOrigin(originObject);
      // console.log('Origin set!');
    }
  };
  function destinationHandler(destinationObject) {
    if(!destinationObject) {
      console.log('Destination empty');
    } else {
      setDestination(destinationObject);
        // console.log('Destination set!');
    }
  };

  return (
    <Card sx={{ mx: {
      xs: 2,
      sm: 16,
      md: 32,
      lg: 48,
      xl: 64,
     },
    }} >
      <CardContent>
        <FormikStepper origin={origin} destination={destination} >
          <TripForm label='Viagem' originHandler={originHandler} destinationHandler={destinationHandler} />
          <TransportForm label='Transporte' />
          <RentForm label='Acomodação' />
        </FormikStepper>
      </CardContent>
    </Card>
  );
};

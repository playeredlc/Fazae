import React from "react";
import { Card, CardContent, Typography } from '@material-ui/core';

import { FormikStepper } from "./FormikStepper";
import TripForm from "./TripForm";
import TransportForm from "./TransportForm";
import RentForm from "./RentForm";

export default function FormsHolder() {

  return (
    <Card sx={{ mx: {
      xs: 2,
      sm: 16,
      md: 32,
      lg: 56,
      xl: 64,
     },
    }} >
      <CardContent>
        <FormikStepper>
          <TripForm label='Viagem' />
          <TransportForm label='Transporte' />
          <RentForm label='Acomodação' />
        </FormikStepper>
      </CardContent>
    </Card>
  );
};

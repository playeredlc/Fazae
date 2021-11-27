import React from "react";
import { Card, CardContent, Typography } from '@material-ui/core';

import { FormikStepper } from "./FormikStepper";
import TripForm from "./TripForm";
import TransportForm from "./TransportForm";
import RentForm from "./RentForm";

export default function FormsHolder() {

  return (
    <Card>
      <CardContent>
        <FormikStepper>
          <TripForm />
          <TransportForm />
          <RentForm />
        </FormikStepper>
      </CardContent>
    </Card>
  );
};

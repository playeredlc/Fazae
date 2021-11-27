import React from "react";
import { Card, CardContent, Typography } from '@material-ui/core';

import FormikStepper from "./FormikStepper";
import TripForm from "./TripForm";
import TransportForm from "./TransportForm";
import RentForm from "./RentForm";
import formConfig from './formikConfig';

export default function FormsHolder() {

  return (
    <Card>
      <CardContent>
        <FormikStepper
          initialValues={ formConfig.initValues }
          validationSchema={ formConfig.yupValidSchema }
          onSubmit={ () => {} }
        >
          <TripForm />
          <TransportForm />
          <RentForm />
          <button type='submit'>Submit</button>
        </FormikStepper>
      </CardContent>
    </Card>
  );
};

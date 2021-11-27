import React, { useState } from "react";
import { Card, CardContent, Typography } from '@material-ui/core';
import { Formik, Form } from 'formik';

import TripForm from "./TripForm";
import TransportForm from "./TransportForm";
import RentForm from "./RentForm";
import formConfig from './formikConfig';

export default function FormsHolder() {

  return (
    <Card>
      <CardContent>
        <Formik
          initialValues={ formConfig.initValues }
          validationSchema={ formConfig.yupValidSchema }
          onSubmit={ () => {} }
        >
          <Form autocomplete='off'>
            <TripForm />
            <TransportForm />
            <RentForm />
            <button type='submit'>Submit</button>
          </Form>        
        </Formik>
      </CardContent>
    </Card>
  );
};

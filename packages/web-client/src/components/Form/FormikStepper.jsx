import React, { useState } from 'react';
import { Formik, Form } from 'formik'
import { Button, Grid, CircularProgress } from '@material-ui/core';
import formConfig from './formikConfig';
import { Stepper, Step, StepLabel } from '@material-ui/core';
import axios from 'axios';


export function FormikStepper({ children, origin, destination, ...props }) {
  const childrenArray = React.Children.toArray(children)
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  const [isCompleted, setIsCompleted] = useState(false);

  const sleep = (time) => new Promise((acc) => setTimeout(acc, time));

  function isLastStep() {
    return (step === childrenArray.length -1);
  }
  return (
    <Formik
      
      {...props}

      initialValues={ formConfig.initValues }
      validationSchema={ formConfig.stepValidation[step] }
      onSubmit={ async (values, helpers) => {
        if(isLastStep()) {
          // await sleep(5000);
          
          let requestObject = values;
          requestObject.origin = origin;
          requestObject.destination = destination;
          // console.log(requestObject);
          
          const response = await axios({
            method: 'post',
            url: 'http://localhost:3000/estimate',
            data: requestObject,
          });
          console.log(response);
          setIsCompleted(true);

        } else {
          setStep( s => s+1 );
        }
      }}
    >
      {({isSubmitting}) => (

        <Form autoComplete='off' >
          <Stepper sx={{mb: 8, mt: 3}} activeStep={step} alternativeLabel>
            {childrenArray.map((child, index) => (
              <Step key={child.props.label} completed={ step > index || isCompleted }>
                <StepLabel> {child.props.label} </StepLabel>
              </Step>
            ))}
          </Stepper>
          
          {currentChild}
          <Grid container sx={{mt: 5}}>
            <Grid item xs={6} textAlign='left'>
              { step > 0 ? <Button variant='outlined' size='small'  onClick={ () => setStep( s => s-1 ) }>Anterior</Button> : null }
            </Grid>
            <Grid item xs={6} textAlign='right'>
              <Button startIcon={isSubmitting ? <CircularProgress size='1rem' /> : null} disabled={isSubmitting} variant='outlined' size='small' type='submit'>
                { isSubmitting ? 'Fazendo!' : isLastStep() ? 'Faz ae!' : 'Próximo' }
              </Button>
            </Grid>
          </Grid>
        </Form>

      )}
    </Formik>
  );
};

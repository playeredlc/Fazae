import React, { useState } from 'react';
import { Formik, Form } from 'formik'
import { Button } from '@material-ui/core';
import formConfig from './formikConfig';
import { Box } from '@material-ui/system';
import { Stepper, Step, StepLabel } from '@material-ui/core';


export function FormikStepper({ children, ...props }) {
  const childrenArray = React.Children.toArray(children)
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];

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
          // send values to back-end!
        } else {
          setStep( s => s+1 );
        }
      }}
    >
      <Form autoComplete='off'>
        <Stepper sx={{mb: 8, mt: 3}} activeStep={step} alternativeLabel>
          {childrenArray.map((child) => (
            <Step key={child.props.label}>
              <StepLabel> {child.props.label} </StepLabel>
            </Step>
          ))}
        </Stepper>
        {currentChild}
        <Box sx={{mt: 5}}>
          { step > 0 ? <Button onClick={ () => setStep( s => s-1 ) }>Anterior</Button> : null }
          <Button type='submit'> { isLastStep() ? 'Fazae' : 'Próximo' } </Button>
        </Box>
      </Form>
    </Formik>
  );
};

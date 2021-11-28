import React, { useState } from 'react';
import { Formik, Form } from 'formik'
import { Button } from '@material-ui/core';
import formConfig from './formikConfig';
import { Box } from '@material-ui/system';


export function FormikStepper({ children, ...props }) {
  const childrenArray = React.Children.toArray(children)
  const [step, setStep] = useState(1);
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
        {currentChild}
        <Box sx={{mt: 5}}>
          { step > 0 ? <Button onClick={ () => setStep( s => s-1 ) }>Anterior</Button> : null }
          <Button type='submit'> { isLastStep() ? 'Fazae' : 'Próximo' } </Button>
        </Box>
      </Form>
    </Formik>
  );
};

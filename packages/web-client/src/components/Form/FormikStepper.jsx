import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik'
import { Button, Grid, CircularProgress } from '@material-ui/core';
import formConfig from './formikConfig';
import { Stepper, Step, StepLabel } from '@material-ui/core';
import axios from 'axios';


export function FormikStepper({ children, origin, destination, ...props }) {
  const prodApiURL = 'https://fazae-api.herokuapp.com/estimate';
  const devApiURL = 'http://localhost:3000/estimate';
  
  const navigate = useNavigate();

  const childrenArray = React.Children.toArray(children)
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  const [isCompleted, setIsCompleted] = useState(false);

  function isLastStep() {
    return (step === childrenArray.length -1);
  };

  return (
    <Formik
      
      {...props}

      initialValues={ formConfig.initValues }
      validationSchema={ formConfig.stepValidation[step] }
      validateOnChange={false}
      validateOnBlur={false}
      
      onSubmit={ async (values, helpers) => {
        if(isLastStep()) {          
          let requestObject = values;
          requestObject.origin = origin;
          requestObject.destination = destination;
          
          try{
            const response = await axios({
              method: 'post',
              url: devApiURL,
              data: requestObject,
            });
            
            if(response.data.status !== 200) {
              console.log(response);
              navigate('/error', { state: response.data });
            } else {
              const stateObject = { ... response.data };
              setIsCompleted(true);
              navigate('/resultados', { state: stateObject });
            }            
            
          } catch (err) {
            navigate('/error', { state: err });
          }
          

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

import React, { useState } from 'react';
import { Formik, Form } from 'formik'


function FormikStepper({ children, ...props }) {
  const childrenArray = React.Children.toArray(children)
  const [step, setStep] = useState(2);
  const currentChild = childrenArray[step];

  return (
    <Formik {...props} >
      <Form autoComplete='off'>  {currentChild} </Form>
    </Formik>
  );
};

export default FormikStepper;
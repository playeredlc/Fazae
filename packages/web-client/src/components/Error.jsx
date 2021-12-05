import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@material-ui/core';

function Error() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if(!location.state) {
      console.log('inside');
      returnHome();
    };
  });

  function returnHome() {
    navigate('/');
  }

  return (
    <div className="error-box">
      {location.state 
        ? 
          <div>
            Ops :(
            <hr />
            <p>
              Ocorreu um erro: { location.state.message } <br /><br />
              
              Tente novamente.<br /><br />
              <Button variant='outlined' color='error' size='small' onClick={returnHome} >Voltar</Button>
              
            </p>
            <hr />
          </div>
        : 
          null
      }
    </div>
  );
}

export default Error;
